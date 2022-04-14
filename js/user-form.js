const form = document.querySelector('.ad-form');
const sliderElement = form.querySelector('.ad-form__slider');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'p'
});

const address = form.querySelector('#address');
const latCenter = 35.70000;
const lngCenter = 139.42500;

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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const setMinFieldSlider = (minField) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minField,
      max: 100000,
    },
    step: 1,
    start: minField,
  });
};

const setPriceForHouseType = () => {
  switch (houseTypeField.value) {
    case 'bungalow':
      setPriceField(0);
      setMinFieldSlider(0);
      break;
    case 'flat':
      setPriceField(1000);
      setMinFieldSlider(1000);
      break;
    case 'hotel':
      setPriceField(3000);
      setMinFieldSlider(3000);
      break;
    case 'house':
      setPriceField(5000);
      setMinFieldSlider(5000);
      break;
    case 'palace':
      setPriceField(10000);
      setMinFieldSlider(10000);
      break;
  }
};

window.addEventListener ('load', ()=> {
  address.value = `${latCenter.toFixed(5)  } с.ш. ${  lngCenter.toFixed(5)  } в.д.`;
  setPriceForHouseType();
});

houseTypeField.addEventListener ('change', ()=> {
  setPriceForHouseType();
});

sliderElement.noUiSlider.on('update', () => {
  housePriceField.value = sliderElement.noUiSlider.get();
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
  if (!pristine.validate()) {evt.preventDefault();}
});

export {address};
