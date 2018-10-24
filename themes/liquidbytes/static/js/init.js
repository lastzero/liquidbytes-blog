(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('a[href="' + window.location.pathname + '"]').parents().addClass('active');
  }); // end of document ready
})(jQuery); // end of jQuery name space
