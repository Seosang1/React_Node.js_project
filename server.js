const { REFUSED } = require('dns');
const express = require('express');
const path = require('path');
const router = express.Router(); 
const app = express();

const http = require('http').createServer(app);
const port = 5000;
http.listen(5000, function(){
    console.log("=========Server Start=========");
    console.log("========localhost:5000========");
});
 
 
module.exports = router; 
 
app.use(express.static(__dirname + 'client/build'))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
});

app.get('/study', (req, response) => {
    response.sendFile(path.join(__dirname, '/client/build/study/begin.html')) 
});
 

// control e

// mongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sswsjw:qwer1234@devseo.oh53e.mongodb.net/?retryWrites=true&w=majority', 
{}).then(() => console.log('=======MongoDB connected=======')).catch(err =>console.log(err))

