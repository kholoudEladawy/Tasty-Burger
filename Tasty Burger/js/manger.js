/*global $ , window*/
$(function(){
    var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true
});
    $('.carousel').carousel({
        interval: 2000
    });
$(window).scroll(function(){
    if($(this).scrollTop() >= 700)
    {
        $('.scrollup').show();
    }
    else
    {
        $('.scrollup').hide();
    }
})

$('.scrollup').click(function(){
    $('html , body').animate({scrollTop:0},800);
})
    $('html , body').niceScroll({
        cursorcolor:"rgba(62, 162, 44, 0.63)",
        cursorwidth:"10px"
    });
    $(".menu .btn").on("click",function(){
        location.href = "register.html";
    })
});