const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', express.static(__dirname + '/publi'));





app.listen(port, ()=>{
    console.log('Runnig on '+port);
})