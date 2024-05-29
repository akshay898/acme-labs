window.onscroll = function () {headersticky()};
var header = document.getElementById("Anizoheader")
var sticky= header.offsetTop;

function headersticky(){
  if (window.scrollY > sticky){
    header.classList.add("sticky-header");
  }
  else{
    header.classList.remove("sticky");
  }
}



function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.normal .static');

  // If the animation has already been started
  if ($elem.hasClass('animated')) return;

  if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('animated');
  }
}

// Capture scroll events
$(window).scroll(function(){
  checkAnimation();
});