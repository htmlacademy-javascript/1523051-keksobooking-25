import {getOffers} from './data.js';
const similarListElement = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getDeclensionRooms = (offerNumberOfRooms) => {
  let numberOfRooms = '';
  switch (offerNumberOfRooms) {
    case 1:
      numberOfRooms = `${offerNumberOfRooms  } комната`;
      break;
    case 2:
    case 3:
    case 4:
      numberOfRooms = `${offerNumberOfRooms  } комнаты`;
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      numberOfRooms = `${offerNumberOfRooms  } комнат`;
      break;
  }
  return numberOfRooms;
};

const getDeclensionGuests = (offerNumberOfGuests) => {
  let numberOfGuests = '';
  switch (offerNumberOfGuests) {
    case 1:
      numberOfGuests = `${offerNumberOfGuests  } гостя`;
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
      numberOfGuests = `${offerNumberOfGuests  } гостей`;
      break;
  }
  return numberOfGuests;
};

const createImage = (link) => {
  const image = document.createElement('img');
  image.classList.add('popup__photos');
  image.src = link;
  image.textContent = 'Фотография жилья';
  image.width = 45;
  image.height = 40;
  return image;
};

const similarOffers = getOffers(1);

similarOffers.forEach((offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  offerElement.querySelector('.popup__avatar').src = offer.author.avatar;
  offerElement.querySelector('.popup__title').textContent = offer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price  } ${  offerElement.querySelector('span').textContent}`;
  offerElement.querySelector('.popup__type').textContent = offer.offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = offer.offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${getDeclensionRooms(offer.offer.rooms)  } для ${  getDeclensionGuests(offer.offer.guests)}`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.offer.checkin  }, выезд до ${  offer.offer.checkout}`;

  const featureContainer = offerElement.querySelector('.popup__features');
  const featureListFragment = document.createDocumentFragment();
  offer.offer.features.forEach((featureItem) => {
    const featureListItem = featureContainer.querySelector(`.popup__feature--${  featureItem}`);

    if (featureListItem) {
      featureListFragment.append(featureListItem);
    }
  });

  featureContainer.innerHTML = '';
  featureContainer.append(featureListFragment);

  const photoContainer = offerElement.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  const photoListFragment = document.createDocumentFragment();
  if (offer.offer.photos.length > 0){
    offer.offer.photos.forEach((photoSrc) => {
      photoListFragment.append(createImage(photoSrc));
    });

    photoContainer.innerHTML = '';
    photoContainer.append(photoListFragment);
  } else {photoContainer.innerHTML = '';}

  similarListElement.appendChild(offerElement);
});
