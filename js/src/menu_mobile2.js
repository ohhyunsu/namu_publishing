(function($){
	var winSize =  deviceSize();
var deviceType = [
	'mobile',
	'table',
	'laptop',
	'pc',
	'pcfull'
]

var menuBtn = $('.menu_btn')
var headBox = $('#headBox')
console.log( winSize );

if(winSize ===deviceType[0] || 'mobile' || winSize === 'tablet'){
	headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>')
}else{
	menuBtn.remove();
}

})(jQuery);
