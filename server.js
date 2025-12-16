const app = require('./app.js');

const PORT = 7890 || 4000;

app.listen(PORT,()=>{
    console.log("Server is run on ",PORT);
})

