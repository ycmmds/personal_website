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

const track = document.getElementById("carouselTrack");
const images = document.querySelectorAll(".carousel-track img");

let index = 0;

// 自动轮播
setInterval(() => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * 100}%)`;

}, 3000);
