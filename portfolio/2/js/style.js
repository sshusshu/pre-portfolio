	  // 헤더 고정
	  var header = $('#header')
	  $(window).scroll(function(){
		 var wScroll = $(this).scrollTop();
		if(wScroll>10){
			header.addClass('on')
		}else{
			header.removeClass('on')
		}
	  })


	//메인배너 슬라이더
		$(document).ready(function(){
		  $('.slider').slick({
			autoplay: true,
			autoplaySpeed: 3000
		  });
		});


	//메인배너 모바일 슬라이더
		$(document).ready(function(){
		  $('.mSlider').slick({
			autoplay: true,
			autoplaySpeed: 3000
		  });
		});


	//카테고리별 베스트
		var cate_tit = $('.cate_tit ul li'),
		chart = $('.best_chart ul');

		cate_tit.click(function(e){
			e.preventDefault();
			var index= $(this).index();
			chart.removeClass('active');
			chart.eq(index).addClass('active');	
			cate_tit.removeClass('active');
			$(this).addClass('active')
		;
		})

	 
	//이벤트 슬라이드
	 
		  $('.event_slider').slick({
			centerMode: true,
			centerPadding: '25%',
			slidesToShow: 1,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '20%',
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '10%',
			slidesToShow: 1
		  }
		}
		]
	
		});
     

	 //헬프박스
	 const h3 = $('.help_box1 .btn'),
	 notice = $('.help_box1 > ul');

	 h3.click(function(e){
		e.preventDefault();
			var index = $(this).index();
			h3.removeClass('active');
			h3.eq(index/2).addClass('active');
			notice.removeClass('active');
			notice.eq(index/2).addClass('active');
	 })


	


	//모바일 네비게이션
	const mNav = $('.header .mNav');
	mNav.click(function(e){
		e.preventDefault();
	$('.header .nav').fadeToggle()
	})

	$(window).resize(function(){
		var wWidth= $(this).width();
		//화면크기가 800이상일때 style="display:none;"삭제
		if(wWidth >600 && $(".nav").is(":hidden")){
			$(".nav").removeAttr("style")
		}
	})