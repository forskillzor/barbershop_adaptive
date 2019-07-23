var registerButtonShow = document.querySelector(".register-button");
var registerButtonHide = document.querySelector(".register-popup-close");
var registerPopup = document.querySelector("#register");
var login = document.querySelector("#login");

var mapButtonShow = document.querySelector("#js-map-show");
var mapButtonHide = document.querySelector(".map-popup-close");
var mapPopup = document.querySelector("#map");

registerButtonShow.addEventListener("click", function(evt){
	evt.preventDefault();
    registerPopup.classList.add("register-popup-show");
	login.focus();
});
registerButtonHide.addEventListener("click", function(evt){
    evt.preventDefault();
    registerPopup.classList.remove("register-popup-show");
});
mapButtonShow.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.add("map-popup-show");
});
mapButtonHide.addEventListener("click", function(evt){
	evt.preventDefault();
	mapPopup.classList.remove("map-popup-show");
});
/*map-popup-show*/