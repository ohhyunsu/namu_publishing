// rwd_menu_mobile.js

(function($){

	var headBox = $('#headBox');
	var menuBtn = headBox.find('.menu_btn');
	var gnb = headBox.find('.gnb');

	menuBtn.on('click',['button'],function(e){
		e.preventDefault();

		// gnb.stop().fadeToggle();
		// 똑같은 기능을 구분해서 작성
	var gnbStatus =	gnb.css('display');
	if(gnbStatus === 'none'){
		gnb.stop().slideDown();
		menuBtn.addClass('on');
	}else{
		gnb.stop().slideUp();
		menuBtn.removeClass('on');
	}

	});

})(jQuery);
