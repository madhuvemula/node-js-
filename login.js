const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mailid = 'asdfg@gmail.com';
const pwd = '1234';

app.get('/', function(req, res) {
    res.sendFile('./login.html');
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.post('/create', function(req, res) {
    let mail = req.body.email;
    let password = req.body.password;
    let msg;
    if (mail !== mailid) {
        msg = 'wrong mailid';
    } else if (password !== pwd) {
        msg = 'wrongpassword';
    } else {
        msg = 'success';
    }

    res.send(msg);

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000')
})