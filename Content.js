const srcs = ["images/omni1.jpg", "images/omni2.jpg"];

const imgs = document.querySelectorAll("img");

for (let img of imgs) {
  img.src = chrome.runtime.getURL(
    srcs[Math.floor(Math.random() * srcs.length)]
  );
}
