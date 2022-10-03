// Disable zooming of the window
var viewportmeta = document.querySelector('meta[name="viewport"]');
viewportmeta.content = 'user-scalable=NO, width=device-width, initial-scale=1.0'

const limitNumberWithinRange = (num, min = 0, max = 100) => {
    return Math.min(Math.max(num, min), max);
  };

// Pan behaviour: go right up to edge
$('body').mousemove(function(e){
    var mousePosX = limitNumberWithinRange(0 + (e.pageX/$(window).width())*120 - 10);
    var mousePosY = limitNumberWithinRange(0 + (e.pageY/$(window).height())*120 - 10);
    $('body').css('background-position', mousePosX + '% ' +  mousePosY + '%');
});

// Pan on mobile too
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    var touch = e.touches[0];
    var mousePosX = limitNumberWithinRange(0 + (touch.pageX/$(window).width())*120 - 10);
    var mousePosY = limitNumberWithinRange(0 + (touch.pageY/$(window).height())*120 - 10);
    $('body').css('background-position', mousePosX + '% ' +  mousePosY + '%');
}, false);

// Set initial zoom to be zoom out
var zoomedIn = false
$('body').click(function(e){
    zoomedIn = !zoomedIn
    var zoomLevel = 110 + 110 * zoomedIn
    $('body').css('background-size', zoomLevel + '%');
});
