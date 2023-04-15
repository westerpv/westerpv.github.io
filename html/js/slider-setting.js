/*---------------------------------------------------------------------
    File Name: slider-setting.js
---------------------------------------------------------------------*/
	
	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		navigation: {
		  prevEl: '.swiper-button-prev',
		  nextEl: '.swiper-button-next',
		},
		autoplay: {
			delay: 5000, // tiempo en milisegundos entre cada transición de diapositiva
			disableOnInteraction: false, // para que el autoplay no se detenga al interactuar con el slider
		  },
		  pauseOnMouseEnter: true, // para que el autoplay se detenga al pasar el mouse sobre el slider
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		on: {
		  slideChange: function() {
			const activeVideo = this.slides[this.activeIndex].querySelector('video');
			activeVideo.play();
		  },
		  slideNextTransitionStart: function() {
			const prevVideo = this.slides[this.previousIndex].querySelector('video');
			prevVideo.pause();
		  },
		  slidePrevTransitionStart: function() {
			const prevVideo = this.slides[this.previousIndex].querySelector('video');
			prevVideo.pause();
		  },
		},
	  });
	  
