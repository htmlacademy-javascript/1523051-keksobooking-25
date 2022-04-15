import {getOffers} from './data.js';
import {renderOffer} from './render.js';
import {turnOnActiveState} from './states.js';
import {turnOnInactiveState} from './states.js';
import {address} from './user-form.js';
import {latCenter} from './user-form.js';
import {lngCenter} from './user-form.js';


window.addEventListener('DOMContentLoaded', ()=> {
  turnOnInactiveState();
});

const map = L.map('map-canvas')
  .on('load', () => {
    turnOnActiveState();
  })
  .setView({
    lat: latCenter,
    lng: lngCenter,
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

const mainMarker = L.marker(
  {
    lat: latCenter,
    lng: lngCenter,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)  } с.ш. ${  evt.target.getLatLng().lng.toFixed(5)  } в.д.`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const setOffersPin = (count) => {

  getOffers(count).forEach((offer) => {

    const lat = offer.location.lat;
    const lng = offer.location.lng;
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
      .bindPopup(renderOffer(offer));
  });
};

export {setOffersPin};
