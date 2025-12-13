$(document).ready(function () {
  
  // ==========================================
  // 1. NAVBAR LINK CLICK (Menu Close & Smooth Scroll)
  // ==========================================
  $(".navbar-nav .nav-link").on("click", function (event) {
    
    // close the offcanvas menu in mobile
    var offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement) {
      var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }

    // Smooth Scroll Logic
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // SAFETY CHECK: checking the ID available in HTML 
      if ($(hash).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 80, 
          },
          800 // Speed
        );
      }
    }
  });

  // ==========================================
  // 2. BACK TO TOP BUTTON & REVEAL ANIMATION
  // ==========================================
  
  // Button click panna mele poga
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  
  $(window).on("scroll", function () {
    
    // A. Back to top button - Show/Hide
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut(); 
    }

    // B. Reveal Elements on Scroll
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