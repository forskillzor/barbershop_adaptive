edgesSlider();
aboutSlider();

//::::::::::::::::::: SLIDER EDGES ::::::::::::::::::::::::::

function edgesSlider(){
	edgesSlides = document.querySelectorAll(".edges .slider__item");
	edgesSliderButtons = document.querySelectorAll(".edges .slider__controls-bullit");
	for (let i=0; i<edgesSliderButtons.length; i++){
		edgesSliderButtons[i].addEventListener("click", function(){
			for(let j = 0; j < edgesSlides.length; j++){
				if(edgesSlides[j].classList.contains("active")){
					edgesSlides[j].classList.remove("active");
				};
			edgesSlides[i].classList.add("active");
			}
		});
	}
}

//::::::::::::::::::: SLIDER ABOUT :::::::::::::::::::::::::::::

function aboutSlider(){
	aboutSlides = document.querySelectorAll(".talk-about .slider__item");
	aboutSliderButtons = document.querySelectorAll(".talk-about .slider__controls-bullit");
	for (let i=0; i<aboutSliderButtons.length; i++){
		aboutSliderButtons[i].addEventListener("click", function(){
			for(let j = 0; j < aboutSlides.length; j++){
				if(aboutSlides[j].classList.contains("active")){
					aboutSlides[j].classList.remove("active");
				};
			aboutSlides[i].classList.add("active");
			}
		});
	}
}

//::::::::::::::::::: MENU :::::::::::::::::::::::::

var menuToggleButton = document.querySelector(".main-menu__toggle-button");
var mainMenu = document.querySelectorAll(".main-menu__item");
menuToggleButton.addEventListener("click", function(){
	for (let i = 1; i<mainMenu.length; i++){
		mainMenu[i].classList.toggle('displayed-item');
	}
});
