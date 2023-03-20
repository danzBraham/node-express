$(document).ready(() => {
  $(window).scroll(() => {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      $("header").addClass("scrolled");
      $("header .navbar").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
      $("header .navbar").removeClass("scrolled");
    }
  });

  $("header .menu-toggle").click(() => {
    $("header .navbar").toggleClass("slide");
  });
});
