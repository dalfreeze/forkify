// Global app controller

import num from './test'; // num will be the 23 exported from test.js. When importing from a module, you don't need the file extension.

const x = 23;

console.log(`I imported ${num} from another module called test.js! Variable x is ${x}`);