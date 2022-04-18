const ALERT_SHOW_TIME = 5000;
const pageBody = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const closeMessageButton = errorMessageTemplate.querySelector('.error__button');

const getErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = 'Произошла ошибка отправки формы!';

  pageBody.append(errorMessage);

  closeMessageButton.addEventListener('click', () => {
    errorMessage.querySelector('.success').classList.add('hidden');});

  closeMessageButton.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {errorMessage.querySelector('.success').classList.add('hidden');}});
};

const getSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  successMessage.querySelector('.success__message').textContent = 'Данные Вашего объявления успешно отправлены!';
  pageBody.append(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, ALERT_SHOW_TIME);
};

export {getErrorMessage, getSuccessMessage};
