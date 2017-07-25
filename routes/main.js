/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-25 10:33:34
 * @modify date 2017-07-25 10:33:34
 * @desc [미들웨어]
*/
var func = (app) => {
    app.get('/', (req, res) => {
        res.render('index.html');
    });
}
module.exports = func;