document.getElementById("get-title-btn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const titleElement = document.getElementById("tab-title");
  titleElement.textContent = tab.title;
  titleElement.style.fontWeight = "bold"; 
});
