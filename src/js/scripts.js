(function () {
  'use strict';
  ///////header nav/////
  const navbar = document.querySelector(".navbar");
  navbar.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("collapsed");
  });
  window.addEventListener("scroll", e => {
    let windowY = window.pageYOffset;
    let navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (windowY > navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
  });


  $("#textBtn").on("click", function(){
    $(".aboutUs__block--text").css("max-height", "none");
   });
   $("#textBtn").on("click", function(){
    $(".text-btn").css("display", "none");
   });

   let isotope = $('.full-menu').isotope({
    itemSelector: '.menu-item',
    masonry: {
        columnWidth: '.sizer',
        gutter: '.sizer'
    }
  });
   $('.filter__link').on('click', (e) => {
    e.preventDefault();
    let filter = $(e.target).attr('data-filter');
    filter = filter == '*' ? filter : '.' + filter;

    isotope.isotope({filter: filter});
    $('.filter__link').removeClass('active');
    $(e.target).addClass('active');
})
})();