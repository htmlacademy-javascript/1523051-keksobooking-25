import {array} from './map.js'
const filters = document.querySelector('.map__filters');
const housingType = filters.querySelector('#housing-type');
const housingPrice = filters.querySelector('#housing-price');
const housingRooms = filters.querySelector('#housing-rooms');
const housingGuests = filters.querySelector('#housing-guests');
const checkboxWifi = filters.querySelector('#filter-wifi');
const checkboxDishwasher = filters.querySelector('#filter-dishwasher');
const checkboxParking = filters.querySelector('#filter-parking');
const checkboxWasher = filters.querySelector('#filter-washer');
const checkboxElevator = filters.querySelector('#filter-elevator');
const checkboxConditioner = filters.querySelector('#filter-conditioner');


const getOffersFilter = (cb) => {
  array.filters.addEventListener('change',()=>{
    offersServer.filter(
      function(offer){
        if (housingType.value === 'any') {
          return (
          offer.offer.type === 'bungalow' ||
          offer.offer.type === 'flat' ||
          offer.offer.type === 'hotel' ||
          offer.offer.type === 'house' ||
          offer.offer.type === 'palace');
        } else {return offer.offer.type === housingType.value;}
      })
      .filter(
        function(offer){
          if (housingPrice.value === 'any') {return offer.offer.price >= 0};
          if (housingPrice.value === 'low') {return offer.offer.price <10000};
          if (housingPrice.value === 'middle') {return offer.offer.price >= 10000 || offer.offer.price <= 50000};
          if (housingPrice.value === 'high') {return offer.offer.price >50000};
        })
        .filter(
          function(offer){
            if (housingRooms.value === 'any') {return offer.offer.rooms > 0};
            if (housingRooms.value === '1') {return offer.offer.rooms === 1};
            if (housingRooms.value === '2') {return offer.offer.rooms === 2};
            if (housingRooms.value === '3') {return offer.offer.rooms === 3};
          })
          .filter(
            function(offer){
              if (housingGuests.value === 'any') {return offer.offer.guests >= 0};
              if (housingGuests.value === '1') {return offer.offer.guests === 1};
              if (housingGuests.value === '2') {return offer.offer.guests === 2};
              if (housingGuests.value === '0') {return offer.offer.guests === 0};
            });
            cb();
  });
};

export {getOffersFilter};




/*
const getOfferRank = (offer) => {
  let rank = 0;
  if (checkboxWifi.checked && array2.includes(checkboxWifi.value)) {
    rank += 1;
  };
  if (checkboxDishwasher.checked && array2.includes(checkboxDishwasher.value)) {
    rank += 1;
  };
  if (checkboxParking.checked && array2.includes(checkboxParking.value)) {
    rank += 1;
  };
  if (checkboxWasher.checked && array2.includes(checkboxWasher.value)) {
    rank += 1;
  };
  if (checkboxElevator.checked && array2.includes(checkboxElevator.value)) {
    rank += 1;
  };
  if (checkboxConditioner.checked && array2.includes(checkboxConditioner.value)) {
    rank += 1;
  };
  return rank;
};

const compareFeatures = (offerA, offerB) => {
  const rankA = getOfferRank(offerA);
  const rankB = getOfferRank(offerB);
  return rankB - rankA;
}

filters.addEventListener('change',()=>{array.sort(compareFeatures);
  console.log(array);
});

*/
