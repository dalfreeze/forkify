// Global app controller

// import str from './models/Search';

// // import { add as a, multiply as m, ID } from './views/searchView'

// import * as searchView from './views/searchView' // the * is everything

// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(searchView.ID, 2)}. On, and here you go: ${str}.`)
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/* ****** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2. New search object and add it to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        renderLoader(elements.searchRes);
        searchView.clearResults();

        // 4. Search for recipes
        await state.search.getResults(); // returns a promise

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});


/******************
* RECIPE CONTROLLER
******************/

const r = new Recipe(47746);
r.getRecipe();
console.log(r);