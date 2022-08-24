var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
     document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("navBar").style.top = "-70px";
        document.getElementById("footer").style.bottom = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
