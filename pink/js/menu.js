var siteList = document.querySelector(".site-list");
var toggle = document.querySelector(".site-list__toggle");

if (siteList.classList.contains("site-list--nojs")) {
  siteList.classList.remove("site-list--nojs");
  siteList.classList.add("site-list--closed");
}
toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (siteList.classList.contains("site-list--closed")) {
    siteList.classList.remove("site-list--closed");
    siteList.classList.add("site-list--opened");
  } else if (siteList.classList.contains("site-list--opened")) {
    siteList.classList.remove("site-list--opened");
    siteList.classList.add("site-list--closed");
  }
});
