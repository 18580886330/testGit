require(['third/jquery/jquery-1.8.2.min','main'],function(){
	
	~(function(){
		yf.startScrollScreen($('.secondpage-content'));
		yf.startScrollScreen($('.secondpage-banner'));
		require(['lib/js/fixedNav']);
		yf.qiaoBaidu();
	})();

});
