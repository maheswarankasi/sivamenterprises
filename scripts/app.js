$(document).ready(function () {
  const offcanvasEl = document.getElementById("offcanvasNavbar");
  offcanvasEl.addEventListener("hidden.bs.offcanvas", function () {
    // Prevent focus jump
    document.activeElement.blur();
  });
  // Show button when scrolled down 100px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
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
