
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  var pauseBtn = $('#pause');
  var countdown;
  var rstBtn = $('#reset');
  var Ding = document.getElementById('sound');

  start.on('click', startCountdown);
  breakBtn.on('click', takeABreak);
  pauseBtn.on('click', pausetimer);
  rstBtn.on('click', resetTimer);

    function resetTimer(){
      minutes.text('25');
      seconds.text('00');
    }

    function pausetimer(){
      clearInterval(countdown);
    }

    function takeABreak(){
      minutes.text('00');
      seconds.text('03');
      startCountdown('The break is over!');

    }

  function startCountdown(msg){
    // by adding msg I made '
       countdown = setInterval(function(){
       var secondsVal = +seconds.text();
       var minutesVal = +minutes.text();
     if(secondsVal === 0 && minutesVal === 0){
       breakBtn.removeClass('disabled');
       breakBtn.removeAttr('disabled');
       Ding.play();
       clearInterval(countdown);
       if( typeof msg === 'string'){
          alert(msg);
       } else {
          alert("The timer is finished, click break to take a five minute break.");

       }
       return;
     }




      if(secondsVal === 0){
        minutes.text(minutesVal -1);
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal - 1));
        } else {
          seconds.text(secondsVal -1);
        }

      }
    }, 1000);
  }
})
