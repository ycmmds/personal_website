// script.js

// ===== 粒子 =====

particlesJS("particles-js",{

  particles:{

    number:{ value:90 },

    color:{ value:"#00ffff" },

    shape:{ type:"circle" },

    opacity:{ value:.5 },

    size:{ value:3 },

    line_linked:{

      enable:true,

      distance:150,

      color:"#00ffff",

      opacity:.4,

      width:1
    },

    move:{

      enable:true,

      speed:2
    }
  },

  interactivity:{

    events:{

      onhover:{

        enable:true,

        mode:"repulse"
      }
    }
  }
});


// ===== 手机菜单 =====

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{

  navMenu.classList.toggle("show");

});


// ===== 滚动动画 =====

const sections =
  document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

  sections.forEach(section=>{

    const top =
      section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

});

window.dispatchEvent(new Event("scroll"));


// ===== 网站访问人数 =====

let visits =
  localStorage.getItem("visits") || 0;

visits++;

localStorage.setItem("visits",visits);

document.getElementById("visitCount")
.innerText = visits;


// ===== 轮播 =====

const track =
  document.getElementById("carouselTrack");

const images =
  document.querySelectorAll(".carousel-track img");

const dotsContainer =
  document.getElementById("dots");

let index = 0;

// 创建dots

images.forEach((_,i)=>{

  const dot =
    document.createElement("div");

  dot.classList.add("dot");

  dot.addEventListener("click",()=>{

    index = i;

    updateCarousel();

  });

  dotsContainer.appendChild(dot);

});

const dots =
  document.querySelectorAll(".dot");

function updateCarousel(){

  track.style.transform =
    `translateX(-${index * 100}%)`;

  dots.forEach(dot=>
    dot.classList.remove("active")
  );

  dots[index].classList.add("active");
}

setInterval(()=>{

  index++;

  if(index >= images.length){
    index = 0;
  }

  updateCarousel();

},3000);

updateCarousel();


// ===== 手机滑动 =====

let startX = 0;

track.addEventListener("touchstart",e=>{

  startX =
    e.touches[0].clientX;

});

track.addEventListener("touchend",e=>{

  let endX =
    e.changedTouches[0].clientX;

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


// ===== 留言板 =====

const form =
  document.getElementById("msgForm");

const messages =
  document.getElementById("messages");

form.addEventListener("submit",function(e){

  e.preventDefault();

  const name =
    document.getElementById("msgName").value;

  const content =
    document.getElementById("msgContent").value;

  const div =
    document.createElement("div");

  div.innerHTML =
    `<strong>${name}</strong><br>${content}`;

  messages.prepend(div);

  form.reset();

});
