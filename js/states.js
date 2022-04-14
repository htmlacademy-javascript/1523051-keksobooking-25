const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const turnOnInactiveState = () => {
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('fieldset').setAttribute('disabled', 'disabled');
  form.querySelector('ad-form__slider').setAttribute('disabled', 'disabled');
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.children.setAttribute('disabled', 'disabled');
};

window.addEventListener('DOMContentLoaded', ()=> {
  turnOnInactiveState;
});

const turnOnActiveState = () => {
  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('fieldset').removeAttribute('disabled');
  form.querySelector('ad-form__slider').removeAttribute('disabled');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.children.removeAttribute('disabled');
};

export {turnOnActiveState};

