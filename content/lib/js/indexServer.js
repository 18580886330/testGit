define(['third/jquery/jquery-1.8.2.min'], function() {
	var baseUrl='http://shiyan.yunfangdata.com/';
	// 新闻动态
	var newsDynamic = function() {
		return $.ajax({
			type:'get',
			dataType: 'jsonp',
			url: baseUrl+'/shiyan/webservices/getArticleListByType?type=新闻动态&pageSize=1&curPage=1',
		});
	}

	// 研究中心
	var hotarticle = function() {
		return $.ajax({
			type:'get',
			dataType: 'jsonp',
			url: baseUrl+'/shiyan/webservices/getHotArticleListByType?pageSize=5&curPage=1',
		});
	}

	// 媒体报道
	var mediaReport = function() {
		return $.ajax({
			type:'get',
			dataType: 'jsonp',
			url: baseUrl+'/shiyan/webservices/getArticleListByType?type=云房观点&pageSize=5&curPage=1',
		});
	}
	// 首页轮播图
	var slidePro = function() {
		return $.ajax({
			type:'get',
			dataType: 'json',
			url: '/api/offcialWebsite/manage/getLBT',
		});
	}

	return {
		newsDynamic: function() {
			return newsDynamic();
		},
		hotarticle: function() {
			return hotarticle();
		},
		mediaReport: function() {
			return mediaReport();
		},
		slidePro: function() {
			return slidePro();
		}
	}
});