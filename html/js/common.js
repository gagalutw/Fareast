//加入Scroll to top按鈕
$(function () {
    $('.wrapper').append('<a href="javascript: void(0)" class="scrollToTop"><i class="fas fa-chevron-up"></i></a>');
  
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.scrollToTop').addClass('show');
        } else {
            $('.scrollToTop').removeClass('show');
        }
      });
      
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


$(function () {
    $('#menu-toggle').click(function(){
        $(this).toggleClass('expand');
        $("html").toggleClass('is-mobile-mode');
      })
      $('.side-bg').click(function(){
        $(".nav-switch").removeClass('expand');
        $("html").removeClass('is-mobile-mode');
      })
})


