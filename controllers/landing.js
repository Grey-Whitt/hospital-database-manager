var express = require('express')  
var app = express()  
app.set('view engine', 'pug');

app.get('/', function (req,res) {
  res.render(
    'landing', 
    { title: "clinic database landing", message: "example message"}
  ); 
})

app.listen(3001, function () {  
  console.log('Example app listening on port 3001!')
})