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
  $(".nav-inner").affix();
  $(".sidebar-affix").affix({
    offset: {
      top: $(".sidebar-affix").offset().top - 24
    }
  });
}

$('.event').each(function(){

  $(this).masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.item'
  });

});


// light-box
$('.product-detail').magnificPopup({
  delegate: 'a.photo', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});
