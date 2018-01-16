$(function(){
	var type=$("#type").val();
	var typeNum;
	if (type == "001") {
		typeNum = 0;
	} else if (type == "002") {
		typeNum = 1;
	} else if (type == "003") {
		typeNum = 2;
	} else if (type == "004") {
		typeNum = 3;
	}
	$("#newsTabHds").find("li").removeClass("active").eq(typeNum).addClass("active");
	$("#newsTabBds").children("div").css("display", "none").eq(typeNum).css("display", "block")
	changePage(type);
	$("#newsTabHds").find("li").click(function() {
		var type=$(this).attr("class");
		var typeNum;
		if (type == "001") {
			typeNum = 0;
		} else if (type == "002") {
			typeNum = 1;
		} else if (type == "003") {
			typeNum = 2;
		} else if (type == "004") {
			typeNum = 3;
		}
		$("#newsTabHds").find("li").removeClass("active").eq(typeNum).addClass("active");
		$("#newsTabBds").children("div").css("display", "none").eq(typeNum).css("display", "block")
		changePage(type);
	});
	$(".search-btn").click(function() {
		var type=$("#type").val();
		var info=$(".engine-input");
		if (info.val() == "") {
			return info.attr("placeholder", "输点内容再搜索吧~")
		}
		window.open("/news_search_"+type+"_"+info.val()+".html")
	});
	$(".engine-input").focus(function() {
		if ($(".engine-input").attr("placeholder") == "输点内容再搜索吧~") {
			return $(".engine-input").attr("placeholder", "请输入关键字")
		}
	})
});
var changePage = function(type) {
	var curPage = $("#"+type+"Page").val();
	var totalRow = $("#"+type+"Total").val();
	drawPage("pageContent", {
		currentPage : curPage,
		totalItems : totalRow,
		itemsPerPage : 10,
		pagesLength : 9,
		onChange : function() {
			//调用接口
			$.ajax({
				type: 'get',
				url: '/news/changePage/'+type+'/'+this.currentPage,
				dataType: 'json',
		        async: false,
				success : function(data) {
					var html="";
					datas=data.data;
					for (var i = 0; i < datas.length; i++) {
						html += '<li class="list clearfix"><div class="img">'+
							'<a href="/news_'+type+'_'+datas[i].id+'.html" target="_blank">'+
							'<img alt="'+datas[i].title+'" src="'+datas[i].imageUrl+'">'+
							'</a></div><div class="info">'+
							'<a class="article-name" title="'+datas[i].title+'" href="/news_'+type+'_'+datas[i].id+'.html" target="_blank">'
							+datas[i].title+'</a><p class="article-text">'+datas[i].abstract+'</p><p class="article-origin">'+
							datas[i].releaseTime+'来源:'+datas[i].sourceName+'</p></div></li>';
					}
					$("#"+type).html(html);
					setTimeout(function() {
						$(window).scrollTop(
								$("#newsTabHds").offset().top - 10)
					}, 10)
				}
			});
		}
	})
}