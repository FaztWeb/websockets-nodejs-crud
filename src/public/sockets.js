/* Socket comments */
const socket = io.connect();

const saveTask = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

const deleteNote = (id) => {
  console.log(id)
  socket.emit("client:delete", id);
};

socket.on("server:loadmessages", renderNotes);
socket.on("server:newnote", appendNote);
