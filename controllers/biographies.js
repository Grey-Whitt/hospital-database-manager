var express = require('express')  
var app = express()  
app.set('view engine', 'pug')
var doctors = ['Doctor1', 'Doctor2', 'Doctor3, Doctor4, Doctor5'];

// api route needs to be created
app.get('/doctors', function (req, res) {  
    res.render(
        'template',
        { title: 'Meet the Doctors', header: 'Meet Your Doctors!', doctors})
})
 
app.listen(3001, function () {  
    console.log('Example app listening on port 3001!')
})