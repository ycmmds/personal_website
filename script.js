const form = document.getElementById("msgForm");
const messages = document.getElementById("messages");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("msgName").value;
  const content = document.getElementById("msgContent").value;

  const div = document.createElement("div");
  div.innerHTML = `<p><strong>${name}</strong>: ${content}</p>`;

  messages.prepend(div);

  form.reset();
});
