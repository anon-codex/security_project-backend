const sendMessage = (success, msg) => {
  return { success, msg };
};

const xss_validation = (text) => {
  const pattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
  return pattern.test(text);
};

const portNumberValidation = async (ip) => {
  if (!ip || ip.trim() == "") {
    return sendMessage(false, "Enter the valid ip");
  }

  console.log("xss valid ", xss_validation(ip));
  if (xss_validation(ip) === false) {
    return sendMessage(false, "Not a valid IP formate");
  }

  return true;
};

module.exports =  portNumberValidation ;
