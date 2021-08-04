const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = noteForm["title"].value;
  const description = noteForm["description"].value;

	saveTask(title, description)

  const message = document.querySelector("#title");
  message.value = "";
  message.focus();
});
