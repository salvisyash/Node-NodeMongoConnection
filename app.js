require("./xyz.js")  // One modeule in other

// import {x, calculateSum} from "./sum.js"
// const {x, calculateSum} = require("./calulate/sum.js")
// const {calculateMultiply} = require("./calulate/multiple.js")

const { calculateSum, calculateMultiply } = require("./calulate")

const data = require("./data.json")

var name = "Namaste NodeJS"

var a = 20

var b = 30

calculateSum(a, b);
calculateMultiply(a, b);
// console.log(global);
console.log(x);
console.log(JSON.stringify(data));