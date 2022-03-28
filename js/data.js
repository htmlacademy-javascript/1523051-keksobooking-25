import {getRandomInt} from './util.js';
import {getRandomInclusive} from './util.js';

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
const LAT_NUMBER_MIN = 35.65000;
const LAT_NUMBER_MAX = 35.70000;
const LNG_NUMBER_MIN = 139.70000;
const LNG_NUMBER_MAX = 139.80000;


const getFeatures = () => {
  const featuresCopy = FEATURES.slice();
  const offerFeatures = [];
  const length = getRandomInt(1,featuresCopy.length);
  for (let p = 0; p < length; p++) {
    const featureIndex = getRandomInt(0, featuresCopy.length-1);
    const offerFeaturesElement = featuresCopy[featureIndex];
    featuresCopy.slice(featureIndex, 1);
    offerFeatures[p] = offerFeaturesElement;
  }
  return offerFeatures;
};

const createOffer = (i) => {
  const latNumber = getRandomInclusive(LAT_NUMBER_MIN, LAT_NUMBER_MAX, 5);
  const lngNumber = getRandomInclusive(LNG_NUMBER_MIN, LNG_NUMBER_MAX, 5);
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

const getOffers = (count) => Array.from({length: count}, (e,i) => createOffer(i));
export {getOffers};
