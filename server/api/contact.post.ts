import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Get runtime config
    const config = useRuntimeConfig()

    // Create transporter for Forpsi SMTP - fixed with correct recipient domain
    const transporter = nodemailer.createTransport({
      host: config.smtpServer, // smtp.forpsi.com
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: config.smtpUser, // info@kvp-servis.sk
        pass: config.smtpPass
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
      }
    })

    // Email content - sending to the same domain to avoid DNS issues
    const mailOptions = {
      from: config.smtpUser, // info@kvp-servis.sk
      to: config.smtpUser, // info@kvp-servis.sk (same domain = valid DNS)
      replyTo: body.email, // Customer can be reached via reply
      subject: `Nová správa z webu KVP-Servis - ${body.service || 'Všeobecný dopyt'}`,
      html: `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefón:</strong> ${body.phone || 'Neuvedený'}</p>
        <p><strong>Typ služby:</strong> ${body.service || 'Neuvedený'}</p>
        <p><strong>Správa:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Táto správa bola odoslaná z kontaktného formulára na kvp-servis.sk</small></p>
        <p><small>Pre odpoveď kliknite na "Odpovedať" - email sa odošle priamo na ${body.email}</small></p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email bol úspešne odoslaný'
    }

  } catch (error) {
    console.error('Contact form error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Chyba pri odosielaní emailu'
    })
  }
})