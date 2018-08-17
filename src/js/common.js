var nav = document.querySelector('.nav'),
	navBtn = document.querySelector('.nav-btn'),
	navClose = document.querySelector('.nav__closebtn');


navBtn.onclick = function() {
	nav.classList.add('show');
}

navClose.onclick = function() {
	nav.classList.remove('show');
}

var scrolling = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < scrolling.length; i++) {
	 scrolling[i].onclick = function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
}

//slider

var slideIndex = 1,
	controls   = document.querySelectorAll('.control');

showSlides(slideIndex);

for(var i = 0; i < controls.length; i++) {
	controls[i].onclick = function() {
		switch (this) {
			case controls[0] :
				currentSlide(1);
				break;
			case controls[1] :
				currentSlide(2);
				break;
			case controls[2] :
				currentSlide(3);
				break;
		}
	}
}

function showSlides(n) {

  var slides = document.querySelectorAll('.slider__item'),
	  i;
  
  for(i = 0; i < slides.length; i++) {
  	slides[i].style.display = 'none'
  }

  for(i = 0; i < controls.length; i++) {
  	controls[i].classList.remove('active');
  }

  if (n > slides.length) {
  	slideIndex = 1;
  }

  if (n < 1) {
  	slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = 'block';
  controls[slideIndex - 1].classList.add('active');

}

function currentSlide(n) {
	showSlides(slideIndex = n);
}
