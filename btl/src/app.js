let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./websocket/stream');
let path = require('path');
let favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname.toString());
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
    console.log(__dirname.toString());
});

io.of('/stream').on('connection', stream);

server.listen(3000);
