document.addEventListener('DOMContentLoaded', function(){
  // Get HTML head element
  let head = document.getElementsByTagName('HEAD')[0];
  // Create new link Element
  let link = document.createElement('link');
  // set the attributes for link element
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
  // Append link element to HTML head
  head.appendChild(link);

  // swiper 
  new Swiper(".thanksSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        300: {
          spaceBetween: 10,
        },
        768: {
            spaceBetween: 30,
        },
        1024: {
            spaceBetween: 30,
        },
      },
  });

});