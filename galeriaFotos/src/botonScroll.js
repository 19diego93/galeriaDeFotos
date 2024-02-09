function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("volverArriba").style.display = "block";
  } else {
    document.getElementById("volverArriba").style.display = "none";
  }
};
document.getElementById("volverArriba").onclick = function () {
  scrollToTop();
};
