let ip_array = [];
const d = new Date();
const cou = 0;

const cap = (req, res, next) => {
    console.log(ip_array.length);
  let obj = {
    ip: req.ip,
    time: d.getMinutes(),
    count: cou,
  };

  if (ip_array.length == 0) {
    ip_array.push(obj);
  }
  for (let i = 0; i < ip_array; i++) {
    if (ip_array[i].ip !== req.ip) {
      ip_array.push(obj);
    }
    else if(ip_array[0].ip === req.ip && ip_array[0].time === time)
    {
       ip_array[0].count = 1;
    }
 
    ip_array[i].time = d.getMinutes();
    
  }

  console.log(ip_array);
//   console.log(req.ip);
};

module.exports = cap;
