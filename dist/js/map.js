import { Loader } from "@googlemaps/js-api-loader";
let map;
const center = { lat: 35.23316222896782, lng: -80.87316164625584 };
const zoom = 11;
const url = "https://maps.googleapis.com/maps/api/staticmap";
// @ts-ignore google.maps.plugins
const loader = new Loader({
  apiKey: "AIzaSyAVhbu3Ox7jzTQr-BMxDnNGlWmsxUXsZoU",
  version: "weekly",
});

// when the DOM content is fully loaded,
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content fully loaded");
  const wrapper = document.getElementById("wrapper");
  console.log("wrapper is", wrapper);
  wrapper.style.height = "400px";
  wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=AIzaSyAVhbu3Ox7jzTQr-BMxDnNGlWmsxUXsZoU)`;
  // listen for a click event and replace the static map with a dynamic map
  wrapper.addEventListener("click", () => {
    console.log("wrapper click event heard");
    wrapper.remove();
    loader.load().then(() => {
        console.log('load finished');
      map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom,
      });
    });
  });
});
