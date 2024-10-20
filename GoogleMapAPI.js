async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
      mapId: "DEMO_MAP_ID",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: myLatlng,
      map,
      title: "Click to zoom",
    });
  

    marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marker.position);
    });
  }
  
  initMap();
  