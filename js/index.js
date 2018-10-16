$(document).ready(function(){
  $('.site-header').hover(
    function(){
        $('body').addClass('invert');
    },
    function(){
        $('body').removeClass('invert');
    }
  );
  $('.site-header').on('mouseenter',function(e){
    var maxX = $(window).width() - $('.img-container').width();
    var maxY = $(window).height() - $('.img-container').height();
    $('.img-container').css({
        'left':getRandomInt(0, maxX),
        'top':getRandomInt(0, maxY)
    });
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
});
