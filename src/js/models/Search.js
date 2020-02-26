// export default 'I am an exported string.'; // this will be the default export
import axios from 'axios';

export default class Search {
    constructor (query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`); //returns a promise
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            console.log(error);
        };
    };
}