const dns = require('dns').promises;
const sub_list = require("./subdom-list/subdom");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

let live_dns_sub = [];

async function checkSubdomain(sub)
{
    try {
         await dns.resolve(sub);
          live_dns_sub.push(sub);
         console.log(`[+] Found: ${sub}`);
    } catch (error) {
        // console.log(error);                            
         console.log(`[+] Not Found: ${sub}`);
    }

}

async function http_fetch (live_dns_sub) {
    for(let i = 0; i<live_dns_sub.length; i++)
    {
        const Surl = `https://${live_dns_sub[i]}`;
        try{
        const check_live = await fetch(Surl,{method:"HEAD",timeout:3000,mode:'no-cors'});
        if(check_live.ok)
        {
            console.log(`Live [+] ${Surl} ${check_live.status}`);   
        }
        else{
            console.log(`Dead [-] ${Surl}`)
        }
        }catch(error)
        {
           console.log(`❌ Dead [-] ${Surl} (${error.code || error.message})`)
        }
    }
}



async function main() {
for(let i = 0; i<sub_list.length; i++)
{  
    const domName  = `${sub_list[i]}.google.com`;
    await checkSubdomain(domName);
}
console.log(live_dns_sub);
await  http_fetch (live_dns_sub); 

}

main();