// Initialize and add the map
function initMap() {
    // The location of India
    const uluru = { lat: 20.593683, lng: 78.962883 };
    // The map, centered at India
    const map = new google.maps.Map(document.getElementById("map-view"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at India
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  