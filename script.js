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


// ===== 深色模式 =====

const themeBtn =
  document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("light");

});


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


// ===== 图片灯箱 =====

const galleryImages =
  document.querySelectorAll(".gallery-img");

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

galleryImages.forEach(img=>{

  img.addEventListener("click",()=>{

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

  });

});

document.getElementById("closeLightbox")
.addEventListener("click",()=>{

  lightbox.style.display = "none";

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


// ===== AI助手 =====

const aiButton =
  document.getElementById("aiButton");

const aiChat =
  document.getElementById("aiChat");

aiButton.addEventListener("click",()=>{

  if(aiChat.style.display === "flex"){

    aiChat.style.display = "none";

  }

  else{

    aiChat.style.display = "flex";

  }

});


// ===== AI自动回复 =====

const aiInput =
  document.getElementById("aiInput");

const aiMessages =
  document.getElementById("aiMessages");

aiInput.addEventListener("keypress",e=>{

  if(e.key === "Enter"){

    const text =
      aiInput.value;

    if(text.trim() === "") return;

    const userMsg =
      document.createElement("div");

    userMsg.className = "ai-msg";

    userMsg.innerHTML =
      `你：${text}`;

    aiMessages.appendChild(userMsg);

    const aiMsg =
      document.createElement("div");

    aiMsg.className = "ai-msg";

    aiMsg.innerHTML =
      "AI：这是商业级网站演示助手 🤖";

    setTimeout(()=>{

      aiMessages.appendChild(aiMsg);

      aiMessages.scrollTop =
        aiMessages.scrollHeight;

    },500);

    aiInput.value = "";

  }

});
