console.log("Sum Module Executed")
x = "Hello World !"

function calculateSum(a, b) {
    c = a + b
    console.log(c)
}

module.exports = { x, calculateSum }

// ----------------------------------------------------------

// export var x = "Hello World !"

// export function calculateSum(a,b){
//     const sum = a + b
//     console.log(sum)
// }

// ----------------------------------------------------------

// module.exports = {
//     x: x,
//     calculateSum: calculateSum
// }