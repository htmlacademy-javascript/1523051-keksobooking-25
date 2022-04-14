import {turnOnActiveState} from './states.js';
import {renderOffers} from './render.js';

const map = L.map('map-canvas')
  /*.on('load', () => {
    turnOnActiveState();
  })*/
  .setView({
    lat: 35.70000,
    lng: 139.42500,
  }, 10);

  L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);



const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.70000,
    lng: 139.42500,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)  } с.ш. ${  evt.target.getLatLng().lng.toFixed(5)  } в.д.`;
});

let points = renderOffers(10);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

points.forEach((offer) => {
    let lat = offer.location.lat;
    let lng = offer.location.lng;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
});

