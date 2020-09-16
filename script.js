window.onscroll = function() {
  hamburgerFunction();
};

function hamburgerFunction() {
  if (
    document.body.scrollTop > 140 ||
    document.documentElement.scrollTop > 140
  ) {
    document.getElementById("menuIcon").classList.add("show");
    document.getElementById("social").classList.add("show");
  } else {
    document.getElementById("menuIcon").classList.remove("show");
    document.getElementById("social").classList.remove("show");
    document.getElementById("menuIcon").classList.remove("change");
    document.getElementById("nav-bar").classList.remove("change");
  }
}

const navItem = document.getElementsByClassName("nav-item");
const menuIcon = document.getElementById("menuIcon");
const navBar = document.getElementById("nav-bar");

menuIcon.addEventListener("click", menuToggle);
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", menuToggle);
}

function menuToggle() {
  if (menuIcon.classList.contains("show")) {
    navBar.classList.toggle("change");
    menuIcon.classList.toggle("change");
  }
}

/*google maps api*/

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 37.14, lng: -115.483 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });

  // The location of Uluru
  var uluru2 = { lat: 25, lng: -71 };
  // The map, centered at Uluru
  var map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 5,
    center: uluru2
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru2, map: map2 });
}
