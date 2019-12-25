// JS書いていく場所

$(function(){
  const obj = $(".scroll-animation-obj");
  const hopIn = $(".scroll-animation-hop");
  const leftIn = $(".scroll-animation-left");
  const rightIn = $(".scroll-animation-right");
  $(window).on('scroll',function(){
    obj.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'opacity': '1'
        });
      } else {
        $(this).css({
          'opacity': '1'
        });
      }
    });
    hopIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(0,60px)'
        });
      }
    });
    leftIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(-120px,0)'
        });
      }
    });
    rightIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(120px,0)'
        });
      }
    });
  });

});