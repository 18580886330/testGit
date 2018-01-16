$(function(){
	var type=$("#type").val();
	var search=$(".search-btn");
	var engine=$(".engine-input");
	search.click(function() {
		if (engine.val() == "") {
			return engine.attr("placeholder", "输点内容再搜索吧~")
		}
		window.open("/news_search_"+type+"_"+engine.val()+".html")
	});
	engine.focus(function() {
		if (engine.attr("placeholder") == "输点内容再搜索吧~") {
			return engine.attr("placeholder", "请输入关键字")
		}
	})
	searchPage(engine.val());
})
var searchPage = function(keywords) {
	var curPage = $("#searchPage").val();
	var totalRow = $("#searchTotal").val();
	drawPage("pageContent", {
		currentPage : curPage,
		totalItems : totalRow,
		itemsPerPage : 15,
		pagesLength : 9,
		onChange : function() {
			//调用接口
			$.ajax({
				type: 'get',
				url: '/news/searchPage/'+keywords+'/'+this.currentPage,
				dataType: 'json',
		        async: false,
				success : function(data) {
					var html="";
					datas=data.data;
					var type=$("#type").val();
					for (var i = 0; i < datas.length; i++) {
						html += '<li class="list clearfix"><div class="info"><a class="article-name" href="/news_'+type+'_'+datas[i].id+'.html" target="_blank">'
								+ datas[i].title +'</a><p class="article-text">'
								+ datas[i].abstract.replace(keywords,'<strong style="font-size:16px;">'+keywords+ "</strong>")
								+ '</p><p class="article-origin">'
								+ datas[i].releaseTime + '   来源:' + datas[i].sourceName
								+ '</p></div></li>';
					}
					$("#articleSearchList").html(html);
				}
			});
			setTimeout(function() {
				$(window).scrollTop(0)
			}, 10)
		}
	})
}