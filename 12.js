var express = require("express"),
    app = express(),
    server = require('http').createserver(app),
    port = process.env.PORT || 8080;

server.listen(port, function() {
    console.log("server listening at port %d", port);
});

app.use(express.static(__dirname + '/www/'));
