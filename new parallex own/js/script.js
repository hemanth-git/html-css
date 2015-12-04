(function(){
	var documentEl=$('document');
	var parallaxBg=$('.bg-back');

	parallaxBg.on('scroll',function(){
		var currScrollPos=documentEl.scrollTop();
		parallaxBg.css('background-position','0'+ -currScrollPos/4 + 'px');
		displayEffect1CSS=$('.display-effect1');
	});
});