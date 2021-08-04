const notesList = document.querySelector("#notes");

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
			<li>
				<h1>${note.title}</h1>
				<p>${note.description}</p>
				<button id="delete" data-id="${note.id}">delete</button>
			</li>
`;
  const btn = div.querySelector("#delete");
  btn.addEventListener("click", () => {
    deleteNote(btn.dataset.id);
  });
  return div;
};

const renderNotes = (notes) => {
  notesList.innerHTML = "";
  console.log(notes);
  notes.forEach((note) => {
    notesList.append(noteUI(note));
  });
};

const appendNote = (note) => {
  notesList.append(noteUI(note));
};
