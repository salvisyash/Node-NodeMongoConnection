const fs = require("fs");
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./read.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer expired"), 0);

    process.nextTick(() => console.log("2nd process.nextTick"));
    
    setImmediate(() => console.log("2nd setImmediate"));
    
    console.log("File reading CB");
});

process.nextTick(() => console.log("process.nextTick"));
console.log("Last line of file")
