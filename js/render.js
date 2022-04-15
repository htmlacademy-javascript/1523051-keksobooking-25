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

const setFeatures = (valueFeatures, container) => {
  const featureListFragment = document.createDocumentFragment();
  valueFeatures.forEach((featureItem) => {
    const featureListItem = container.querySelector(`.popup__feature--${  featureItem}`);
    if (featureListItem) {
      featureListFragment.append(featureListItem);
    }
  });
  container.innerHTML = '';
  container.append(featureListFragment);
};

const setPhoto = (photos, container) => {
  const photoListFragment = document.createDocumentFragment();
  if (photos.length > 0){
    photos.forEach((photoSrc) => {
      photoListFragment.append(createImage(photoSrc));
    });
    container.innerHTML = '';
    container.append(photoListFragment);
  } else {container.innerHTML = '';}
};

const renderOffer = (offer) => {
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
  setFeatures(offer.offer.features, featureContainer);
  const photoContainer = offerElement.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  setPhoto(offer.offer.photos, photoContainer);
  return offerElement;
};

export {renderOffer};
