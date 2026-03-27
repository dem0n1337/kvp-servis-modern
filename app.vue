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
        '@type': ['LocalBusiness', 'Plumber', 'HVACBusiness'],
        '@id': 'https://kvp-servis.sk/#business',
        name: 'KVP-Servis',
        alternateName: ['KVP Servis', 'Kúrenár Bratislava KVP-Servis', 'Inštalatér Bratislava KVP-Servis'],
        description: 'KVP-Servis — váš kúrenár a inštalatér v Bratislave a okolí. Inštalácia kondenzačných kotlov za 1 deň, servis kotlov Buderus, Vaillant, Protherm, podlahové kúrenie, vodoinštalácie a plynové rozvody. Bratislavský kraj.',
        url: 'https://kvp-servis.sk',
        telephone: '+421918572389',
        email: 'marcel.jezik@kvp-servis.sk',
        founder: {
          '@type': 'Person',
          name: 'Marcel Ježík',
          jobTitle: 'Kúrenár a inštalatér',
        },
        knowsAbout: ['kúrenár', 'inštalatér', 'plynoinštalatér', 'servis kotlov', 'kondenzačný kotol', 'podlahové kúrenie', 'vodoinštalácie', 'plynové rozvody'],
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
        areaServed: [
          {
            '@type': 'City',
            name: 'Bratislava',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Bratislavský kraj',
          },
        ],
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
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inštalácia kondenzačných kotlov' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servis plynových kotlov Buderus, Vaillant, Protherm' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Podlahové kúrenie — inštalácia, preplach a chemické čistenie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Radiátorové systémy a výmena termostatických ventilov' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vyvložkovanie komínov' } },
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
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plynové rozvody a inštalácie' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pripojenie sporákov a varných dosiek' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detekcia a oprava úniku plynu' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tlakové skúšky a výmena regulátorov plynu' } },
              ],
            },
          ],
        },
      }),
    },
  ],
})
</script>
