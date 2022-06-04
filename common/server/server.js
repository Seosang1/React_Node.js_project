const { REFUSED } = require('dns');
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("=========Server Start=========");
    console.log("========localhost:3000========");
});

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// control s
app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/about', function(req, res){
    res.render('about.html');
});
// control e

// mongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sswsjw:qwer1234@devseo.oh53e.mongodb.net/?retryWrites=true&w=majority', 
{}).then(() => console.log('=======MongoDB connected=======')).catch(err =>console.log(err))


// mysql s
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
  
app.get('/db', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM T_INFO', function (error, results, fields) {
          // When done with the connection, release it.
          res.send(JSON.stringify(results));
          console.log("T_INFO results >>>"+results);
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})
// mysql e