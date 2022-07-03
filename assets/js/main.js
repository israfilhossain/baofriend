(function($) {
  var windowWidth = $(window).width();
  $(window).scroll(function(){
    if ($(window).scrollTop() > 250) {
      $('.header').addClass( "scrl");
      $('body').addClass( "scrl-body");
    }else {
      $('body').removeClass("scrl-body");
      $('.header').removeClass("scrl");
    }
  
  });
  $('.navbar-toggle').on('click', function(){
  	$('#mobile-nav').slideToggle(300);
  });
	
$('#gSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  centerPadding: 0,
  infinite: true,
  autoplaySpeed: 5000,
  nextArrow: $('#sld-next'),
  prevArrow: $('#sld-prev'),
  autoplay: false
});

$('.mobile-menu-opener').on('click', function(){
  $('.mobile-menu').addClass('active');
  // $(window).scrollTop(0);
});

$('.tab-menu-heading').on('click', function(){
  $('.tab-menu-heading').removeClass('active');
  $('.tab-details').removeClass('active');
  
  $(this).addClass('active');
  $(this).next().addClass('active');
  // $(window).scrollTop(0);
});


$('.cross, .mobile-menu .scroll-nav').on('click', function(){
  $('.mobile-menu').removeClass('active');
  // $(window).scrollTop(0);
});

AOS.init();



    

})(jQuery);