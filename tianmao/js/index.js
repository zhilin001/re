//$('.right').eq(0).show();
		$('.div3 li').mouseenter(function(){
			$(this).find('.right').show();
			$('.right').not($(this).find('.right')).hide();
		});
		$('.div3 li').mouseleave(function(){
			$(this).find('.right').hide();
			
});

