const form = document.querySelector('.ad-form');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeaturesFilter = document.querySelector('.map__features');

const turnOnInactiveState = () => {
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('.fieldset').forEach((element)=>{element.setAttribute('disabled', 'disabled');});
  form.querySelector('.ad-form__slider').setAttribute('disabled', 'disabled');
  mapFilters.forEach((element)=>{element.classList.add('ad-form--disabled');});
  mapFilters.forEach((element)=>{element.setAttribute('disabled', 'disabled');});
};

const turnOnActiveState = () => {
  form.classList.remove('ad-form--disabled');
  form.querySelectorAll('fieldset').forEach((element)=>{element.removeAttribute('disabled');});
  form.querySelector('.ad-form__slider').removeAttribute('disabled');
  mapFilters.forEach((element)=>{element.removeAttribute('disabled');});
  mapFeaturesFilter.removeAttribute('disabled');
};

export {turnOnActiveState};
export {turnOnInactiveState};

