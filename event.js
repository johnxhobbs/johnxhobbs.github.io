$('body').mousemove(function(e){
    var mousePosX = 50 + (e.pageX/$(window).width())*25;
    var mousePosY = 50 + (e.pageY/$(window).height())*25;
    $('body').css('backgroundPosition', mousePosX + '% ' +  mousePosY + '%');
});