var deviceSize = function(){
	var resultDevice;
	(function($){
		var win = $(window);
		var winW = win.width(); //사이즈 변경 이전의 가로값
		var beforWinW = win.outerWidth(true);
		var deviceCheck = function(winW){
		var myType;
		var deviceType = [
			{type:'mobile',size:480},
			{type:'table',size:1024},
			{type:'laptop',size:1440},
			{type:'pc',size:1920},
			{type:'pcfull'}
		]
		for(var i=0; i < deviceType.length; i+=1){
			if(winW <= deviceType[i].size){
				myType = deviceType[i].type;
				break;
			}else{
				myType = deviceType[deviceType.length-1].type;
			}
		}
		console.log(myType);
		return(myType);
	}; //deviceCheck();
	var winSize = deviceCheck(beforWinW);
	resultDevice = winSize
	// --------------------
		win.on('resize', function(){
			var reWinW = win.outerWidth(true);
			var afterWinSize = deviceCheck(reWinW);
			console.log(reWinW);
			if(winSize !== afterWinSize){
				window.location.reload();
			}
		});
	return resultDevice;
	// jQuery End
	})(jQuery);
	return resultDevice;
	}
	