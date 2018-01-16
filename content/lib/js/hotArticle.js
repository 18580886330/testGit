/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */
require(['lib/js/newsServices'],function(newsService){
	require(['lib/js/fixedNav']);
	!function(){
		return {
			/**
			 * 热门文章
			 */
			hotArticle:function(){
				this.randuHotArticle();
				var hotArticelList = $('#hotArticelList');
				var sHtml = '';
				var reqParam = {
					type: '',
					pageSize: 9,
					curPage: 1
				}
				newsService.hotArticle(reqParam).
				success(function(data){
					if(!data.success){ return; }
					var dataList = data.data;
					for (var i = 0; i < dataList.length; i++) {
						sHtml+='<li class="list">\
							<a href="newsDetails.html?id='+dataList[i].id+'&type=marketReport" class="name">\
								<div class="img"><img src="'+dataList[i].imageUrl+'" alt=""></div>\
								<p class="article-name">'+dataList[i].title+'</p>\
							</a>\
						</li>';
					};
					hotArticelList.html(sHtml);
				}).error(function(e){});
			},
			/**
			 * 渲染热门文章结构
			 */
			randuHotArticle: function(){
				var sHtml = '<div class="hot-article">\
					<h4 class="article-title">热门文章</h4>\
					<ul id="hotArticelList" class="list-unstyled hot-article-list">\
						<li class="list">\
							<a href="javascript:;" class="name">\
								<div class="img"><img src="" alt=""></div>\
								<p class="article-name"></p>\
							</a>\
						</li>\
					</ul>\
				</div>';
				$('#hotArticel').html(sHtml);
			}
		}
	}().hotArticle();
});
