/*
 * Make the nav bar go away slightly when u scroll down.
 */
 $(document).ready(function () {
      $(window).on("scroll", function () {
        $("body").toggleClass("scrolled", ($(window).scrollTop() > 80));
      });
 });
