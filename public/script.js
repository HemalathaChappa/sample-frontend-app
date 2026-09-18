document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("output").textContent =
    "Button clicked at " + new Date().toLocaleTimeString();
});
