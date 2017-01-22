
$(document).ready(function($){

	$('.year')
		.mouseenter(function () { $(this).find('ul').fadeIn('slow') })
		.mouseleave(function () { $(this).find('ul').fadeOut('fast') })

	$('.ni')

		.mouseenter(function () {

			$('.ni').removeClass('active')
			$(this).addClass('active')
		})
		.mouseleave(function () {

			$(this).removeClass('active')
			$('.selected').addClass('active')
		})

	$('.ni').on('click', function() {

		$('.ni').removeClass('active selected')
		$(this).addClass('active selected')
	})

	$('.mobile-nav .btn').on('click', function(){

    	$('.mobile-nav').toggleClass('open')
  	})
});
