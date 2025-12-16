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
    live_dns_sub.push(sub);
    // console.log(`[+] Found: ${sub}`);
    return records;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

// use with request
const check_Deep = async (domainName, timeOut = 3000) => {
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
 return;
}



const subFinder = async (req, res) => {
  const domainName = req.query.domainName;
  trace = req.query.flag === "true";
  // console.log(trace);
  // if (domainName == true) {
  //   trace = true;
  // }

  let result = await domainNameValidation(domainName);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendToClient = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  if (!result.success && result != true) {
    sendToClient(`data: ${JSON.stringify(result)}\n\n`);
    return;
  }

  for (let i = 0; i < sub_list.length; i++) {
    if (trace === true) {
      trace = false;
      break;
    }
    const domName = `${sub_list[i]}.${domainName}`;
    const status = await check_Deep(domName);
    const fullResult = `https://${domName}`;
    const domainResult = { fullResult: fullResult };
    if (status) {
      sendToClient(`data: ${JSON.stringify(domainResult)}\n\n`);
    }
  }

  res.write("event: end\n");
  res.write("data: scan complete\n\n");
  res.end();
};

module.exports = {subFinder,loop_clsoe};
