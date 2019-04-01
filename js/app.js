const $sliderImg = document.querySelectorAll('.slide-img'),
$nextItem = document.querySelector('.next'),
$previousItem = document.querySelector('.previous'),
sliderImgCount = $sliderImg.length - 1;
var count = 0;
var autoPlay = setInterval(showNextItem, 4000);

$nextItem.addEventListener('click', showNextItem);
$previousItem.addEventListener('click', showPreviousItem);

function showNextItem() {
	$sliderImg[count].classList.remove('slider-active');
	if (count < sliderImgCount) {
		count++;
	}else {
		count = 0;
	}
	$sliderImg[count].classList.add('slider-active');
	clearInterval(autoPlay);
	autoPlay = setInterval(showNextItem, 4000);
}

function showPreviousItem() {
	$sliderImg[count].classList.remove('slider-active');
	if (count > 0) {
		count--;
	}else {
		count = sliderImgCount;
	}
	$sliderImg[count].classList.add('slider-active');
	clearInterval(autoPlay);
	autoPlay = setInterval(showNextItem, 4000);
}