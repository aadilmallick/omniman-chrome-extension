const img = document.querySelector("img");

img.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const tabId = tab.id;
  chrome.scripting.executeScript({
    target: { tabId: tabId, allFrames: true },
    files: ["Content.js"],
  });
});
