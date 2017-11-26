$(document).scroll(function() {
  if( $(this).scrollTop() > 260 ) {
      if(transparent) {
          transparent = false;
          $('nav[role="navigation"]').removeClass('navbar-transparent');
      }
  } else {
      if( !transparent ) {
          transparent = true;
          $('nav[role="navigation"]').addClass('navbar-transparent');
      }
  }
});