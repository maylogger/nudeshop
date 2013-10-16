function isMobile(){
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
  );
}

// 如果不是手持裝置
if(!isMobile()) {

  $('.nav-inner').affix();

  if ( $('.sidebar-affix').length != 0 ) {
      $('.sidebar-affix').affix({
        offset: {
          top: $('.sidebar-affix').offset().top - 24
        }
      });
  }

} // if mobile end

$('.event').each(function(){

  $(this).masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.item'
  });

});


// light-box
if ( $('.product-detail').length != 0 ) {

    $('.product-detail').each(function() { // the containers for all your galleries should have the class gallery
        $(this).magnificPopup({
            delegate: '.gallery-photo', // the container for each your gallery items
            type: 'image',
            gallery:{enabled:true}
        });
    });

}
