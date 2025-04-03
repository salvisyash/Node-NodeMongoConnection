const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1st hash : ", key.toString("hex"))
});

crypto.pbkdf2("password", "salt1", 5000000, 50, "sha512", (err, key) => {
    console.log("2nd hash : ", key.toString("hex"))
});

crypto.pbkdf2("password", "salt2", 5000000, 50, "sha512", (err, key) => {
    console.log("3rd hash : ", key.toString("hex"))
});

crypto.pbkdf2("password", "salt3", 5000000, 50, "sha512", (err, key) => {
    console.log("4th hash : ", key.toString("hex"))
});

crypto.pbkdf2("password", "salt4", 5000000, 50, "sha512", (err, key) => {
    console.log("5th hash : ", key.toString("hex"))
});