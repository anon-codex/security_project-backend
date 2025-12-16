const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://reviews.webmd.com/vitamins-supplements/ingredientreview-961-Ginger";

axios.get(url).then((data)=>{
  // console.log(data.data);
  const $ = cheerio.load(data.data);
  const fullTag = $("*").toArray();
  fullTag.forEach((el)=>{
  // console.log(el.tagName);
  if(el.tagName === "script")
  {
    const src = $(el).attr("src");
    if(src != undefined)
    {
      if(src.includes("https://"))
      {
        console.log(src);
       
      }
      else
      {
        console.log(`https://reviews.webmd.com/${src}`);
      }
    }
  }
  })
  // console.log(fullTag);
}).catch((error)=>{
  console.log(error);
})