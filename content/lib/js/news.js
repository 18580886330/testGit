/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-16 10:35:23
 * @version $Id$
 */
require(['lib/js/newsServices','lib/js/page.min'],function(newsService){
	require(['lib/js/hotArticle','lib/js/search']);
	!function(){
		var itemsPerPage = 10;             // 每页的数量
		var articleType = '云房监测';      // 文章类别
		var articleTypeEn = yf.dom.getParameterByName("type"); // 文章类别验证
		if(articleTypeEn==null){
			articleTypeEn='marketReport';
		}else{
			setTimeout(function(){
				$("body").scrollTop(650);
			},200);
			
		}
		var _index;
		if(articleTypeEn=="marketReport"){
			articleType = '云房监测';
			_index=0;
		}else if(articleTypeEn=="yfSpecial"){
			articleType = '云房百科';
			_index=1;
		}else if(articleTypeEn=="yfExponent"){
			articleType = '市场分析';
			_index=2;
		}else if(articleTypeEn=="yfViewpoint"){
			articleType = '专题研究';
			_index=3;
		}
		return {
			init:function(){
				this.newsTop();
				this.loadTab();
				this.setTabIndex(_index);
				yf.qiaoBaidu();
			},
			loadTab:function(){
				var _this = this;
				yf.tab({
					tabId: 'newsTabHd',
					contents: 'newsTabBd',
					callBack: function() {
						if(this.index==0){
							if(this.eventType=='click'){
								articleTypeEn = 'marketReport';
								articleType = '云房监测';
							}
						}else if(this.index==1){
							articleType = '云房百科';
							articleTypeEn = 'yfSpecial';
						}else if(this.index==2){
							articleType = '市场分析';
							articleTypeEn = 'yfExponent';
						}else if(this.index==3){
							articleType = '专题研究';
							articleTypeEn = 'yfViewpoint';
						}
						_this.newsTypes(articleType,1,itemsPerPage);
					}
				});
			},
			newsTop:function(){
				var oTopContent = $('#newsTopContent');
				newsService.topArticle().
				success(function(data){
					if(!data.success){ return; }
			    	var dataList = data.data;
					var sHtml = '';
					var data = null;
					for (var i = 0; i < dataList.length; i++) {
						data = dataList[i];
						if(i==0){
							sHtml+='<li class="big-recommend pull-left">\
								<a href="newsDetails.html?id='+data.id+'&type=marketReport" target="_blank"><div class="img"><img src="'+data.imageUrl+'" alt=""></div>\
									<p class="name">'+data.title+'</p></a>\
							</li>';
						}else{
							sHtml+='<li class="small-recommend pull-right">\
								<a href="newsDetails.html?id='+data.id+'&type=marketReport" target="_blank"><div class="img"><img src="'+data.imageUrl+'" alt=""></div>\
									<p class="name">'+data.title+'</p></a>\
							</li>';
						}
					};
					oTopContent.html(sHtml);
				}).error(function(data){});
			},
			/**
			 * 新闻文章类型请求
			 * @param  {[type]} type     [栏目类型]
			 * @param  {[type]} curPage  [当前页]
			 * @param  {[type]} pageSize [每次请求的数量]
			 */
			newsTypes:function(type,curPage,pageSize){
				var _this = this;
				var reqParam = {
					type: type,
					pageSize: pageSize,
					curPage: curPage
				}
				var sHtml = '';
				newsService.articleTypes(reqParam).
				success(function(data){
					if(!data.success){ return; }
			    	var dataList = data.data;
			    	for (var i = 0; i < dataList.length; i++) {
				    	sHtml+='<li class="list clearfix">\
							<div class="img"><a href="newsDetails.html?id='+dataList[i].id+'&type='+articleTypeEn+'" target="_blank"><img alt="'+dataList[i].title+'" src="'+dataList[i].imageUrl+'"></a></div>\
							<div class="info">\
								<a class="article-name" title="'+dataList[i].title+'" href="newsDetails.html?id='+dataList[i].id+'&type='+articleTypeEn+'" target="_blank">'+dataList[i].title+'</a>\
								<p class="article-text">'+dataList[i].abstract+'</p>\
								<p class="article-origin">'+dataList[i].releaseTime+'   来源:'+dataList[i].sourceName+'</p>\
							</div>\
						</li>';
					};
					switch(articleTypeEn){
						case 'marketReport':
							$('#marketReport').html(sHtml);
						break;
						case 'yfSpecial':
							$('#yfSpecial').html(sHtml);
						break;
						case 'yfExponent':
							$('#yfExponent').html(sHtml);
						break;
						case 'yfViewpoint':
							$('#yfViewpoint').html(sHtml);
						break;
					};
					_this.runDrawPage(data);
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
			        	_this.newsTypes(articleType,this.currentPage,this.itemsPerPage);
			        	setTimeout(function(){
			        		$(window).scrollTop($('#newsTabHd').offset().top-10);
			        	},10);
			        }
			    });
			},
			setTabIndex:function(index){
				$("#newsTabHd").find("li").removeClass("active").eq(index).addClass("active");
				$("#newsTabBd").children("div").css("display","none").eq(index).css("display","block");
			}
		}
	}().init();

});
