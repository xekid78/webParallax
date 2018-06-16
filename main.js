(function($){
  'use strict';

  $(document).ready(function(){
    var one = $("#one");
    var two = $("#two");
    var three = $("#three");
    var four = $("#four");
    var five = $("#five");
    var six = $("#six");
    var w = $(window);

    w.scroll(function(){
      var h = w.scrollTop();
      one.css("left", h / 3 + "px");
      two.css("left", h / 5 + "px");
      three.css("left", h / 7 + "px");
      four.css("right", h / 7 + "px");
      five.css("right", h / 5 + "px");
      six.css("right", h / 3 + "px");
    });

  });

})(jQuery);
