import {getOffers} from './data.js';
const similarListElement = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getDeclension = (rooms,guests) => {
  const numberOfRoomsGuests = rooms===1 & guests===1 ? '1 комната для 1 гостя':
    rooms===1 & guests>=2 ? `1 комната для ${  guests  } гостей`:
      rooms>=2 & rooms<=4 & guests===1 ? `${rooms  } комнаты для 1 гостя`:
        rooms>=2 & rooms<=4 & guests>=2 ? `${rooms  } комнаты для ${  guests  } гостей`:
          rooms>=5 & rooms===1 ? `${rooms  } комнат для 1 гостя`: `${rooms  } комнат для ${  guests  } гостей`;
  return numberOfRoomsGuests;
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

const renderOffers = (count) => {
  const similarOffers = getOffers(count);

  similarOffers.forEach((offer) => {
    const offerElement = similarOfferTemplate.cloneNode(true);
    offerElement.querySelector('.popup__avatar').src = offer.author.avatar;
    offerElement.querySelector('.popup__title').textContent = offer.offer.title;
    offerElement.querySelector('.popup__text--address').textContent = offer.offer.address;
    offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price  } ${  offerElement.querySelector('span').textContent}`;
    offerElement.querySelector('.popup__type').textContent = offer.offer.type;
    offerElement.querySelector('.popup__text--capacity').textContent = offer.offer.type;
    offerElement.querySelector('.popup__text--capacity').textContent = getDeclension(offer.offer.rooms,offer.offer.guests);
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
  return similarOffers;
};

export {renderOffers};
