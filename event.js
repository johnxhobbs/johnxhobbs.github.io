var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

const limitNumberWithinRange = (num, min = 0, max = 100) => {
    return Math.min(Math.max(num, min), max);
  };

// Pan behaviour: go right up to edge
$('body').mousemove(function(e){
    var mousePosX = limitNumberWithinRange(0 + (e.pageX/$(window).width())*120 - 10);
    var mousePosY = limitNumberWithinRange(0 + (e.pageY/$(window).height())*120 - 10);
    $('body').css('background-position', mousePosX + '% ' +  mousePosY + '%');
});

// Set initial zoom to be zoom out
var zoomedIn = false
$('body').click(function(e){
    zoomedIn = !zoomedIn
    var zoomLevel = 110 + 110 * zoomedIn
    $('body').css('background-size', zoomLevel + '%');
});

var initialZoom = $('body').css('background-size')
// Apple devices need to use gesture
function zoom(e) {
    console.log(initialZoom)
    console.log(e.scale)
    zoomLevel = initialZoom * (e.scale)
    console.log(zoomLevel)
    $('body').css('background-size', zoomLevel + '%');
    e.preventDefault()
  }
  document.addEventListener('gesturestart', zoom)
  document.addEventListener('gesturechange', zoom)
  document.addEventListener('gestureend', zoom)