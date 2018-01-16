/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */


require(['../content/third/jquery/jquery-1.8.2.min'],function(){
	~(function(){
		var ul=$("#dataapiPartners").find('ul');
		var x=0;
		var ulWidth=$(ul).eq(0).width();
		var scrollLoop = function(){
			$(ul).eq(0).css('left',-x+'px');
			$(ul).eq(1).css('left',(ulWidth-x)+'px');
	   		x++;
		    if((ulWidth-x) == 0){
		    	x = 0;
		    }
	  	}
	  	var timer = setInterval(scrollLoop, 50);
		$(ul).mouseover(function () {
			clearInterval(timer);
		});
		$(ul).mouseleave(function() {
			timer = setInterval(scrollLoop, 50);
		});
	})();	
});