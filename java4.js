$('.set_timer').click(function() {
   
    var time = $('.time').val().replace(/[^0-9.]/g,'');
    var line = $('.line');
    line.removeClass('circle');
    line.removeAttr('style');
    setTimeout(function() {
      line.css({'transition-duration':time,'-webkit-transition-duration':time*60 + 's'});
      line.addClass('circle');
    },1);
    play();
  });

              
  function play(){
    var audio = document.getElementById("audio");
    audio.play();
  }