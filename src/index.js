import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

const app = express();

let messages = [];

const server = http.createServer(app);
const io = new WebSocketServer(server);

io.on("connection", (socket) => {
  console.log("nuevo socket:", socket.id);

  socket.emit("server:loadmessages", messages);

  socket.on("client:newnote", (data) => {
    messages.push({ ...data, id: uuid() });
    io.emit("server:newnote", data);
  });

  socket.on("client:delete", (id) => {
    messages = messages.filter((m) => m.id !== id);
    io.emit("server:loadmessages", messages);
  });

  socket.on("disconnect", () => {
    console.log(socket.id, "disconnected");
  });
});

app.use(express.static(__dirname + "/public"));

server.listen(3000);
console.log("Server on http://localhost:3000");
