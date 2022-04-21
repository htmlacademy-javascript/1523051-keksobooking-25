import './user-form.js';
import './filter.js';
import {createMap} from './map.js';
import {createMainMarker} from './map.js';
import {setOffersPin} from './map.js';
import {getErrorMessage} from './message.js';
import {getSuccessMessage} from './message.js';
import {setUserFormSubmit} from './user-form.js';
import {getData} from './api.js';
import {getOffersFilter} from './filter.js';
import './avatar.js';
import './offer-photo.js';

const map = createMap();
createMainMarker(map);
getData((offersServer) => {
  setOffersPin(offersServer,map);
  getOffersFilter(() => setOffersPin(offersServer,map));
});

setUserFormSubmit (getSuccessMessage,getErrorMessage);
