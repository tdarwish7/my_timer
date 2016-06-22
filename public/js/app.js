
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  var pauseBtn = $('#pause');
  var countdown;

  start.on('click', startCountdown);
  breakBtn.on('click', takeABreak);
  pauseBtn.on('click', pausetimer);

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

    console.log("meadfkjn!!!")

    }, 1000);
  }
})
