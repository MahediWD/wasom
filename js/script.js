$(function(){
    // counter js start..
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
 // counter js end..

//  veno box start..
    new VenoBox({
        selector: '.my-video-links',
    });
    //  veno box end..

// slick slider start...
$('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
  });
// slick slider end..
    
$('.service_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
  });


});












