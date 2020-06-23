$(document).ready(function(){
    // $("#loginModal").modal("hide");
    $("#logIn").click(function(){                
        $("#loginModal").modal("show");
    });
    $("#reserveBtn").click(function(){
        $("#reserveModal").modal("show");
    });
    $('#myCarousel').carousel({interval: 2000});
    $('#carouselBtn').click(function() {
        if ($('#carouselBtn').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselBtn').children('span').removeClass('fa-pause');
            $('#carouselBtn').children('span').addClass('fa-play');
        } else {
            $('#myCarousel').carousel('cycle');
            $('#carouselBtn').children('span').removeClass('fa-play');
            $('#carouselBtn').children('span').addClass('fa-pause');
        }                
    });
});