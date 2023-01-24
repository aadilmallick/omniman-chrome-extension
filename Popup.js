const img = document.querySelector("img");
let imgWasClicked = false;

img.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  imgWasClicked = true;
  const tabId = tab.id;
  chrome.scripting.executeScript({
    target: { tabId: tabId, allFrames: true },
    function: setOmniman,
  });
  // setInterval(() => {
  //   chrome.scripting.executeScript({
  //     target: { tabId: tabId, allFrames: true },
  //     function: setOmniman,
  //   });
  // }, 10 * 1000);
});

function setOmniman() {
  let srcs = ["images/omni1.jpg", "images/omni2.jpg"];

  let imgs = document.querySelectorAll("img");
  let curOffset = 0;

  let url1 = chrome.runtime.getURL(srcs[0]);
  let url2 = chrome.runtime.getURL(srcs[1]);

  function setImages() {
    for (let img of imgs) {
      let url = chrome.runtime.getURL(
        srcs[Math.floor(Math.random() * srcs.length)]
      );
      console.log(url);
      if (img.src != url1 || img.src != url2) {
        img.src = url;
        console.log("gotteem not equal");
      }
    }
  }

  setImages();
}
