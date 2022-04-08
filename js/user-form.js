const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span'
});

const roomNumberField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');

const checkingNumberGuests = () => roomNumberField.value >= capacityField.value;

const getErrorMessage = (valueRooms, valueGuests) => {
  let errorMessageText = '';
  switch (valueRooms) {
    case 1:
      errorMessageText = `${  valueGuests[0].textContent}`;
      break;
    case 2:
      errorMessageText = `${  valueGuests[1].textContent  } или ${  valueGuests[0].textContent}`;
      break;
    case 3:
      errorMessageText = `${  valueGuests[2].textContent  }, ${  valueGuests[1].textContent  } или ${  valueGuests[0].textContent}`;
      break;
    default:
      errorMessageText = `${  valueGuests[3].textContent}`;
  }
  return errorMessageText;
};

roomNumberField.addEventListener ('change', ()=> {
  pristine.addValidator(
    form.querySelector('#capacity'),
    checkingNumberGuests,
    getErrorMessage(roomNumberField.value,capacityField.children)
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


priceHouse.addEventListener ('change', ()=> {
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
