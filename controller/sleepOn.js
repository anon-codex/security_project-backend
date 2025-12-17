const sleepOnreq = (req,res) => {
  res.send("Ok");
  console.log("sleep request hit");
}



module.exports = sleepOnreq;