document.addEventListener('DOMContentLoaded', function() {

  // -----------------------------
  // Products Gallery Carousel
  // -----------------------------
  function productGallery() {
    const elem = document.querySelector('.js-top-products');
    if (!elem) return; 

    const flickityInstance = new Flickity(elem, {
      cellAlign: 'center',
      freeScroll: true,
      wrapAround: true,
      autoPlay: 3000,
      pageDots: false,
      prevNextButtons: false,
      groupCells: 1, 
    });

    elem.flickityInstance = flickityInstance;
  }

  // -----------------------------
  // Initialize
  // -----------------------------
  productGallery();
});
