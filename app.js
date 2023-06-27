const express = require('express');
const app = express();
app.use('/database', require('./database'));

app.listen(8081, () =>{
    console.log("server is running on port 8081")
});