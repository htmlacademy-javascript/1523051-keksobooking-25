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
const TYPE_IMMOVABLES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_CHECKIN = ['12:00', '13:00', '14:00'];
const TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

let userNumberIndex=-1;

const createImmovables = () => {
  userNumberIndex++;
  const userNumber = AVATAR_LINK[userNumberIndex];
  const latNumber = getRandomInclusive(35.65000, 35.70000, 5);
  const lngNumber = getRandomInclusive(139.70000, 139.80000, 5);
  return {
    author: {avatar: `img/avatars/user${ userNumber }.png`},
    offer: {
      title: `Просторный ${  offer.rooms  }комнатный`,
      address: `${latNumber  } ${  lngNumber}`,
      price: getRandomInt(10000, 100000),
      type: TYPE_IMMOVABLES[getRandomInt(0, 4)],
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: TIME_CHECKIN[getRandomInt(0, 2)],
      checkout: TIME_CHECKOUT[getRandomInt(0, 2)],
      features: FEATURES.slice(0, getRandomInt(0, 6)),
      description: '',
      photos: PHOTOS.slice(0, getRandomInt(0, 3)),
    },
    location: {
      lat: latNumber,
      lng: lngNumber,
    }
  };
};

const similarWizards = Array.from({length: 4}, createImmovables);

console.log(similarWizards);
