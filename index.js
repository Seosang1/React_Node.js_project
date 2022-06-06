
// S:get host
const { REFUSED } = require('dns');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); 
const {User} = require("./models/userInfo");

// 클라이언트에서 오는 정보 서버에서 분석 후 가져오기 
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// application/json 타입 분석해서 가져오기
app.use(bodyParser.json());

const server = app.listen(port, () => {
    console.log("=========Server Start=========");
    console.log("========localhost:3000========");
});

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// E:get host

// S:control
app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/about', function(req, res){
    res.render('about.html');
});
// E:control

// S: mongoDB

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sswsjw:qwer1234@devseo.oh53e.mongodb.net/?retryWrites=true&w=majority', 
{}).then(() => console.log('=======MongoDB connected=======')).catch(err =>console.log(err))


// S: mysql
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
// E:mysql


// S: postMan 이용한 회원가입
app.post('/register', (req, res) => {
  // 회원가입 시 필요한 정보 client에서 가져온 후 DB로 insert
 
  // bodyParser 이용하여 클라이언트 정보 req.body 담기
  const user = new User(req.body);

  // MongoDB 값 저장
  user.save((err, userInfo) => {
    /* json 입력 example
    {
      "csno":"00001",
      "userName":"testName",
      "eamilId":"test",
      "emailDomain":"gmail.com",
      "fullEmailAddr":"test@gmail.com",
      "telno1":"010",
      "telno2":"1234",
      "telno3":"5678",
      "userLastName":"null",
      "role":"0" 
  }
  */

    if(err) return res.json({success:false, err}) // 실패 시 에러메시지
    return res.status(200).json({
      success: true // 성공
    })
  })
});

// E: 회원가입
