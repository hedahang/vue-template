(function(c, minW, maxW) {
  var e = document.documentElement || document.body,
    a = "orientationchange" in window ? "orientationchange" : "resize",
    b = function() {
      var f = e.clientWidth < minW ? minW : e.clientWidth;
      e.style.fontSize = f >= maxW ? "100px" : 100 * (f / maxW) + "px";
    };
  b();
  c.addEventListener(a, b, false);
})(window, 1280, 1920);
