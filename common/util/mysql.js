
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