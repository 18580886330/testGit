/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */
require(['third/jquery/jquery-1.8.2.min','main','lib/js/page.min'],function(){
	!function(){
		
		return {
			init:function(){
				this.loadTab();
			},
			loadTab:function(){
				yf.tab({
					tabId: 'dataTabHd',
					contents: 'dataTabBd'
				});
				var id=window.location.href.split("=")[1];
				if(id){
					$("#dataTabHd>li").eq(id-1).addClass("active").siblings().removeClass("active");
					$("#dataTabBd>.panel").eq(id-1).show().siblings().hide();
				}
			}
		}
	}().init();

});
