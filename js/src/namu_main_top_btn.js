// namu_main_top_btn.js

(function($){
	// jQuery start
	
	var win = $(window);
	var headBox = $('#headBox');
	var topBtn = $('.top_move_btn');
	var nav = $('#navBox')
	var navBtn = nav.find('li')
	var headOffset = headBox.offset().top;
	
	topBtn.hide();
	
	win.on('scroll', function(e){
		var winSt = win.scrollTop();
		(winSt >= headOffset) ? 
		headBox.css({'position':'fixed','top':0,'zIndex':1500}) : 
		headBox.removeAttr('style');
		(winSt >= 500) ? topBtn.stop().fadeIn(): topBtn.stop().fadeOut();
	});
	
	var liscrollMove = function(e){
		e.preventDefault();
		var it = $(this).find('a');
		var itAttr = it.attr("href");
		var itOffset = $(itAttr).offset().top; 
		$('html, body').animate({scrollTop:itOffset});
	}
	
	var btnCollection = [topBtn,navBtn]
	$.each(btnCollection, function(i, btn){
		btn.on('click',['a'],liscrollMove);
	});
	
	// jQuery End
	})(jQuery);
	