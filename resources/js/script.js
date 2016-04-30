$(document).ready(function(){
	$('.js--section-features').waypoint(function(direction){
			if(direction == "down"){
				$('nav').addClass('sticky-nav');
			} else {
				$('nav').removeClass('sticky-nav');
			}
		},{
			offset:'60px'
		});

	$('.js--scroll-to-plan').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plan').offset().top},1000);
	});

	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
	});


		$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},{
		offset:'50%'
	
	});	
	/*bounceInLeft*/
	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInLeft');
	},{
		offset:'50%'
	
	});	

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},{
		offset:'50%'
	
	});	

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated bounce');
	},{
		offset:'50%'
	
	});

	$('.js--wp-5').waypoint(function(direction){
		$('.js--wp-5').addClass('animated fadeInRight');
	},{
		offset:'50%'
	
	});

	$('.js--wp-6').waypoint(function(direction){
		$('.js--wp-6').addClass('animated tada');
	},{
		offset:'50%'
	
	});	
});
