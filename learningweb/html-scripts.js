//to top of screen function  
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//navigation button function

  //to learning html page
  function toHTML() {
    document.location.href="learningweb.html";
  }
  
  //to overthewire page
  function toOTW() {
    document.location.href="../otw/over.html";
  }

  //to pico page
  function toPico() {
    document.location.href="../pico/pico.html";
  }

  //to home page
  function toHome() {
    document.location.href="../home.html";
  }