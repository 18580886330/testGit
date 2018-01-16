require(['third/jquery/jquery-1.8.2.min'],function(){
	~function(){
		
		return {
			init:function(){
			
				this.appScenarios();
			},
			
			/**
			 * 产品应用
			 */
			appScenarios:function(){
				var chanpinyingyong = $("#chanpinyingyong");
				var childs = chanpinyingyong.find('.layer');
				childs.each(function(idx,elm){
					$(elm).hover(function(){
						$(this).addClass('slide-up');
					},function(){
						$(this).removeClass('slide-up');
					});
				});
			}
		}
	}().init();
});
