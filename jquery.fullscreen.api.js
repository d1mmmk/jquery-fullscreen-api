(function($,window){
	var fullscreenchange = false;
	function fullsScreenChange(){
		fullscreenchange = !fullscreenchange;
		$(window).trigger('fullscreenchange',fullscreenchange);
	}
	window.document.onfullscreenchange = fullsScreenChange;
	window.document.onmozfullscreenchange = fullsScreenChange;
	window.document.onwebkitfullscreenchange = fullsScreenChange;
	$.fullscreen = function(element){
		if(element.requestFullScreen) {
			element.requestFullScreen();
		} else if(element.webkitRequestFullScreen ) {
			element.webkitRequestFullScreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} 
	};
	$.fn.fullscreen = function(){
		$.fullscreen($(this)[0]);
	};
	$.fn.fullscreentoggle = function(){
		if ($._isfullscreen()){
			$.fullscreencancel();
		}else{
			$.fullscreen($(this)[0]);
		}
	};
	$.fullscreencancel = function(){
		if(document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};
 
	$._isfullscreen = function(){
		return fullscreenchange;
	};
	$._checkfullscreen = function(){
		var element = window.document.createElement('div');
		return !!element.requestFullScreen || !!element.webkitRequestFullScreen || !!element.mozRequestFullScreen;
	};
 
})(jQuery,window);

