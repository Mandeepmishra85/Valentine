const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("noModal");
const backBtn = document.getElementById("backBtn");

yesBtn.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=D9DiMnlpFK8&list=RDD9DiMnlpFK8&start_radio=1";
});

noBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

backBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
