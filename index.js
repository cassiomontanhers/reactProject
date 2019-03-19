var express = require('express');
const app = express()
const port = 3000
const path = require('path');

const db = require('./static/BACK-END/connectiondb');

app.use(express.static('static'))

app.use(express.json());


app.get('/', function(req, res){
  //TODO - create individual controllers/services to hold logic & sql queries
  // var sql = "select * from hare.employee";
  // db.selectSql(sql,function (data){
    // res.json(data);
    res.sendFile(path.join(__dirname+'/FRONT-END/Pages/index.html'));
    // res.end('Hello World');
  // });
});

app.post('/', function (req, res) {
  // var sql = `insert into hare.employee values ('${req.body.name}','${req.body.company}','.','.','.')`;
  // db.selectSql(sql,function (data){
  //   res.json(data);
  // });
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
