import {getOffers} from './data.js';
const similarListElement = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getDeclension = (rooms,guests,declensions) => {
  let numberOfRoomsGuests = '';
  switch (rooms) {
    case 1:
      numberOfRoomsGuests = `${rooms} ${ declensions[0]} для `;
      break;
    case 2:
    case 3:
    case 4:
      numberOfRoomsGuests = `${rooms} ${ declensions[1]} для `;
      break;
    default:
      numberOfRoomsGuests = `${rooms} ${ declensions[2]} для `;
  }
  switch (guests) {
    case 1:
      numberOfRoomsGuests += `${guests} ${ declensions[3]}`;
      break;
    default:
      numberOfRoomsGuests += `${guests} ${ declensions[4]}`;
  }
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
    offerElement.querySelector('.popup__text--capacity').textContent = getDeclension(offer.offer.rooms,offer.offer.guests,['комната', 'комнаты', 'комнат', 'гостя', 'гостей']);
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
