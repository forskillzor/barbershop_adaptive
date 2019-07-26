var edgesSlides = document.querySelectorAll("#edges .slider__item");
var edgesBullits = document.querySelectorAll("#edges .slider__controls-bullit");
var aboutSlides = document.querySelectorAll("#about .slider__item");
var aboutBullits = document.querySelectorAll("#about .slider__controls-bullit");
var aboutArrows = document.querySelectorAll("#about .slider__button-arrow");

runSlider(100, 5000, edgesSlides, edgesBullits);
runSlider(100, 5000, aboutSlides, aboutBullits);

arrowSlide(aboutSlides, aboutBullits, aboutArrows);


function runSlider(times, latency, slides, bullits){
	BullitsListener(slides, bullits);
	for (var iterator = 0; iterator < times; iterator++){
		tasker(iterator, times, latency, slides, bullits);
	}
}
function tasker(iterator, times, latency, slides, bullits){
	setTimeout(function() {
		toNextSlide(dir = "next", slides, bullits);
	}, (times-iterator)*latency);
}
function toNextSlide(dir, slides, bullits){
	var currentSlide = indexOfActiveSlide(slides);
	if (dir == "next"){
		var nextSlide = indexOfNextSlide(slides);
	}
	if (dir == "prev") {
		var nextSlide = indexOfPrevSlide(slides);
	}

	bullits[currentSlide].classList.remove("active");
	bullits[nextSlide].classList.add("active");

	slides[currentSlide].classList.remove("active");
	slides[nextSlide].classList.add("active");
}
function indexOfNextSlide(slides){
	var currentSlide = indexOfActiveSlide(slides);
	var nextSlide = currentSlide + 1;
	if (nextSlide >= slides.length){
		return 0;
	}
	else{
		return nextSlide;
	}
}
function indexOfActiveSlide(slides){
	for(var i=0; i < slides.length; i++ ){
		if (slides[i].classList.contains("active")){
			return i;
		}
	}
}
function indexOfPrevSlide(slides){
	var currentSlide = indexOfActiveSlide(slides);
	var prevSlide = currentSlide - 1;
	if (prevSlide < 0){
		return slides.length-1;
	}
	else{
		return prevSlide;
	}
}
function BullitsListener(slides, bullits){

	for (let i=0; i<bullits.length; i++){
		bullits[i].addEventListener("click", function(){
			for(let j = 0; j < slides.length; j++){
				if(slides[j].classList.contains("active")){
					slides[j].classList.remove("active");
					bullits[j].classList.remove("active");
				};
			slides[i].classList.add("active");
			bullits[i].classList.add("active");
			}
		});
	}
}
function arrowSlide(slides, bullits, arrows){
	var arrowPrev = arrows[0];
	var arrowNext = arrows[1];

	arrowPrev.addEventListener("click", function(){
		toNextSlide(dir = "prev", slides, bullits);
	});
	arrowNext.addEventListener("click", function(){
		toNextSlide(dir = "next", slides, bullits);
	});
}
