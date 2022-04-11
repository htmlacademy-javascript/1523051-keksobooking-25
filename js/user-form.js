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
  getErrorMessage(roomNumberField)
);

const houseTypeField = form.querySelector('#type');
const housePriceField = form.querySelector('#price');

const getPriceField = (value) => {
  housePriceField.removeAttribute('placeholder');
  housePriceField.setAttribute('placeholder', value);
  housePriceField.setAttribute('min', value);
};

houseTypeField.addEventListener ('change', ()=> {
  switch (houseTypeField.value) {
    case 'bungalow':
      getPriceField(0);
      break;
    case 'flat':
      getPriceField(1000);
      break;
    case 'hotel':
      getPriceField(3000);
      break;
    case 'house':
      getPriceField(5000);
      break;
    case 'palace':
      getPriceField(10000);
      break;
  }
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
