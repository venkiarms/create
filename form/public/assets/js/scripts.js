/* DOM Loader */


/* Functions */


/* Common Scripts */

$(document).ready(function(){

  /* toggle class on header on scroll */
  var header = $('.site-header');
  if( header ){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();

      if ( scrollTop > 5 ) {
        header.addClass("site-header--scroll");
      } else {
        header.removeClass("site-header--scroll");
      }
    });
  }

  /* toggle class on body for mobile-menu */
  var body = $('body');
  var mobileMenuOverlay = $('.mobile-menu__overlay');
  var mobileMenuButton = $('.mobile-menu__button');
  mobileMenuOverlay.click(function(){
    body.removeClass('mobile-menu--active');
  });
  mobileMenuButton.click(function(){
    body.addClass('mobile-menu--active');
  });
});


/* Home Scripts */

$(document).ready(function(){

  // Add active class to next figure periodically
  setInterval(function(){
    var active = $(".hero-images__figure.active").removeClass('active');
    if(active.next() && active.next().length){
      active.next().addClass('active');
    }else{
      active.siblings(":first").addClass('active');
    }
  }, 6500);


  /*
  var featuredVideo = $('#featuredVideo');

  // Actions on features video modal show
  $('#videoModal').on('show.bs.modal', function (event) {
    featuredVideo.trigger('play');
  });

  // Actions on features video modal hide
  $('#videoModal').on('hide.bs.modal', function (event) {
    featuredVideo.trigger('pause');
  });
  */

});
