$(document).ready(function () {
  // 1. Navbar Link Click - Close Offcanvas & Smooth Scroll
  $(".navbar-nav .nav-link").on("click", function (event) {
    // Offcanvas-ஐ கண்டுபிடிக்கவும்
    var offcanvasElement = document.getElementById("offcanvasNavbar");
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

    // Offcanvas open-ஆக இருந்தால் close செய்யவும்
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }

    // "index.html" அல்லது External link-ஆக இருந்தால் script-ஐ நிறுத்தவும்
    // (Local link # ஆக இருந்தால் மட்டுமே scroll செய்யும்)
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // Smooth Scroll using jQuery
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 80, // Header உயரத்திற்கு ஏற்ப -80ஐ மாற்றலாம்
        },
        800, // 800ms speed
        function () {
          // URL-ல் hash-ஐ சேர்க்க வேண்டாம் என நினைத்தால் இதை எடுத்துவிடலாம்
          // window.location.hash = hash; 
        }
      );
    }
  });

  // Scroll smoothly to top when clicked
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(window).on("scroll", function () {
    $(".reveal").each(function () {
      var top = $(this).offset().top;
      var winTop = $(window).scrollTop();
      var winHeight = $(window).height();
      if (top < winTop + winHeight - 100) {
        $(this).addClass("active");
      }
    });
  });
});
