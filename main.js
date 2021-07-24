$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" ) {
      x.className += " responsive";
    } else {
      x.className = "topnav";

    }
  }