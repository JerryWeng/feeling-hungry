let map;
let marker;
let geocoder;
let responseDiv;
let response;
let service;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: { lat: 40.7696, lng: -73.9824 },
    mapTypeControl: false,
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.createElement("input");

  inputText.type = "text";
  inputText.placeholder = "Enter a location";

  const descText = document.createElement("input");

  descText.type = "text";
  descText.placeholder = "Enter a description";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Add Marker";
  submitButton.classList.add("button", "button-primary");

  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  responseDiv.id = "response-container";
  responseDiv.appendChild(response);
  

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(descText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
  });
  submitButton.addEventListener("click", () =>
    geocode({address:inputText.value
    }, descText.value)

  );
  clear();
}

function clear() {
  marker.setMap(null);
  responseDiv.style.display = "none";
}

function geocode(request, desc ) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;
      map.setCenter(results[0].geometry.location);
      responseDiv.style.display = "block";
      addMarker({address:results[0].geometry.location, content:desc});
      
    })
    .catch((e) => {
      alert("Inputting the marker was not successful for the following reason: " + e);
    });
}
function createMarker(place) {
  var marker = new google.maps.Marker({
      map : map,
      position : place
  });

  google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
  });
}
function addMarker(props){
    var marker = new google.maps.Marker({
        zoom: 20,
        position:props.address,
        map:map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      
    })
    var infoWindow = new google.maps.InfoWindow({
        content:props.content
    })

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    })
}



window.initMap = initMap;