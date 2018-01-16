/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */
require(['lib/js/newsServices'],function(newsService){
	require(['lib/js/fixedNav','lib/js/hotArticle']);
	
		var oDetailContent = $('#detailContent');
		var oDetailHead = oDetailContent.find('.detail-head');
		var oDetailCon = oDetailContent.find('.detail-content');
		var oDetailTitle = $('#detailTitle');
		var oDetailFooter=$('#articleFooter');
		var oNewsUrl=$('#newsUrl');
		oNewsUrl.attr('href','news.html?type='+yf.dom.getParameterByName("type"));
		

		
			function articleDetail(){
				var reqParam = {
					id: yf.dom.getParameterByName('id')
				}
				newsService.articleDetail(reqParam).
				success(function(data){
					if(!data.success){
						// 请求失败
						return;
					}
					var dataList = data.data;
					oDetailHead.html('<h2 class="article-title">'+dataList.title+'</h2>\
					<p class="article-origin"><span>'+dataList.releaseTime+'</span> <span>来源:'+dataList.sourceName+'</span> <span>阅读'+dataList.clickRate+'</span></p>\
					<span class="artigle-tag">'+dataList.type+'</span>');
					oDetailCon.html(yf.dom.htmlDecode(dataList.cont));
					oDetailTitle.html(dataList.title);
					var footerHtml='';
                   	footerHtml+='<div class="read-email fl"><span class="fl">阅读('+dataList.clickRate+')</span><span class="m20 fl">反馈邮箱：MarketResearch@yunfangdata.com</span></div>'
			        if(data.ifEvaluate){
			        	footerHtml+='<div class="good-con fr">';
			        }else{
			        	footerHtml+='<div class="good-con fr disabled">';
			        }
				    footerHtml+='<a data-type="bad" id="btnTucao" class="g-btn bad">\
					<b class="icon"></b><span id="tucaoNum">'+dataList.tucao+'</span></a>\
				    <a data-type="good" id="btnZan" class="g-btn good"><b class="icon"></b><span id="zanNum">'+dataList.zan+'</span></a>\
			        </div>';
			        oDetailFooter.html(footerHtml);
				}).error(function(e){});
			}
		   function	article(){
				$(oDetailFooter).find('a').live('click', function() {
					if($(".disabled").length==1){
						return;
					}
					var index=$(this).index();
					var type='zan';
					if(index==0){
						type='tucao';
					}
					var reqParam = {
						id: yf.dom.getParameterByName('id'),
						type:type
					}
					newsService.evaluateArticle(reqParam,type).
					success(function(data){
						if(!data.success){
							// 请求失败
							return;
						}
						$("#zanNum").html(data.zan);
						$("#tucaoNum").html(data.tucao);
						$(".good-con").addClass("disabled");

					}).error(function(e){});
				});
			}
	$(function(){
		articleDetail();
		article();
		yf.qiaoBaidu();
	});
});