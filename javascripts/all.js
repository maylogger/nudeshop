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
  $(".sidebar-inner").affix();
}

$('.event').each(function(){

  $(this).masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.item'
  });

});
