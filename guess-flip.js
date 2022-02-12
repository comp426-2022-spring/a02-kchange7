import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";


const args = minimist(process.argv.slice(2))
args['call']
let call = args['call']

if (call == null) {
    console.error("Error: no input")
    console.error("Usage: node guess-flip --call=[heads|tails]")
} else if (call != 'heads' && call != 'tails') {
    console.error("Error: invalid input")
    console.error("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(call))
}
