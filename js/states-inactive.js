const form = document.querySelector('.ad-form');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeaturesFilter = document.querySelectorAll('.map__feature');

const turnOnInactiveState = () => {
  form.classList.add('ad-form--disabled');
  form.querySelectorAll('.fieldset').forEach((element)=>{element.setAttribute('disabled', 'disabled');});
  form.querySelector('.ad-form__slider').setAttribute('disabled', 'disabled');
  mapFilters.forEach((element)=>{element.classList.add('ad-form--disabled');});
  mapFilters.forEach((element)=>{element.setAttribute('disabled', 'disabled');});
  mapFeaturesFilter.forEach((element)=>{element.classList.add('ad-form--disabled');});
};

export {turnOnInactiveState};
