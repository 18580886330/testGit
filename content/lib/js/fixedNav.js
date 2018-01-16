define(['lib/js/data','third/jquery/jquery-1.8.2.min','main'],function(data){
	/**
	 * 悬浮挂件
	 */
	!function(){
		yf.loadFixNav();
    	return {
    		init:function(){
				var _this = this;
				var timer = null;
				var fixNav = $('#fixedNav');
				var childs = fixNav.children('.item');
				var top = childs.eq(childs.length-1);
				top.hide();
				top.click(function(){
					$('body,html').stop(true,false).animate({
		    			scrollTop: 0
					}, 200, function(){
						top.hide();
					});
				});

				$(document).scroll(function(){
					if($(document).scrollTop()<=100){
						top.hide();
					}else{
						top.show();
					}
				});

				yf.menuDown({node: fixNav.find('.link'),showNode: fixNav.find('.link').next('.child-ul')});
				/*活动*/
				if($(".closebtn").length){					
					$(".closebtn").on('click',function(){
						$(".mask").hide()
					})
				}
			}
    	}
	}().init();
});