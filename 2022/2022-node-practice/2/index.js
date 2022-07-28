const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  // const browser = await puppeteer.launch({
  //   //     headless: false,
  //   //     args: [`--window-size=1000,500`]
  //     });
  const page = await browser.newPage();
  await page.goto('https://randomwordgenerator.com');

  // Select the element using the attribute
  const element = await page.$('[data-form-field-value="244103310504090"]');

});






// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: [`--window-size=1000,500`]
//   });
//   const page = await browser.newPage();
//   await page.goto("https://randomwordgenerator.com/");


//   // const evaluate = await page.evaluate(() => {
//   let randomNumberOfWordsInput = page.$("#qty");
//   // const submitButton = document.querySelector("input[type=submit]");
//   const submitButton = page.$("input[type=submit]");


//   await page.type(randomNumberOfWordsInput, 3);

//   console.log("Seff");

//   console.log("EFEF");
//   await page.click(submitButton);
//   await page.waitForSelector('#result');
//   await page.screenshot({
//     path: screenshot
//   })
//   browser.close()
//   console.log('See screenshot: ' + screenshot)
//   // return {
//   //   // console.log("Nnenen"),
//   // };
//   // });

//   // evaluate()





//   // const grabEntries = await page.evaluate(() => {
//   //   const entry = document.querySelectorAll('.search-result-entry');
//   //   let randomNumberOfWordsInput = document.querySelector("#qty");
//   //   const submitButton = document.querySelector("input[type=submit]");

//   //   // let resultItems = [];

//   //   // entry.forEach((tag) => {
//   //   //   resultItems.push(["This is NUMBER" + tag.innerHTML])
//   //   // })


//   //   // console.log(entry);

//   //   // return resultItems;
//   // })


//   // console.log(grabEntries)

// })();