// Global app controller

// import str from './models/Search';

// // import { add as a, multiply as m, ID } from './views/searchView'

// import * as searchView from './views/searchView' // the * is everything

// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(searchView.ID, 2)}. On, and here you go: ${str}.`)

import axios from 'axios';
import Search from './models/Search'

const search = new Search('pizza');
console.log(search);

search.getResults();