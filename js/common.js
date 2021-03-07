'use strict';

/*--------------------------------ここからハンバーガーメニュー------------------------------------------- */
const hamburgerOpen = () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');
  const nav = document.getElementById('nav');
  line1.classList.toggle('line_1');
  line2.classList.toggle('line_2');
  line3.classList.toggle('line_3');
  nav.classList.toggle('in');
};

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click',() => {
  hamburgerOpen();
});
/*--------------------------------ここまでハンバーガーメニュー------------------------------------------- */


/*-------------------------------ここから「view more」を見ると現れるボタン---------------------------------------------*/
$(function(){
  $('.more-view').prevAll().hide();
  $('.more-view').click(function(){
    if($(this).prevAll().is(':hidden')){
      $(this).prevAll().slideDown();
      $('.more-view').hide();
      $('.section-title').show();
    }
  })
}); 
/*---------------------------------ここまで「view more」------------------------------------------------*/





