$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   dots:false,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:4
       }
   }
})

window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }