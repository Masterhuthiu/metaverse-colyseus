const express = require("express");
const http = require("http");
const { Server } = require("colyseus");
const { MyRoom } = require("./room/MyRoom");

const app = express();
const server = http.createServer(app);

const gameServer = new Server({
    server,
});

gameServer.define("town", MyRoom);

const PORT = process.env.PORT || 2567;

server.listen(PORT, () => {
    console.log("✅ Colyseus running on port:", PORT);
});
