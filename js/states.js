const turnOnInactiveState = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('fieldset').setAttribute('disabled', 'disabled');
  form.querySelector('ad-form__slider').setAttribute('disabled', 'disabled');
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.children.setAttribute('disabled', 'disabled');
};

const turnOnActiveState = () => {
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('fieldset').removeAttribute('disabled');
  form.querySelector('ad-form__slider').removeAttribute('disabled');
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.children.removeAttribute('disabled');
};
