const express = require('express');
const app = express();
const morgan = require('morgan');



app.use(morgan(function (tokens, req, res) {
    return [
        // tokens.http_version(req, re),
        tokens.date(req, res),
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));



app.get("/", (req, res) => {
    res.send("hello")
})




app.listen(8500,()=>{
    console.log("monga")
})