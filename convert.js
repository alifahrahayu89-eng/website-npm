const fs = require("fs");

const image = fs.readFileSync("./public/logo.png"); // sesuaikan path
const base64 = image.toString("base64");

const final = `data:image/png;base64,${base64}`;

fs.writeFileSync("logoBase64.txt", final);

console.log("SUCCESS! Base64 saved to logoBase64.txt");