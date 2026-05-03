// 留言板功能
const msgForm = document.getElementById("msgForm");
const messagesDiv = document.getElementById("messages");

msgForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("msgName").value;
  const content = document.getElementById("msgContent").value;

  const msgElem = document.createElement("p");
  msgElem.innerHTML = `<strong>${name}:</strong> ${content}`;
  messagesDiv.appendChild(msgElem);

  msgForm.reset();
});

// 联系表单（模拟）
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("感谢你的留言，我会尽快联系你！");
  contactForm.reset();
});

// 滚动动画
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: 0.2});

sections.forEach(section => observer.observe(section));

// 自动轮播图
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let index = 0;

function moveCarousel() {
  index++;
  if(index >= slides.length) index = 0;
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * width}px)`;
}

setInterval(moveCarousel, 3000); // 每3秒切换