import {getOffers} from './data.js';
const similarListElement = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOffers = getOffers(5);

similarOffers.forEach((OFFER) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  offerElement.querySelector('.popup__avatar').src = OFFER.author.avatar;
  offerElement.querySelector('.popup__title').textContent = OFFER.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = OFFER.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = OFFER.offer.price + ' ' + offerElement.querySelector('span').textContent;
  offerElement.querySelector('.popup__type').textContent = OFFER.offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = OFFER.offer.type;
  let numberOfRooms = ''
  switch (OFFER.offer.rooms) {
    case 1:
      numberOfRooms = OFFER.offer.rooms + ' комната'
      break;
    case 2:
    case 3:
    case 4:
      numberOfRooms = OFFER.offer.rooms + ' комнаты'
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      numberOfRooms = OFFER.offer.rooms + ' комнат'
      break;
  }
  let numberOfGuests = ''
  switch (OFFER.offer.guests) {
    case 1:
      numberOfGuests = OFFER.offer.guests + ' гостя'
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      numberOfGuests = OFFER.offer.guests + ' гостей'
      break;
  }
  offerElement.querySelector('.popup__text--capacity').textContent = numberOfRooms + ' для ' + numberOfGuests;
  offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + OFFER.offer.checkin + ', выезд до ' + OFFER.offer.checkout;
/*
  const featureContainer = document.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const modifiers = OFFER.offer.features.map((offerFeature) => 'popup__feature--' + offerFeature);

  featureList.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });



const featureContainer = document.querySelector('.popup__features');
const featureListFragment = document.createDocumentFragment();
OFFER.offer.features.forEach((featureItem) => {
  const featureListItem = featureContainer.querySelector('.popup__feature--' + featureItem);

  if (featureListItem) {
    featureListFragment.append(featureListItem);
  }
});

featureContainer.innerHTML = '';
featureContainer.append(featureListFragment);*/

offerElement.querySelector('.popup__description').textContent = OFFER.offer.description;
if (OFFER.offer.photos.length>1) {
  offerElement.querySelector('.popup__photo').src = OFFER.offer.photos[0];
  for (let i=1; i<OFFER.offer.photos.length; i++) {
    const nextElementHTML = '<img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">';
    offerElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', nextElementHTML);
    offerElement.querySelector('.popup__photos').querySelector('.popup__photo:last-child').src = OFFER.offer.photos[i];
  }
} else {offerElement.querySelector('.popup__photo').src = OFFER.offer.photos[0];}

similarListElement.appendChild(offerElement);
});
