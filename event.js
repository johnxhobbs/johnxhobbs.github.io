
// Pan behaviour: go right up to edge
$('body').mousemove(function(e){
    var mousePosX = 50 + (e.pageX/$(window).width())*25;
    var mousePosY = 50 + (e.pageY/$(window).height())*25;
    $('body').css('background-position', mousePosX + '% ' +  mousePosY + '%');
});

// Set initial zoom to be zoom out
// TODO: make zoom in focus on mouse
var zoomedIn = false
$('body').click(function(e){
    zoomedIn = !zoomedIn
    var zoomLevel = 110 + 110 * zoomedIn
    $('body').css('background-size', zoomLevel + '%');
});