const $sliderImg = document.querySelectorAll('.slide-img'),
$nextItem = document.querySelector('.next'),
$previousItem = document.querySelector('.previous'),
$sliderController = document.querySelector('.slider-controller'),
sliderImgCount = $sliderImg.length - 1;
var sliderCount = 0,
sliderIndex = 0,
controllerIndex = 0,
controllerBar,
autoPlay = setInterval(showNextItem, 5000);

for(let i of $sliderImg) {
	if (controllerIndex == 0) {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar controller-active' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}else {
		controllerBar = "<a href='javascript:void(0)' class='controller-bar' data-index='" + controllerIndex + "'><span class='controller-icon'></span></a>";
	}
	$sliderController.innerHTML += controllerBar;
	controllerIndex++;
}

const $controllerBar = document.querySelectorAll('.controller-bar');

$nextItem.addEventListener('click', showNextItem);
$previousItem.addEventListener('click', showPreviousItem);
for (let i of $controllerBar) {
	i.addEventListener('click', showSlider);
}

function showNextItem() {
	$sliderImg[sliderCount].classList.remove('slider-active');
	$controllerBar[sliderCount].classList.remove('controller-active');
	if (sliderCount < sliderImgCount) {
		sliderCount++;
	}else {
		sliderCount = 0;
	}
	$sliderImg[sliderCount].classList.add('slider-active');
	$controllerBar[sliderCount].classList.add('controller-active');
	clearInterval(autoPlay);
	autoPlay = setInterval(showNextItem, 5000);
}

function showPreviousItem() {
	$sliderImg[sliderCount].classList.remove('slider-active');
	$controllerBar[sliderCount].classList.remove('controller-active');
	if (sliderCount > 0) {
		sliderCount--;
	}else {
		sliderCount = sliderImgCount;
	}
	$sliderImg[sliderCount].classList.add('slider-active');
	$controllerBar[sliderCount].classList.add('controller-active');
	clearInterval(autoPlay);
	autoPlay = setInterval(showNextItem, 5000);
}

function showSlider() {
	sliderIndex = parseInt(this.dataset.index);
	if (sliderCount != sliderIndex) {
		$sliderImg[sliderCount].classList.remove('slider-active');
		$sliderImg[sliderIndex].classList.add('slider-active');
		$controllerBar[sliderCount].classList.remove('controller-active');
		$controllerBar[sliderIndex].classList.add('controller-active');
		sliderCount = sliderIndex;
		clearInterval(autoPlay);
		autoPlay = setInterval(showNextItem, 5000);
	}	
}