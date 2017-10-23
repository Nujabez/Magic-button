$(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).position().left;
		var dis = ($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l = pos - dis;
		$('.tip').css({"left":l+'px'}).stop(false,true).animate({'top':145,'opacity':1},500);
	},function(){
			$('.tip').stop().animate({'top':100,'opacity':0},500);
	})
})
