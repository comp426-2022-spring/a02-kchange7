import minimist from "minimist";
import { coinFlips, countFlips } from "./modules/coin.mjs";


const args = minimist(process.argv.slice(2))
args['number']
let number = args['number']

let flips = number == null ? coinFlips(1) : coinFlips(number);

let summary = countFlips(flips);
console.log(flips);
console.log(summary);