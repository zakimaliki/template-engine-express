var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', 'view'); // setting template engine yang digunakan. Dalam hal ini menggunakan pug.
app.get('/', function(req, res, next) {
 res.render('index', {nama: 'Zaki'}); // melakukan render dan mengirim data ke index.pug
})
app.listen(3000, function(){
 console.log('http://localhost:3000');
})