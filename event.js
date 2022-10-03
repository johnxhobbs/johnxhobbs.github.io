
// Pan behaviour: go right up to edge
$('body').mousemove(function(e){
    var mousePosX = 0 + (e.pageX/$(window).width())*100;
    var mousePosY = 0 + (e.pageY/$(window).height())*100;
    $('body').css('background-position', mousePosX + '% ' +  mousePosY + '%');
});

// Set initial zoom to be zoom out
var zoomedIn = false
$('body').click(function(e){
    zoomedIn = !zoomedIn
    var zoomLevel = 110 + 110 * zoomedIn
    $('body').css('background-size', zoomLevel + '%');
});