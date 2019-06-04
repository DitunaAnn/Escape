


	// selector (css selector
	// default: [hred^="#anchor"]
	// Селектор на ссылку для клика

	// speed (number)
	// default: 500
	// Скорость анимации прокрутки

	// beforeScroll (callback)
	// Функция, которая будет выполнена перед анимацией

	// afterScroll (callback)
	// Функция, которая будет выполнена после анимации

	// )





function toAnchor(param) {
	var options = {
		selector: '[href^="#anchor"]',
		speed: 500,
		beforeScroll: function() {},
		afterScroll: function() {},
		responsive: [],
		offset: 0
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for (let key in options) {

		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {

		$(document).ready(reOpt);
		$(window).resize(reOpt);
		function reOpt (){

			for (let i = 0; i < options.responsive.length; i++) {
				if (window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings) {
					options[key] = options.responsive[i].settings[key];
					}
				}else {
					for (let key in options) {
						options[key] = defaults[key];
					}

				}
			}
		}
	}

	$(options.selector).click(function() {
		event.preventDefault();

		var id     = $(this).attr('href'),
			docTop = $(id).offset().top;


		options.beforeScroll();

		$('html, body').animate({
			scrollTop: docTop - options.offset
		}, options.speed);

		setTimeout(options.afterScroll, options.speed);
	});

};


toAnchor({
	responsive: [
		{
			breakpoint: 767,
			settings: {
				offset: $('.topheader').height()
			}
		}
	]
});


	// selector (css selector)
	// default: .nav-toggle
	// Селектор кнопки переключателя для клика

	// toggleClass (string)
	// default: nav-toggle_active
	// Переключатель класса для кнопки

	// selectorNav (css selector)
	// default: .nav
	// Селектор блока навигации

	// toggleClassNav (string)
	// default: nav_active
	// Переключатель класса для блока навигации

	// selectorLink (css selector)
	// default: [href^="#anchor"]
	// Селектор ссылки для клика

	// blockScroll (boolean)
	// default: false
	// Блокирует прокрутку страницы при открытом меню





function toggleNav(param) {
	var options = {
		selector: '.nav-toggle',
		toggleClass: 'nav-toggle_active',
		selectorNav: '.nav',
		toggleClassNav: 'nav_active',
		selectorLink: '[href^="#anchor"]',
		blockScroll: false,
		responsive: [],
		activeState: false
	};

	for (let key in param) {
		options[key] = param[key];
	}

	var defaults = {};

	for ( let key in options) {
		defaults[key] = options[key];
	}

	if ( options.responsive.length ) {
		$(document).ready(reOpt);
		$(window).resize(reOpt);

		function reOpt () {
			for (let i = 0; i < options.responsive.length; i++) {
				if ( window.matchMedia(`(max-width: ${options.responsive[i].breakpoint}px)`).matches ) {

					for (let key in options.responsive[i].settings ) {
						options[key] = options.responsive[i].settings[key];
					}
				} else {

					for (let key in options) {
						options[key] = defaults[key];
					}
				}
		}

		}
	}

	$(`${options.selector}, ${options.selectorLink}`).click(function() {
		options.activeState = !options.activeState;

		if ( options.toggleClass ) {
			$(options.selector).toggleClass(options.toggleClass );
		}

		if ( options.toggleClassNav ) {
			$(options.selectorNav).toggleClass( options.toggleClassNav );
		}

		if ( options.blockScroll ) {
			if ( options.activeState ) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').removeAttr('style');
			}
		}
	});
}

toggleNav({
	responsive: [
		{
			breakpoint: 767,
			settings: {
				blockScroll: true
			}
		}
	]
});

$('.team-grid').slick({
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	dots: false,
	prevArrow: $('.team-prev'),
	nextArrow: $('.team-next'),
	responsive: [
		{
			breakpoint: 640,
			settings:{
				slidesToShow: 1,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 2,
				dots: true
			}
		},
		]
});

$('.logos-block__item').slick({
	slidesToShow: 4,
	autoplay: true,
	autoplaySpeed: 7000,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 940,
			settings:{
				slidesToShow: 3,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint: 480,
			settings:{
				slidesToShow: 1,
				dots: true
			}
		},
		]
});

$(window).on('load resize', function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.clients-block__items:not(.slick-initialized)').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true,
	prevArrow: $('.clients-block_prev'),
	nextArrow: $('.clients-block_next')
    });
  } else {
    $(".clients-block__items.slick-initialized").slick("unslick");
  }
});

