const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./read.txt", "utf8", () => {
    console.log("File reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA(){
    console.log("a=", a);
}

printA();
console.log("Last line of file")