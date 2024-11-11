const http = require('http');
const WebSocketServer = require('websocket').server;

const httpserver = http.createServer((req, res) => {
    console.log("Request Received");
    res.writeHead(200);
    res.end("HTTP Server Working");
});

const websocket = new WebSocketServer({
    "httpServer": httpserver
});

websocket.on("request", request => {
    const connection = request.accept(null, request.origin);

    console.log("New WebSocket connection established");

    connection.on('close', () => { // Corrected onclose event
        console.log("Connection closed");
    });

    connection.on('message', message => { // Receiving messages
        console.log(`Message received: ${message.utf8Data}`);
    });
    connection.send("Hello client x")
});

httpserver.listen(4000, () => {
    console.log('Server is running at port 4000'); // Corrected port log
});
