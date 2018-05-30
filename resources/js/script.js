/* global $ */

/*eslint-env browser*/




$(document).ready(function() {
    
    
    
    
    
    
/*----------------//-----------------*/
/*----navagation sticky scroll down--*/
/*----------------//-----------------*/
/*  
    * Prettymuch it's going check when I scroll down near of js--section-features class, it's going trigger/add on nav container a class created and formated that's the sticky in style.css. 
    * Otherwise whenever I scroll up to js--section-features it's going remove the sticky class.
    * To initialize without sticky, I have to remove the sticky from <nav class="sticky">, otherwise it's going appear when I refresh the page, cause the funtion down, only works when I scroll down or up, not when you are stand by/stand still.
    * direction can used to make it be executable many times you want. in this case whenever I scroll to waypoint.
*/
    $('.js--section-features').waypoint(function(direction) {   
        if(direction == "down"){
            $('nav').addClass('sticky');

        }else{
            $('nav').removeClass('sticky');
        }  
    }, /*final waypont plus offset*/
   {offset: '60px;'}); /* going give a gap of 60px to trigger the function*/
    




/*----------------//-----------------*/
/*---------buttons directions--------*/
/*----------------//-----------------*/

   /* 
        * It's going select the button js--btn-full and check whenever it's be clicked ...it's going scroll to a my class .js--section-sign-up to 1 sec 
        * 
    */ 
    
$('.js--btn-full').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-sign-up').offset().top}, 1000)
});
    

$('.js--btn-ghost').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
});


// Select all links that start with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
    
    
    
    
    
 /*----------------//-----------------*/
/*----------EFFECT FADE-IN -----------*/
/*----------------//-----------------*/
    
    /* it's going select a waypoint "js--wp-1", and whenever I reach near the waypoint it's going trigger a class that make this effect of fade in up, but for it I have to make the container disappear before */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {offset: '70%'})

    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp')}, {offset: '70%'})
    
    $('.js--wp-3').waypoint(function(direction){
         if(direction == "down"){
                $('.js--wp-3').addClass('animated bounceIn');
         }else{
                $('.js--wp-3').removeClass('animated bounceIn');
         }
    }, {offset: '50%'})
    
    $('.js--wp-3').waypoint(function(direction){
         if(direction == "up"){
             $('.js--wp-3').addClass('animated bounceIn');
            
         }else{
             $('.js--wp-3').removeClass('animated bounceIn');
         }
    }, {offset: '20%'})
    
/*----------------//-----------------*/
/*----------APPEAR NAV 480PX---------*/
/*----------------//-----------------*/ 
    /* 
        it's going select a class created in <a class="nav-480px js--nav-480px"> and whenever I click on it, the list js--UlNav-main is going slide up or down with slideToggle(). Also, inside of <a> already has a Icon initialize, but I wanna change whenever I click on it
        * So I will check when I click onto <a> and the <i> has a icon menu, I'll switch by icon close and remove Icon menu, otherwise I'm going add Icon menu and remove Icon close.
        * the button is going be inactive until window reach 480.
        *toggle function, show wherever thing that's not invisible, that's why I intialize the father of js--UlNav-main -> UlNav-main be displayed none in 480, but when I click on the button it's going make the js--UlNav-main appear again
    */
    
   $('.js--nav-480px').click(function() {
          var navlist = $('.js--UlNav-main');
          var icon = $('.js--nav-480px i');
          
       navlist.slideToggle();
       
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
       
     

    });
    
    /*if the window size is > than 480 I'm going slidedown automatically cause the button is going be inactive when it's above than 480*/
    $(window).resize(function(){
     if ($(window).width() > 480) {
     $('.js--UlNav-main').slideDown();
     }

});    
    /* I check whenever the browser is changed*/
    $(window).resize(function(){
		var $Wheight = $(window).height();
        var $Wwidth = $(window).width();
		
        /* if the currenctly heigh browser is longer than 420 I'll set up height for Header that contain a back-ground image the value of browser heigh into "height:" so headers are going completely fit with size browser*/
        /*otherwise I set in queries.css, whenever the height browser be shorter than 420.. I set to "height:" only 100%, that means I don't wanna fit only  grant me  you are going be the size according your components inside */
        if($Wheight>420){
        $('header').css("height", $Wheight);
            }
        /* but if the height browser be shorter than 420 and the width broser be between 1200 and maximum screen, I'm going set to the box '.hero-text-box' a padding-top only of 5%...cause if this two condition be false the padding-top are going have 20% cause I alreday set it in style.css,*/
        
        /*
            * if the browser is maximized the padding-top are going have 20%.
            * if the browser is not maximized and its height is larger than 420, the Hearders will fit in browser
            * if the browser is not maximized and its height is shorter than 420, the Hearders will fit according its components. the paddin still have 20%.
                * but if the browser is between total screen and 1200. the padding-top is going have 5%    
        */
  
         if($Wheight<=420){
             if($Wwidth>1200 && $Wwidth<screen.width){  //screen.width max width of user.
                $('.hero-text-box').css("padding-top", "5%");
            }
        }
        });
    
    
        
    
}); /*final document*/