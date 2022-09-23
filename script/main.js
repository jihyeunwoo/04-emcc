$(function() {
   // $ : 찾아라
   // click(function(){....}) : 클릭하면 실행되는 메소드
   // 
   $("#open").click(function() {
      $(".item-detail").removeClass("d-none");   //.removeClass() : 클래스 선택자 제거 메소드 ↔ .addClass()
      //$(".item-detail").show("slow");   //ex> 300
   })
   $("#close").click(function() {
      $(".item-detail").addClass("d-none");   //.addClass() : 클래스 선택자 추가 메소드 ↔ .removeClass()
      //$(".item-detail").hide("fast");
   })
})