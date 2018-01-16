/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-17 10:52:36
 * @version $Id$
 */
require(['lib/js/newsServices','lib/js/page.min'], function(newsService) {
	require(['lib/js/hotArticle']);

	!(function(){
		var searchArticle = $('#searchArticle');
		var oInput = searchArticle.find('.engine-input');
		var oBtn = searchArticle.find('.search-btn');
		var itemsPerPage = 10;             // 每页的数量

		return {
			init:function(){
				this.searchArticle();
				this.drawingArticleList(1,15);
				yf.qiaoBaidu();
			},
			searchArticle:function(){
				oInput.val(yf.dom.getParameterByName('keywords'));
				oBtn.click(function(){
					if(oInput.val()==''){
						return oInput.attr('placeholder','输点内容再搜索吧~');
					}
					window.open('./searchResult.html?keywords='+oInput.val());
				});
				oInput.focus(function(){
					if(oInput.attr('placeholder')=='输点内容再搜索吧~'){
						return oInput.attr('placeholder','请输入关键字');
					}
				});
			},
			/**
			 * 渲染文章数据列表
			 */
			drawingArticleList:function(curPage,pageSize){
				if(oInput.val()==''){
					return;
				}
				var oArticleList = $('#articleSearchList');
				var sHtml = '';
				var _this = this;
				var reqParam = {
					curPage: curPage,
					pageSize: pageSize,
					keyWord: oInput.val()
				}
				newsService.searchArticle(reqParam).
				success(function(data){
					if(!data.success || !data.data.length){
						// 请求失败
						return;
					}
					var dataList = data.data;
					for (var i = 0; i < dataList.length; i++) {
						sHtml += '<li class="list clearfix">\
							<div class="info">\
							<a class="article-name" href="newsDetails.html?id='+dataList[i].id+'" target="_blank">'+dataList[i].title+'</a>\
								<p class="article-text">'+dataList[i].abstract.replace(oInput.val(),'<strong style="font-size:16px;">'+oInput.val()+'</strong>')+'</p>\
								<p class="article-origin">'+dataList[i].releaseTime+'   来源:'+dataList[i].sourceName+'</p>\
							</div>\
						</li>';
					};
					oArticleList.html(sHtml);
					_this.runDrawPage(data);
					setTimeout(function(){
		        		$(window).scrollTop(0);
		        	},10);
				}).error(function(e){});
			},
			runDrawPage:function(data){
				var _this = this;
				/**
				 * 属性配置:
				 * currentPage: 当前页,默认为1
				 * totalItems: 数据总数
				 * itemsPerPage: 每页的数量,默认15
				 * pagesLength: 分页大小数量,默认9
				 * onChange: 回调函数
				 */
			    drawPage('pageContent',{
			        currentPage: data.curPage,
			        totalItems: data.totalRow,
			        itemsPerPage: itemsPerPage,
			        pagesLength: 9,
			        onChange: function(data) {
			        	_this.drawingArticleList(this.currentPage,this.itemsPerPage);
			        }
			    });

			    var oSearchHint = $('#searchHint');
			    var keywords = oSearchHint.find('.keywords');
				var wampKeywords = oSearchHint.find('.wamp-keywords');
				var count = oSearchHint.find('.count');

				keywords.html(oInput.val());
				wampKeywords.html(oInput.val());
				count.html(data.totalRow);
			}
		}
	})().init();


});