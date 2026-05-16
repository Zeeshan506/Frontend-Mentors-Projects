const shareBtn = document.getElementById("shareBtn");
const desktopShare = document.getElementById("desktopShare");
const mobileShare = document.getElementById("mobileShare");
const parentDiv = document.getElementById("parent");

shareBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    // Desktop popup toggle
    desktopShare.classList.toggle("hidden");
  } else {
    mobileShare.classList.toggle("hidden");
  }
});
