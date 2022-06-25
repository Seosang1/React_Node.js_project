const { REFUSED } = require('dns');
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("=========Server Start=========");
    console.log("========localhost:3000========");
});

app.set('react-project',__dirname + '/react-project/src');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/react-project/build'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})
 

// control e

// mongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sswsjw:qwer1234@devseo.oh53e.mongodb.net/?retryWrites=true&w=majority', 
{}).then(() => console.log('=======MongoDB connected=======')).catch(err =>console.log(err))

