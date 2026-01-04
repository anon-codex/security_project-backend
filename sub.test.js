const dns = require("dns").promises;
const subdomain = require("./subdom-list/subdom");

async function checkSubdomain(sub) {
  try {
    const records = await dns.resolve(sub);
    return records;
  } catch (error) {
    // console.log(error);
    return null;
  }
}


for(let i = 0; i<subdomain.length; i++)
{
checkSubdomain(subdomain[i]+".google.com").then((data)=>{
    if(data !== null)
    {
        console.log("Live "+subdomain[i]+".google.com");
    }
    else{
        console.log("Dead "+subdomain[i]+".google.com");
    }
}).catch((error)=>{
    console.log("hello ",error);
})
}
