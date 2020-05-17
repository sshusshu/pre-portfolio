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
			centerPadding: '25%',
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '15%',
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


	 //스타일팁
      const box = $('.video_right'),
	  video = Math.floor($('.video').offset().top);
	 
	  $(window).scroll(function(){
	  var wScroll = $(window).scrollTop();
		  if(wScroll >= video-6800){
			box.addClass('active')
		  }else{
			box.removeClass('active')
		  }
			console.log(video,wScroll)
	  })