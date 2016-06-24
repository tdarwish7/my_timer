
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  var pauseBtn = $('#pause');
  var countdown;
  var pause = 0;
  var rstBtn = $('#reset');
  var Ding = document.getElementById('sound');
  var colorChange = $('body');
  var Wombo = document.getElementById('lol');
  var Pear = $('#lolwut');
  var bluesteel = $('#zoo');


  start.on('click', startCountdown);
  breakBtn.on('click', takeABreak);
  pauseBtn.on('click', pausetimer);
  rstBtn.on('click', resetTimer);
  Pear.on('click', playWombo);
  bluesteel.on('click', Move);


  function playWombo(){
    Wombo.play();
  }


    function resetTimer(){
      minutes.text('25');
      seconds.text('00');

    }

    function pausetimer(){
    if( pause === 0){
      pause = 1;
      clearInterval(countdown);
      pauseBtn.text('Resume');

   } else{
      pause = 0;
      pauseBtn.text('Pause');
      startCountdown();


    }

    }



    function takeABreak(){

      minutes.text('00');
      seconds.text('03');
      startCountdown('The break is over!');

    }



  function startCountdown(msg){
    // by adding msg I made the 'msg' event an object

       clearInterval(countdown);
        colorChange.addClass('gradient');
       countdown = setInterval(function(){
       var secondsVal = +seconds.text();
       var minutesVal = +minutes.text();
     if(secondsVal === 0 && minutesVal === 0){
       breakBtn.removeClass('disabled');
       breakBtn.removeAttr('disabled');
       colorChange.removeClass('gradient');
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
});



function Move(){
  var Rant = document.getElementById('stupid');
  var elem = document.getElementById('animate');
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if ( pos == 350 ) {
    clearInterval(id);
  } else {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';
    Rant.play();
    }
  }
}
