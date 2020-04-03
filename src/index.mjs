//esm module
import {sum} from "./math.mjs"
// typescript module
import {greeter} from "./greeter";
// cjs module
import * as cjs1 from "./cjs1.js"

console.log(sum(1, 2));

console.log(greeter("TypeScript"));

cjs1.hello();
