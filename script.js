// ===== 高级轮播 =====

const track = document.getElementById("carouselTrack");
const images = document.querySelectorAll(".carousel-track img");
const dotsContainer = document.getElementById("dots");

let index = 0;

// 创建dots
images.forEach((_, i) => {

  const dot = document.createElement("div");

  dot.classList.add("dot");

  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

// 更新轮播
function updateCarousel() {

  track.style.transform =
    `translateX(-${index * 100}%)`;

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  dots[index].classList.add("active");
}

// 自动轮播
setInterval(() => {

  index++;

  if(index >= images.length){
    index = 0;
  }

  updateCarousel();

}, 3000);

updateCarousel();


// ===== 滚动动画 =====

const sections =
  document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top =
      section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

});

// 初始触发
window.dispatchEvent(new Event("scroll"));


// ===== 手机滑动支持 =====

let startX = 0;

track.addEventListener("touchstart", e => {

  startX = e.touches[0].clientX;

});

track.addEventListener("touchend", e => {

  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){

    index++;

    if(index >= images.length){
      index = 0;
    }

  }

  else if(endX - startX > 50){

    index--;

    if(index < 0){
      index = images.length - 1;
    }

  }

  updateCarousel();

});
