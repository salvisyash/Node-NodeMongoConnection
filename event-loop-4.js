const fs = require("fs");
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./read.txt", "utf8", () => {    
    console.log("File reading CB");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner process.nextTick"));
    console.log("process.nextTick")
});
console.log("Last line of file")
