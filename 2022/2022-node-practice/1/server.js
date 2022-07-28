const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: [`--window-size=1000,500`] });
  const page = await browser.newPage();
  await page.goto("https://developer.mozilla.org/en-US/search?q=SelectorsApi");

  const grabEntries = await page.evaluate(() => {
    const entry = document.querySelectorAll('.search-result-entry');
    
    let resultItems = [];

    entry.forEach((tag) => {
      resultItems.push(["This is NUMBER" + tag.innerHTML])
    })

    console.log(entry);

    return resultItems;
  })

  console.log(grabEntries)

})();



// async function start() {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: [`--window-size=1000,500`] // new option
//   })

//   const page = await browser.newPage();
//   const url = "https://developer.mozilla.org/en-US/search?q=SelectorsApi";
//   await page.goto(url);

//   const entry = await page.$$('.search-result-entry');
//   const returnedArray = []

//   const

//   for (let i = 0; i < entry.length; i++) {
//     const resultItem = await (await entry[i].getProperty('innerText')).jsonValue();
//     // console.log([i] + " is " + resultItem);
//     returnedArray.push([resultItem])
//   }

//   console.log(returnedArray)

//   return returnedArray;

// }

// start();

// console.log("Sup" )
// console.log(entry)


// OLD SHIIIIT
// OLD SHIIIIT
// OLD SHIIIIT
// OLD SHIIIIT
// OLD SHIIIIT



// const puppeteer = require('puppeteer');
// const fs = require("fs/promises");

// async function start() {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: [`--window-size=1000,500`] // new option
//   });
//   const page = await browser.newPage();

//   const url = "https://developer.mozilla.org/en-US/search?q=SelectorsApi"
//   await page.goto(url);
//   let results = [];

//   const data = await page.evaluate(() => {
//     const entry = document.querySelectorAll(".search-result-entry");
//     const title = document.querySelectorAll(".search-result-entry h3 a");
//     const highlight = document.querySelectorAll(".search-results-list .search-result-entry .highlight");

//     // const entries = Array.from(entry).map(v => v.innerText);
//     // const titles = Array.from(title).map(v => v.innerText);
//     // const highlights = Array.from(highlight).map(v => v.innerText);

//     let returnedArray = [];
//     let highlightArray = [];

//     // returnedArray.push(titles, highlights);

//     // console.log(titles);
//     // console.log(highlights)
//     // console.log(entry)
//     // console.log("EHEHHE")

//     // console.log(entry.innerHTML + "Hi");

//     for (i = 0; i < entry.length; i++) {
//       // console.log("This is entry " + [i] + ", it has an innerText of" + entry[i].innerText);
//       console.log("This is entry " + [i] + ", it has an innerText of" + entry[i]);
//       // console.log(entry.length)

//       console.log("SHELLO  " + entry[i].innerText + "Hi");

//       let highLightArray = [];


//       for (i = 0; i < highlight.length; i++) {
//         // console.log(highlight[i].innerText)
//         highLightArray.push(highlight[i].innerText);
//         // console.log("DEEZ " + highlight[i].innerHTML)
//         // console.log(highlight.innerText +"EOEO");
//       }

//       returnedArray.push(highlightArray);


//       console.log("Amount of highlight arrays " + highLightArray.length)

//     }

//     returnedArray = "ass"
//     return returnedArray;
//   })

//   console.log(data);

//   // console.log(data[0], "HELLL" + data[1])

//   // console.log(data[0][0] + data[1][0])
//   // console.log("This is " );
//   // console.log("The content being returned is " + data[0])
//   // console.log("The content being returned is " + data[1])
//   // console.log("The title being returned is " + data[2].highlight)
//   // console.log("The title being returned is " + data[2].highlights)
//   // console.log("The title being returned is " + data[[2],[4]])

//   // console.log("This is entry" + entry)
//   // console.log("This is entry" + entries)

//   // await page.screenshot({ path: "Smashing.png", fullpage: true});

//   // await fs.writeFile("names.txt", results.join("\r\n"))
//   // const titles = await page.$$eval(".search-results-list .search-result-entry h3 a", titles => {
//   //   return titles.map(x => x.innerHTML)
//   // })



//   // const items = await page.$$eval(".search-result-entry", items => {

//   //   let results = [];
//   //   items.forEach((item => {
//   //     results.push({
//   //       item,
//   //     })
//   //   }))


//   //   // return items.map(x => x.innerHTML)
//   // })



//   // console.log("THIS IS item RES" + results.item )
//   // console.log("THIS IS RES" + results.items )


//   // const highlights = await page.$$eval(".search-results-list .search-result-entry .highlight", highlights => {
//   //   return highlights.map(x => x.innerHTML)
//   // })

//   // highlights.forEach((highlight => {
//   //   results.push({
//   //     highlight,
//   //   })
//   // }))

//   // console.log("THIS IS highlight RES" + results.highlight )
//   // console.log("THIS IS highlights RES" + results.highlights )

//   // console.log(results[0].items + "\n" + "THIS IS RESULTS ONE" + results[0].item, + "\n" + "THIS IS RESULT TWO " + results[0].highlight);

//   // console.log( "THIS IS RESULTS ONE" + results[0].item, + "\n" + "THIS IS RESULT TWO " + results[0].highlight);
//   // return results[0];


//   // await browser.close();
// }


// // .search-results-list .search-result-entry h3 a  //Transferrable Objects
// // .search-results-list .search-result-entry h3 a['href']  // URL {Needs httpsurl added}
// // // .search-results-list .search-result-entry .highlight // Content about topic {Should be looped}

// start()

// // Everything must go
// // const puppeteer = require('puppeteer');
// // const express = require("express");
// // const app = express();
// // app.set('view engine', 'ejs');

// // app.get("/", (req, res) => {
// //   // res.status(500).send("Damn")
// //   res.render('index')

// //   console.log("Running Main method");

// //   // const body = document.querySelector("body")

// //   async function tutorial() {
// //     try {
// //       const URL = 'https://developer.mozilla.org/en-US/search?q=objects'
// //       const browser = await puppeteer.launch({
// //         headless: true
// //       });
// //       const page = await browser.newPage();

// //       await page.goto(URL)
// //       let pagesToScrape = 2;
// //       let currentPage = 1;
// //       let data = [];

// //       // while (currentPage <= pagesToScrape) {
// //       //   let newResults = await page.evaluate(() => {
// //       //     let results = []
// //       //     let items = document.querySelectorAll('.search-result-entry');
// //       //     console.log(items);
// //       //     let itemsTitle = document.querySelectorAll('.search-result-entry h3 .title a');
// //       //     items.forEach((item, itemsTitle) => {
// //       //       results.push({
// //       //         url: item.getAttribute('href'),
// //       //         text: itemsTitle.innerText,
// //       //       })
// //       //     })
// //       //     return results
// //       //   })
// //       //   data = data.concat(newResults)
// //       //   // if (currentPage < pagesToScrape) {
// //       //     if (currentPage < 0) {
// //       //     // await page.click('.next-button a')
// //       //     // await page.waitForSelector('.thing')
// //       //     // await page.waitForSelector('.next-button a')
// //       //   }
// //       //   currentPage++;
// //       // }
// //       //  Backo


// //       let newResults = await page.evaluate(() => {
// //         let results = []
// //         let items = document.querySelectorAll('.search-result-entry');
// //         // console.log(items);
// //         // let itemsTitle = document.querySelectorAll('.search-result-entry h3 .title a');
// //         items.forEach((item) => {
// //           console.log("YolaCola"+ item)
// //           results.push({
// //             url: item.getAttribute('href'),
// //             text: item.innerText,
// //           })
// //         })
// //         return results
// //       })
// //       // data = data.concat(newResults)
// //       // if (currentPage < pagesToScrape) {
// //       // console.log(results);
// //       // newResults();
// //       console.log(results)
// //       // console.log("toototo" + data);
// //       console.log("This is da data" + data)
// //       // console.log("These are the" + data.results)
// //       // console.log("These are the" + results)



// //       // body.append(data[0]['text'], data[2]['text'], data[3]['text'], data[4]['text'], data[5]['text'])
// //       // console.log(data["text"])

// //       for (i = 0; i < data.length; i++) {
// //         // console.log(" This dataaaa" + data[i] +  "dis Dataaaa")
// //       }

// //       await browser.close()
// //     } catch (error) {
// //       console.error(error)
// //     }
// //   }

// //   tutorial()
// // });

// // app.listen(3000)