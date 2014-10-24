(function() {
  var $a = $('#akiyoshi');

  $(window).scroll(_.throttle(function(e) {
    var y = $(this).scrollTop();
    var t;
    var o;

    if (y >= 0) {
      t = y / 500;

      o = {
        top: 500 * t + 200
      };
    } else if (y >= 500) {
      t = (y - 500) / (1000 - 500);

      o = {
        top: 800 * t
      };
    }

    $a.stop().animate(o);
  }, 200));
}());
