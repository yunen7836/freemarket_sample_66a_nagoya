$(function(){

var page=0;

var lastPage =parseInt($(".slide__img").length-1);

     $(".slide__img").css("display","none");

          $(".slide__img").eq(page).css("display","block");


function changePage(){
                         $(".slide__img").fadeOut(500);
                         $(".slide__img").eq(page).fadeIn(200);
};

var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },1500);
}
function stopTimer(){
clearInterval(Timer);
}

startTimer();


});