var express = require('express');


var app = express();
app.get('/', function(req, res){
    console.log(req.headers);
    var lang, os, ip;
    var acceptLang = req.headers['accept-language'];
    var userAgent = req.headers['user-agent'];
    ip = req.headers['x-forwarded-for'];
    
    if(acceptLang)
        lang = acceptLang.match(/[a-zA-Z\-]{2,6}/g)[0];
    if(userAgent)
        os = userAgent.match(/\(([^\)]+)\)/)[1];
    console.log({ip: ip, language: lang, OS: os});
    res.json({ip: ip, language: lang, OS: os});
})
app.listen(process.env.PORT || 8081);

