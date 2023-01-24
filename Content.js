let srcs = ["images/omni1.jpg", "images/omni2.jpg"];

let imgs = document.querySelectorAll("img");
let curOffset = 0;

function setImages() {
  for (let img of imgs) {
    let url = chrome.runtime.getURL(
      srcs[Math.floor(Math.random() * srcs.length)]
    );
    if (img.src != url) img.src = url;
  }
}

setImages();

// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollY, curOffset);
//   if (window.scrollY > window.innerHeight && window.scrollY > curOffset) {
//     curOffset += window.innerHeight;
//   }
// });
