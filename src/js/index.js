// Global app controller

// import str from './models/Search';

// // import { add as a, multiply as m, ID } from './views/searchView'

// import * as searchView from './views/searchView' // the * is everything

// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(searchView.ID, 2)}. On, and here you go: ${str}.`)

import axios from 'axios';

async function getResults(query) {
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`); //returns a promise
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        console.log(error);
    };
};
getResults('pizza');