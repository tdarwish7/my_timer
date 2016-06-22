
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  var pauseBtn = $('#pause');
  var countdown;
  var rstBtn = $('#reset');

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
      minutes.text('05');
      seconds.text('00');
      startCountdown();

    }

  function startCountdown(){
       countdown = setInterval(function(){
       var secondsVal = +seconds.text();
       var minutesVal = +minutes.text();
     if(secondsVal === 0 && minutesVal === 0){
       breakBtn.removeClass('disabled');
       breakBtn.removeAttr('disabled');
       clearInterval(countdown);
       alert("Your 25 min work flow is now over, please click the break button to take a five minute break.");
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
