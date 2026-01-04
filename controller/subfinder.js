const dns = require("dns").promises;
const sub_list = require("../subdom-list/subdom");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { domainNameValidation } = require("../validation/domanValidation");
// const { trace, table } = require("console");

let live_dns_sub = [];

// fast subdomain find use dns resolve
async function checkSubdomain(sub) {
  try {
    const records = await dns.resolve(sub);
    if(records)
    {
          return records;
    }
    // if(records !== null)
    // {
    //   live_dns_sub.push(sub);
    // }
    // console.log(`[+] Found: ${sub}`);
   return null;
  } catch (error) {
    // console.log(error);
    return null;
  }
}



// use with request
const check_Deep = async (domainName, timeOut=3000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeOut);
  try {
    const res = await fetch(`https://${domainName}`, {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(id);

    return res.status;
  } catch (error) {
    clearTimeout(id);
    return null;
  }
};


// for closed the loop


let trace = false;

const loop_clsoe = (req,res) => {
 trace = true;
}



const subFinder = async (req, res) => {
  const domainName = req.query.domainName;
  const flag = req.query.flag;
  const fastScan = req.query.fastScan;
  console.log("flag ",flag);
  console.log("fastScan ",fastScan);




  let result = await domainNameValidation(domainName);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");


  // create this function for send the data
  const sendToClient = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // check domain name is valid or not
  if (!result.success && result != true) {
    sendToClient(`data: ${JSON.stringify(result)}\n\n`);
    return;
  }
 
  // for the fast scan
 if(fastScan === "true")
 {
    console.log("Fast scan running");
   for (let i = 0; i < sub_list.length; i++) {
    if (trace === true) {
      trace = false;
      break;
    }
    const domName = `${sub_list[i]}.${domainName}`;
    const status = await checkSubdomain(domName);
    const fullResult = `https://${domName}`;
    console.log(status);
    // let domainResult;
    if(status !== null){
      domainResult = { fullResult: fullResult };
    }
    if (status !== null) {
      sendToClient(`data: ${JSON.stringify(domainResult)}\n\n`);
    }
  }
 }




  // for the normal scan
  if(flag !== null && fastScan !== true)
  {
    console.log("normal scan running");
  for (let i = 0; i < sub_list.length; i++) {
    if (trace === true) {
      trace = false;
      break;
    }
    const domName = `${sub_list[i]}.${domainName}`;
    const status = await check_Deep(domName);
    const fullResult = `https://${domName}`;
    console.log(status);
    let domainResult;
    if(flag !== "null")
    {
      domainResult = { fullResult: fullResult,status:status };
    }
    else if(flag === "null"){
      domainResult = { fullResult: fullResult };
    }
    if (status) {
      sendToClient(`data: ${JSON.stringify(domainResult)}\n\n`);
    }
  }
  }

  res.write("event: end\n");
  res.write("data: scan complete\n\n");
  res.end();
};

module.exports = {subFinder,loop_clsoe};
