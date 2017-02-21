$( document ).ready(function() {
    var header = document.querySelector(".services-header");
    var text = document.querySelector(".services-text")

  $('.section h2 p').hover(function() {
	   $(this).children('h2').stop(true, false, true).slideToggle(300);
   });
});
