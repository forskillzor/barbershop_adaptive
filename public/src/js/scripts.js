
var menuToggleButton = document.querySelector(".main-menu__toggle-button");
var mainMenu = document.querySelectorAll(".main-menu__item");
menuToggleButton.addEventListener("click", function(){
	for (let i = 1; i<mainMenu.length; i++){
		mainMenu[i].classList.toggle('displayed-item');
	}
});
