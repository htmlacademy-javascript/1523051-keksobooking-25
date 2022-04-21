import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .catch(() => {
      showAlert('Не удалось соединиться с сервером');
    })
    .then((response) => response.json())
    .then((offersServer) => {
      onSuccess(offersServer);
    }).catch(() => {
      showAlert('Не удалось соединиться с сервером');
    });
};

export {getData};
