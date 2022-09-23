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
   
   // 1. samll-img에 마우스가 (하나하나 이미지에) 올려지면 (=닿으면, 클릭하면, 드래그...)
   // 2. big-img 에 이미지가("id="img1") 업데이트 된다.
   const smallIMG = $(".small-img li");
   const img1  = $("#img1");
   $(smallIMG[0]).mouseenter(function(){
		img1.attr("src","https:picsum.photos/id/5/2000/2000");	
	})
   $(smallIMG[1]).mouseenter(function(){
		img1.attr("src","https:picsum.photos/id/555/2000/2000");	
	})
   $(smallIMG[2]).mouseenter(function(){
		img1.attr("src","https:picsum.photos/id/111/2000/2000");	
	})
})