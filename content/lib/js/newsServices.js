define(['third/jquery/jquery-1.8.2.min'], function() {
	/**
	 * 前三篇文章
	 */
	var topArticle = function(form) {
		var param = {
			pageSize: 3,
			curPage: 1
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/getTop3ArticleListByType',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	/**
	 * 文章类型
	 */
	var articleTypes = function(form) {
		var param = {
			type: form.type,
			pageSize: form.pageSize,
			curPage: form.curPage
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/getArticleListByType',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	/**
	 * 热门文章
	 */
	var hotArticle = function(form) {
		var param = {
			type: form.type,
			pageSize: form.pageSize,
			curPage: form.curPage
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/getHotArticleListByType',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	/**
	 * 文章详情
	 */
	var articleDetail = function(form) {
		var param = {
			id: form.id
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/getArticleDetailsById',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	/**
	 * 文章搜索
	 */
	var searchArticle = function(form) {
		var param = {
			curPage: form.curPage,
			pageSize: form.pageSize,
			keyWord: form.keyWord
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/getArticleListByKeyWord',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	/**
	 * 点赞，吐槽
	 */
	var evaluateArticle = function(form) {
		var param = {
			id: form.id,
			type: form.type
		}
		return $.ajax({
			type: 'get',
			url: 'http://shiyan.yunfangdata.com/webservices/evaluateArticleById',
			data: param,
			//async: false,
			dataType: 'jsonp'
		});
	}

	return {
		topArticle: function(form) {
			return topArticle(form);
		},
		articleTypes: function(form) {
			return articleTypes(form);
		},
		hotArticle: function(form) {
			return hotArticle(form);
		},
		articleDetail: function(form) {
			return articleDetail(form);
		},
		searchArticle: function(form) {
			return searchArticle(form);
		},
		evaluateArticle: function(form) {
			return evaluateArticle(form);
		}
	}
});