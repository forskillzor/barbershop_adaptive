
//:::::: SLIDER EDGES ::::::::

{

	var edges_button1 = document.querySelector("#edges__bullit-1");
	var edges_button2 = document.querySelector("#edges__bullit-2");
	var edges_button3 = document.querySelector("#edges__bullit-3");

	var edges_slide1 = document.querySelector("#edges__slide-1");
	var edges_slide2 = document.querySelector("#edges__slide-2");
	var edges_slide3 = document.querySelector("#edges__slide-3");

	edges_button1.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		edges_slide1.classList.add("active");
	});
	edges_button2.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		edges_slide2.classList.add("active");
	});
	edges_button3.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		edges_slide3.classList.add("active");
	});

	function removeClass(){
		if(edges_slide1.classList.contains("active")){
			edges_slide1.classList.remove("active");
		}
		if(edges_slide2.classList.contains("active")){
			edges_slide2.classList.remove("active");
		}
		if(edges_slide3.classList.contains("active")){
			edges_slide3.classList.remove("active");
		}
	}
}

{
	var button1 = document.querySelector("#about__bullit-1");
	var button2 = document.querySelector("#about__bullit-2");
	var button3 = document.querySelector("#about__bullit-3");

	var slide1 = document.querySelector("#about__slide-1");
	var slide2 = document.querySelector("#about__slide-2");
	var slide3 = document.querySelector("#about__slide-3");

	button1.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		slide1.classList.add("active");
	});
	button2.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		slide2.classList.add("active");
	});
	button3.addEventListener("click", function(evt){
		evt.preventDefault();
		removeClass();
		slide3.classList.add("active");
	});

	function removeClass(){
		if(slide1.classList.contains("active")){
			slide1.classList.remove("active");
		}
		if(slide2.classList.contains("active")){
			slide2.classList.remove("active");
		}
		if(slide3.classList.contains("active")){
			slide3.classList.remove("active");
		}
	}
}
