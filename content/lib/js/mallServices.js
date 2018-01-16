define(['third/jquery/jquery-1.8.2.min'], function() {
	var baseUrl='http://www.yunfangdata.com';
	//数据类型接口 大类型
	var dataObj = function () {
		return $.ajax({
			type:'post',
			//url: baseUrl+'/mall/getCategoryList',
			url: '/api/offcialWebsite/mall/getCategoryList',
		});
	}
	var getProvince = function () {
		return $.ajax({
			type:'post',
			url:baseUrl+'/mall/getProvinceList',
		})
	}
	var getCity = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			url:baseUrl+'/mall/getCityList',
		})
	}
	var getProductList = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			/*dataType:'jsonp',
			contentType:'application/json',*/
			url:baseUrl+'/mall/getProductList'
			//url: '/api/offcialWebsite/mall/getProductList'
		})
	}
	//根据ID获取商品详情
	var getProductById  = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			url:baseUrl+'/mall/getProductById'
		})
	}
	//获取热门数据
	var getHotProductList  = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			url:baseUrl+'/mall/getHotProductList'
		})
	}
	//获取推荐商品列表
	var getRecommendProductList  = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			url:baseUrl+'/mall/getRecommendProductList'
		})
	}
	//需求定制提交
	var purchaseApply = function (form) {
		return $.ajax({
			type:'post',
			data:form,
			url:baseUrl+'/mall/purchaseApply'
		})
	}
	// 数据api列表
	var apiProductList = function(form) {
		return $.ajax({
			type: 'post',
			data: form,
			url: '/api/offcialWebsite/apiManage/selectApiTypeList'
		});
	}
	return {
		dataObj: function () {
			return dataObj();
		},
		getProvince:function () {
			return getProvince();
		},
		getCity:function (form) {
			return getCity(form);
		},
		getProductList:function(form){
			return getProductList(form);
		},
		getProductById:function(form){
			return getProductById(form);
		},
		getHotProductList:function(form){
			return getHotProductList(form);
		},
		getRecommendProductList:function(form){
			return getRecommendProductList(form);
		},
		purchaseApply:function(form){
			return purchaseApply(form);
		},
		apiProductList: function(form) {
			return apiProductList(form);
		}
	}
});