/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-25 10:33:34
 * @modify date 2017-07-25 10:33:34
 * @desc [실행]
*/
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyparser = require('body-parser');

//public folder is static
app.use(express.static('public'));

//ejs setting
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use(require('routes/main')(app));
app.listen(4000);