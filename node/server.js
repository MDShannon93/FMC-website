const express = require('express');

const port = process.env.PORT || 3030;

var app = express();

app.use((req, res, next) =>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log);
    fs.appendFileSync('server.log', log + '\n');
    next();
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});