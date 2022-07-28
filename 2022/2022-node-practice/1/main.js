// const puppeteer = require('puppeteer');

// async function tutorial() {
//   try {
//     const URL = 'https://old.reddit.com/r/learnprogramming/'
//     const browser = await puppeteer.launch({
//       headless: false
//     });
//     const page = await browser.newPage();

//     console.log("sih");
//     await page.goto(URL)
//     let pagesToScrape = 5;
//     let currentPage = 1;
//     let data = []
//     while (currentPage <= pagesToScrape) {
//       let newResults = await page.evaluate(() => {
//         let results = []
//         let items = document.querySelectorAll('.thing')
//         items.forEach((item) => {
//           results.push({
//             url: item.getAttribute('data-url'),
//             text: item.querySelector('.title').innerText,
//           })
//         })
//         return results
//       })
//       data = data.concat(newResults)
//       if (currentPage < pagesToScrape) {
//         await page.click('.next-button a')
//         await page.waitForSelector('.thing')
//         await page.waitForSelector('.next-button a')
//       }
//       currentPage++;
//     }
//     console.log(data)
//     await browser.close()
//   } catch (error) {
//     console.error(error)
//   }
// }

// console.log("Heyeee")

// tutorial() 
