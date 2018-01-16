/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */

require(['../content/third/jquery/jquery-1.8.2.min'],function(){
	~(function(){
		/*$(".mainList").live('click', function() {
			if($(this).parent("li").hasClass('on')){
				$(this).parent("li").removeClass('on').children('.subMenu').slideUp();
			}else{
				$("li[class='on']").removeClass("on").children(".subMenu").slideUp();
				$(this).parent("li").addClass('on').children('.subMenu').slideDown();
			}
		});*/
		setTimeout(function(){
			yf.tab({
				tabId: 'apiDetailHd',
				contents: 'apiDetailBd',
				callBack: function() {

				}
			});

			(function(){
				var aDpanel = $('#apiDetailBd').children();
				$.ajax({
					type: 'post',
					data: {
						id: yf.getParam('id')
					},
					url: '/api/offcialWebsite/apiManage/getAll',
					success: function(data){
						console.log(data)
						var data = data.data;
						aDpanel.eq(0).html(data.InterfaceDescription || '暂无数据');
						aDpanel.eq(1).html(data.parameterDescription || '暂无数据');
						aDpanel.eq(2).html(data.errorCodeReference || '暂无数据');

						dataApiInfo(data);
					},
					error:function(e){}
				});

			})();

		},100);

		/**
		 * 数据信息
		 */
		function dataApiInfo(data) {
			var oDataInfoHd = $('#datainfo-hd');
			$('.crumbs').append('<span>'+data.apiName+'</span>')
			var sHtml = '<div class="fl title">\
                <span><img src="'+data.pageUrl+'" alt=""></span>\
            </div>\
            <div class="fl introduce">\
                <h3>'+data.apiName+'</h3>\
                <p class="art">'+data.interAbstract+'</p>\
                <p class="art">接口类别：'+data.apiType+'</p>\
                <p class="apply">申请试用：<span>010-60845501</span></p>\
            </div>';
            oDataInfoHd.html(sHtml);
		}

		
	})();
});