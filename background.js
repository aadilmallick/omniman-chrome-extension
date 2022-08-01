chrome.tabs.onUpdated.addListener(({ tabId, changeInfo, tab }) => {
  console.log("hello");
  chrome.runtime.sendMessage({ greeting: "hello" });
});
let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
