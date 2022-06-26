const puppeteer = require("puppeteer");
console.log("Before");
let browserOpenpromise = puppeteer.launch({headless:false});
browserOpenpromise.then(function (browser){
    console.log("Browser opened");
})
console.log("After");
