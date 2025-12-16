const dns = require("dns").promises;

const sendMessage = (success, msg) => {
  return { success, msg };
};

const xss_validation = (text) =>
{
   const pattern = /^[a-zA-Z0-9 .,_-]+$/;
    return pattern.test(text);
} 

const domainNameValidation = async (name) => {
  if (!name || name.trim() == "") {
    return sendMessage(false, "Enter the valid domainName");
  }
  
 if(xss_validation(name) === false)
 {
   return sendMessage(false, "Seriously are you try xss...");
 }
  

  if (name.length > 50) {
    return sendMessage(false, "domain name must be under 50 charter");
  }

  try{
      await dns.resolve(name)
  }
  catch(error)
  {
    return sendMessage(false, "Really are you serious - Not a valid domain");
  }

  return true;
};



module.exports = { domainNameValidation };
