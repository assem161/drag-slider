/*console.log*/
$(function(){
	var sliders =document.querySelector('.slider');
	var isDown = false;
	var startX;
	var scrollleft;

	sliders.addEventListener('mousedown',(e) => {
		isDown = true;
		sliders.classList.add('active');
		startX = e.pageX - sliders.offsetLeft;
		scrollleft = sliders.scrollLeft;
	});

	sliders.addEventListener('mouseleave',() => {
		isDown = false;
		sliders.classList.remove('active');
	});

	sliders.addEventListener('mouseup',() => {
		isDown = false;
		sliders.classList.remove('active');
	});
	
	sliders.addEventListener('mousemove',(e) => {
		if(!isDown) return;
		e.preventDefault();
		/*console.log(startX);*/
		var x = e.pageX - sliders.offsetLeft;

		var walk = (x - startX)*3;
		sliders.scrollLeft = (scrollleft - walk);
	});	

	window.addEventListener("scroll", myFunction);
	sliders.addEventListener("click", myFunction);

	function myFunction(e){
		if(!isDown) return;
		e.preventDefault();
		/*console.log(startX);*/
		var x = e.pageX - sliders.offsetLeft;

		var walk = (x - startX)*3;
		sliders.scrollLeft = (scrollleft - walk);	
	}

})

