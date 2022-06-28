// const puppeteer = require("puppeteer");
// console.log("Before");
// const browserOpenpromise = puppeteer.launch({headless:false});
// browserOpenpromise
// .then(function (browser){
//   let pagesArrpromise =  browser.pages();//ye currently opened tab deta hai
// return pagesArrpromise;
// })
// pagesArrpromise.then(function(){

// })
// console.log("After");

const puppeteer = require("puppeteer");
let Page;// let iseliye use kiya hai kuki isko hme change nhi karna hai
// console.log("Before");


const browserOpenPromise = puppeteer.launch({
// YE sare arguments setting ko amulate karte hai

  headless:false,//headless ko false kar dega
  slowMo:true,//kya chal rha hai operation me ye dekhne k liye isko true kartee hai 
  defaultViewport:null,
  args:["--start-maximized"]
});
const browserOpenpromise = puppeteer.launch({headless:false});
browserOpenpromise
.then(function(browser){
  const pagesArrpromise = browser.pages();//currently open tabs deta hai
  return pagesArrpromise;
}).then(function(browserPages){// to bhaiya jab array of pages aa jayega tab mujhe ye pages de dena 
  Page = browserPages[0];
  let gotoPromise = Page.goto("https://www.google.com/")
  return gotoPromise;
}).then(function(){//PRO TIP iseliye ki ho sakta hai hum pehle selector dhoondh le aur page tab tak khule na thoda time laga de iseliye iska istemaal karte hai

  let elementWaitPromise = Page.waitForSelector("input[type='text']",{visible:true});//visible iseliye ki visible to ho
  return elementWaitPromise;

})
.then(function(){// ye wala then is return pe attach hai , Aur yaha pe kuch recieve nhi karna hai sirf console pe likh dena hai 
  // console.log("Reached google home page")
  let keywillbesendPromise = Page.type("input[type='text']","pepcoding");// key send kar di jaye aur input text area pe pepcoding likh diya jaye
  return keywillbesendPromise; //agar return nhi karenge to ===> pepcoding type hone se pehle hi press ho jayega
}).then(function(){
  let enterwillbesendPromise = Page.keyboard.press("Enter");
  return enterwillbesendPromise;

}).then(function(){
  let elementWaitPromise = page.waitForSelector("LC20lb MBeuO DKV0Md",{visible:true});// doosre page pe jaar he hai iseliye wait for selector lagana padega
  return elementWaitPromise;
}).then(function(){
  let keywillbesendPromise = page.click("LC20lb MBeuO DKV0Mdd");// jab select ho jaye to click karna hoga pepcoding k website k pehle h3 heading ko
})
.catch(function(err){// catch iseliye lagate hai ki in sab then me se koi error aa gai to catch chal jayegi aur bta dega ki ye eroor hai theek kar lo
  console.log(err);
})
console.log("After");
// ye Browser automation ka concept hai
