import './user-form.js';
import {showAlert} from './util.js';
import {createMap} from './map.js';
import {createMainMarker} from './map.js';
import {setOffersPin} from './map.js';
import {getErrorMessage} from './message.js';
import {getSuccessMessage} from './message.js';
import {setUserFormSubmit} from './user-form.js';


const map = createMap();
createMainMarker(map);

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .catch(() => {
    showAlert('Не удалось соединиться с сервером');
  })
  .then((offersServer) => {
    setOffersPin(offersServer,map);
  });

setUserFormSubmit (getSuccessMessage,getErrorMessage);
