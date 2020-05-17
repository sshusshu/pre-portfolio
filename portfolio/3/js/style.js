/*$(window).scroll(function(){
	
	const wScroll=$(this).scrollTop(),
	index = $('[id^="sec"]').eq(),	
	secTop = .offset().top;

	console.log(wScroll);
	if(wScroll>=100){
	
	}else if(wScroll>=1100){
		$('html,body').animate({'scrollTop':2000},1000)
	}
})*/

//스크롤 했을때 이벤트가 일어나고 다음 섹션으로 넘어간다. (원 위치)
$(window).scroll(function(){// 스크롤 했을때
// 이벤트가 일어나고 
//if(스크롤탑 >= ){addClass('.on')} 반복

var wScroll=$(this).scrollTop();
var wHeight = $(window).height();
var secEq = $('[id^="sec"]').eq();
var index = Math.ceil(wScroll/wHeight);
for (var i = 0 ; i<7 ; i++ ){
       if(wScroll>= wHeight*(index-1)){
		$('html,body').animate({'scrollTop':wHeight*index},1000);
		}
		console.log(index)
}


})


// 스크롤 탑값이 +section.height 반복
// removeClass('.on')
