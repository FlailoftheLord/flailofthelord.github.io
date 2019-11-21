/*
 * Make the nav bar go away slightly when u scroll down.
 */
 $(document).ready(function () {
    if ($(window).scrollTop() > 80) {
      $("body").toggleClass("scrolled");
    }

    $(window).on("scroll", function () {
      $("body").toggleClass("scrolled", ($(window).scrollTop() > 80));
    });
 });
