$(function(){
  $("#item_price").keyup(function(){
    var price = $("#item_price").val()
    var commission = Math.floor(price / 1/10)
    var profit = price - commission
    if(price >= 300){
      $(".item-show__sell-price--tax-box--commission").text(commission)
      $("#item-profit").text(profit)
    }else{
      $(".item-show__sell-price--tax-box--commission").text("－")
      $("#item-profit").text("－")
    }
  })
})