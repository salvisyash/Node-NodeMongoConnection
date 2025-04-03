const crypto = require("crypto")

console.log("Hello world !");

var a = 1078698;
var b = 20986;

// pbkdf2 = Password base key derivative function

var first_key = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated.", first_key.toString("hex"))

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second key generated.", key.toString("hex"))
});

function multiplyFn(x, y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c);