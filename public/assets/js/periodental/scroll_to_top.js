//Scroll to top
var mybutton = document.getElementById("scroll-to-top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scroll_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
