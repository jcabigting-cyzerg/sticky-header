var StickyHeader = function(params) {
  if(params || params != undefined) {
    var el = document.querySelectorAll(params.el)[0];
    var offset1 = params.offset1 || 200;
    var offset2 = params.offset2 || 500;
    if(offset1 >= offset2) {
      throw "Offset 2 must be bigger than Offset 1"; 
    }
    var clone = el.cloneNode(true);
    clone.classList.add('sticky-header');
    el.parentNode.insertBefore(clone, el.nextSibling);
    applyFixedHeader();
    window.addEventListener('scroll', function(){
      applyFixedHeader();
    }, false);
    function applyFixedHeader() {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      clone.classList.add('fixed');
      if(top > offset1) {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add('fixed-header');
        if(top > offset2) {
          clone.classList.add('show');
        } else {
          clone.classList.remove('show');
        }
      } else {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove('fixed-header');
      }
    }
  }
}
