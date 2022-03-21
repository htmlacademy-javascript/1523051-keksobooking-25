function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInclusive(min, max, afterPoint) {
  if (max>min) {
    return (min + Math.random() * (max - min)).toFixed(afterPoint);}
  else {
    if (min===max) {
      return min.toFixed(afterPoint);
    } else {
      return 'Значение От больше значения До';
    }
  }
}

const AVATAR_LINK = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_CHECKIN = ['12:00', '13:00', '14:00'];
const TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

let getFeatures = () => {
  const FEATURES_COPY = FEATURES.slice();
  const OFFER_FEATURES = [];
  const LENGHT = getRandomInt(1,FEATURES_COPY.length);
  for (let p = 0; p < LENGHT; p++) {
    const featureIndex = getRandomInt(0, FEATURES_COPY.length-1);
    const OFFER_FEATURES_ELEMENT = FEATURES_COPY[featureIndex];
    FEATURES_COPY.slice(featureIndex, 1);
    OFFER_FEATURES[p] = OFFER_FEATURES_ELEMENT;
  }
  return OFFER_FEATURES;
};

const createOffer = (i) => {
  const latNumber = getRandomInclusive(35.65000, 35.70000, 5);
  const lngNumber = getRandomInclusive(139.70000, 139.80000, 5);
  return {
    author: {avatar: `img/avatars/user${ AVATAR_LINK[i] }.png`},
    offer: {
      title: 'Сдается в аренду',
      address: `${latNumber  } ${  lngNumber}`,
      price: getRandomInt(10000, 100000),
      type: TYPES[getRandomInt(0, 4)],
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: TIME_CHECKIN[getRandomInt(0, 2)],
      checkout: TIME_CHECKOUT[getRandomInt(0, 2)],
      features: getFeatures(),
      description: 'Просторная и светлая, с развитой инфраструктурой',
      photos: PHOTOS.slice(0, getRandomInt(0, 3)),
    },
    location: {
      lat: latNumber,
      lng: lngNumber,
    }
  };
};

const OFFERS = Array.from({length: 10}, (e,i) => createOffer(i));
