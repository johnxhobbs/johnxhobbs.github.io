
const limitNumberWithinRange = (num, min = 0, max = 100) => {
    const parsed = parseInt(num);
    return Math.min(Math.max(parsed, min), max);
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
