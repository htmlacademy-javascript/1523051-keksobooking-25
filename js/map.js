import {renderOffer} from './render.js';
import {turnOnInactiveState} from './states.js';
import {turnOnActiveState} from './states.js';
import {address} from './user-form.js';
import {latCenter} from './user-form.js';
import {lngCenter} from './user-form.js';

/*document.addEventListener('DOMContentLoaded', () => {
  turnOnInactiveState();
});*/

const createMap = () => {
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
  return map;
};


const createMainMarker = (map) => {
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
};

const createMarker = (map,lat,lng,offer) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
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
};

const setOffersPin = (offers,map) => {
  offers.forEach((offer) => {
    createMarker(map,offer.location.lat,offer.location.lng,offer);
  });
};

export {setOffersPin};
export {createMainMarker};
export {createMap};
