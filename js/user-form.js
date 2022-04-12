const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'p'
});

const roomNumberField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');

const checkingNumberGuests = () => roomNumberField.value >= capacityField.value;

const getErrorMessage = (valueRooms) => {
  let errorMessageText = '';
  switch (valueRooms.value) {
    case '1':
      errorMessageText = 'Выбранное количество комнат для 1 гостя';
      break;
    case '2':
      errorMessageText = 'Выбранное количество комнат для 1 гостя или для 2 гостей';
      break;
    case '3':
      errorMessageText = 'Выбранное количество комнат для 1 гостя, для 2 гостей или для 3 гостей';
      break;
    case '4':
      errorMessageText = 'Выбранное количество комнат не для гостей';
      break;
  }
  return errorMessageText;
};

pristine.addValidator(
  form.querySelector('#capacity'),
  checkingNumberGuests,
  () => getErrorMessage(roomNumberField)
);

const houseTypeField = form.querySelector('#type');
const housePriceField = form.querySelector('#price');

const setPriceField = (value) => {
  housePriceField.removeAttribute('placeholder');
  housePriceField.setAttribute('placeholder', value);
  housePriceField.setAttribute('min', value);
};

const setPriceForHouseType = () => {
  switch (houseTypeField.value) {
    case 'bungalow':
      setPriceField(0);
      break;
    case 'flat':
      setPriceField(1000);
      break;
    case 'hotel':
      setPriceField(3000);
      break;
    case 'house':
      setPriceField(5000);
      break;
    case 'palace':
      setPriceField(10000);
      break;
  }
};

window.addEventListener ('load', ()=> {
  setPriceForHouseType();
});

houseTypeField.addEventListener ('change', ()=> {
  setPriceForHouseType();
});

const checkingHousePrice = () => parseInt(housePriceField.getAttribute('min'),10) <= housePriceField.value;

pristine.addValidator(
  form.querySelector('#price'),
  checkingHousePrice,
  'Указанная сумма меньше минимальной'
);

const timeInField = form.querySelector('#timein');
const timeOutField = form.querySelector('#timeout');

timeInField.addEventListener ('change', ()=> {
  timeOutField.value = timeInField.value;
});

timeOutField.addEventListener ('change', ()=> {
  timeInField.value = timeOutField.value;
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
