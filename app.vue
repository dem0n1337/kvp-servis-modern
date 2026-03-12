<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// JSON-LD LocalBusiness structured data (global)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://kvp-servis.sk/#business',
        name: 'KVP-Servis',
        description: 'Profesionálne služby v oblasti kúrenia, vody a plynu. Inštalácia, servis a údržba kotlov, podlahového kúrenia a vodovodných systémov v Bratislavskom kraji.',
        url: 'https://kvp-servis.sk',
        telephone: '+421918572389',
        email: 'marcel.jezik@kvp-servis.sk',
        founder: {
          '@type': 'Person',
          name: 'Marcel Ježík',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ružová 406/24',
          addressLocality: 'Slovenský Grob',
          postalCode: '900 26',
          addressRegion: 'Bratislavský kraj',
          addressCountry: 'SK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.253643,
          longitude: 17.284890,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '09:00',
          closes: '17:00',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Bratislavský kraj',
        },
        priceRange: '$$',
        image: 'https://kvp-servis.sk/favicon.ico',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Služby KVP-Servis',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Kúrenie',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inštalácia a servis kotlov' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Podlahové kúrenie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radiátorové systémy' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Voda',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vodovodné inštalácie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rekonštrukcia kúpeľní' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opravy a údržba' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Plyn',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plynové inštalácie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bezpečnostné kontroly a revízie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servis plynových kotlov' } },
              ],
            },
          ],
        },
      }),
    },
  ],
})
</script>
