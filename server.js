var path = require('path');
var express = require('express');

var app =express();

var viewsPath = path.join(__dirname,'views');
app.use('/',express.static(viewsPath));

var pulicPath = path.join(__dirname,'public');
app.use('/public',express.static(pulicPath));



app.listen(16914,function () {
    console.log('http://192.168.199.178:8080/mnoooVideo/')
})
module.exports=app;