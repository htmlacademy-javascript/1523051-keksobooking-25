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

capacityField.addEventListener ('change', ()=> {
  pristine.addValidator(
    form.querySelector('#capacity'),
    checkingNumberGuests,
    getErrorMessage(roomNumberField)
  );
});

const typeHouse = form.querySelector('#type');
const priceHouse = form.querySelector('#price');

const getPrice = (value) => {
  priceHouse.removeAttribute('placeholder');
  priceHouse.setAttribute('placeholder', value);
  priceHouse.setAttribute('min', value);
};

typeHouse.addEventListener ('change', ()=> {
  switch (typeHouse.value) {
    case 'bungalow':
      getPrice(0);
      break;
    case 'flat':
      getPrice(1000);
      break;
    case 'hotel':
      getPrice(3000);
      break;
    case 'house':
      getPrice(5000);
      break;
    case 'palace':
      getPrice(10000);
      break;
  }
});

priceHouse.addEventListener ('change', () => {
  const checkingPrice = () => priceHouse.getAttribute('min') > priceHouse.value;
  pristine.addValidator(
    form.querySelector('#price'),
    checkingPrice,
    'Указанная сумма меньше минимальной'
  );
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener ('change', ()=> {
  switch (timeIn.value) {
    case '12:00':
      timeOut.value = '12:00';
      break;
    case '13:00':
      timeOut.value = '13:00';
      break;
    case '14:00':
      timeOut.value = '14:00';
      break;
  }
});

timeOut.addEventListener ('change', ()=> {
  switch (timeOut.value) {
    case '12:00':
      timeIn.value = '12:00';
      break;
    case '13:00':
      timeIn.value = '13:00';
      break;
    case '14:00':
      timeIn.value = '14:00';
      break;
  }
});

