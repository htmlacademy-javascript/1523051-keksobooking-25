import './user-form.js';
import {getOffers} from './data.js';
import {createMap} from './map.js';
import {createMainMarker} from './map.js';
import {setOffersPin} from './map.js';

const offers = getOffers(10);
const map = createMap();
createMainMarker(map);
setOffersPin(offers,map);
