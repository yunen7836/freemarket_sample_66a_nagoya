$(function(){
  
  // 「.social-icon」にマウスが乗ったときに、そのfont-sizeを30pxに変更し、
  $('.mypage__nav__list__h').hover(
  function(){
    $('.fa.fa-angle-right.fa-2x').animate({
      'font-size':'30px'
      
    },100);
  },
  // 離れたときにはfont-sizeを24pxにしてください。
  function(){
    $('.fa.fa-angle-right.fa-2x').animate({
      'font-size':'24px'
    },100);
  }
  );
});