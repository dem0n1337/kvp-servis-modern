<template>
  <div class="w-full h-96 rounded-xl overflow-hidden border border-primary-medium/20 shadow-lg">
    <div ref="mapContainer" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mapContainer = ref(null)
const config = useRuntimeConfig()

// Business coordinates for Ružová 406/24, Slovenský Grob (corrected)
const businessLat = 48.253643001565294
const businessLng = 17.284890218077

onMounted(() => {
  if (process.client) {
    // Load Google Maps API
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&callback=initMap`
    script.async = true
    script.defer = true
    
    // Create global callback function
    window.initMap = () => {
      // Initialize the map
      const map = new google.maps.Map(mapContainer.value, {
        center: { lat: businessLat, lng: businessLng },
        zoom: 16,
        mapTypeId: 'roadmap',
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{"weight": "2.00"}]
          },
          {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#9c9c9c"}]
          },
          {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [{"visibility": "on"}]
          }
        ]
      })

      // Create custom marker
      const marker = new google.maps.Marker({
        position: { lat: businessLat, lng: businessLng },
        map: map,
        title: 'KVP-Servis - Marcel Jazyk',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#e74c3c',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      })

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: #1e2a3a;">KVP-Servis</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
              <strong>Marcel Jazyk</strong><br>
              Ružová 406/24<br>
              900 26 Slovenský Grob
            </p>
            <p style="margin: 0; font-size: 14px;">
              <strong>Telefón:</strong> <a href="tel:+421918572389" style="color: #e74c3c; font-weight: 600;">+421 918 572 389</a><br>
              <strong>Email:</strong> <a href="mailto:info@kvp-servis.sk" style="color: #e74c3c; font-weight: 600;">info@kvp-servis.sk</a>
            </p>
          </div>
        `
      })

      // Open info window by default
      infoWindow.open(map, marker)

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })
    }
    
    // Add script to document
    document.head.appendChild(script)
  }
})
</script>