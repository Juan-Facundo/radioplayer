(function($){
  $(document).ready(function(){

    var source = '';
    var player = document.getElementById("reproductor");
    var audioSupport = document.createElement('audio').canPlayType;

    if (player.addEventListener) {
    player.addEventListener('play', justplay, false);
    }

    if (player.addEventListener) {
    player.addEventListener('emptied', load, false);
    }

    if (player.addEventListener) {
    player.addEventListener('canplaythrough', playing, false);
    }

    if (player.addEventListener) {
    player.addEventListener('waiting', loading, false);
    }

    var start_player = function() {
    instance3.playSound();
    }
    var stop_player = function() {
    instance3.stopSound();
    }

    var play = $('li.rp-play a');
    play.on('click', function(ev){
      ev.preventDefault();
      start_player();
    });

    var stop = $('li.rp-stop a');
    stop.on('click', function(ev){
      ev.preventDefault();
      stop_player();
    });

    function justplay() {
      start_player = function() {
        if (source) { 
          player.src = source;
        }
        player.play();
      }
      stop_player = function() {
        source = player.currentSrc;
        player.src='';
      }
    }

    function playing() {  
      $('p.status').remove();
      $('.rp-interface').append('<p class="status play">playing</p>');
      source = player.currentSrc;
    }

    function load() {  
      $('p.status').remove();
      $('.rp-interface').append('<p class="status stop">Stopped</p>');
    }  

    function loading() {  
      $('p.status').remove();
      $('.rp-interface').append('<p class="status buff">buffering</p>');
    }  

  });
})(jQuery);
