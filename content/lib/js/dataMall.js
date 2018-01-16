require(['lib/js/mallServices','third/jquery/jquery-1.8.2.min','lib/js/page.min'],function(mallservice){
	//数据筛选
	!function(){
		return{
			init:function(){
				this.dataMallType = sessionStorage.getItem('datamallType') || '0';

				this.dataObj();
				this.filterData();
				this.clickPurchase();
				this.getProvince();
				this.tabFn();
				if($('#apiReqType').length){
					this.apiGetParams();
					this.apiProductList();
				}
			},
			tabFn: function() {
				var _this = this,tempNum = 0;

				setTimeout(function(){
					yf.tab({
						tabId: 'dataTabHd',
						contents: 'dataTabBd',
						callBack: function() {
							if(tempNum!=0){ // 页面刚加载
								if(this.index == 1){
									$('#productList').hide(); // 隐藏数据商城
									$('#apiProList').show();  // 显示数据api
									sessionStorage.setItem('datamallType','1');
								}else if(this.index == 0){
									sessionStorage.setItem('datamallType','0');
									$('#productList').show(); // 隐藏数据商城
									$('#apiProList').hide();  // 显示数据api
								}
							}
							tempNum = 1;
						}
					});
					if(_this.dataMallType == '1'){
						$('#productList').hide(); // 隐藏数据商城
						$('#apiProList').show();  // 显示数据api
						$('#dataTabHd').children().eq(1).addClass('active').siblings().removeClass('active');
						$('#dataTabBd').children().eq(1).show().siblings().hide();
					}else if(_this.dataMallType == '0'){
						$('#productList').show(); // 隐藏数据商城
						$('#apiProList').hide();  // 显示数据api
						$('#dataTabHd').children().eq(0).addClass('active').siblings().removeClass('active');
						$('#dataTabBd').children().eq(0).show().siblings().hide();
					}
				},100);
			},
			cateObj:{},
			dataObj:function(){
				var _this=this;
				mallservice.dataObj()
				.success(function(data){
					var obj=JSON.parse(data);
					_this.cateObj=obj;
					if($('#dataMallBanner').length){
						_this.productList({},1);
					}	
				})
			},
			filterData:function(){
				var _this=this;
				//类别   城市 全部/选择  时间
				$('#filterCate span,#filterCity span,#filterDate span').on('click',function(){
					$('html,body').animate({scrollTop:$('#data-filter').offset().top+'px'});
					$(this).addClass('active').siblings().removeClass('active');
					if($(this).data('id')!='定制'){
						$('#dataMallPage').html('');
					}
					if($('#dataMallPage li.active span').text()!=''){
						_this.getProductList(parseInt($('#dataMallPage li.active span').text()))
					}else{
						_this.getProductList(1);
					}
				})
			
				//省份/城市
				$('#select-tit span').on('click',function(){
					var ind = $(this).index();
					$(this).addClass('active').siblings().removeClass('active');
					$('.select-con').eq(ind).addClass('active').siblings().removeClass('active');
				})
				//省份 城市
				/*$('#specificProvince span,#specificCity span').on('click',function(){
					$(this).addClass('active').parents('.province').siblings().find('span').removeClass('active');
					$('#filterCityName').text($('#specificProvince .active').text()+'/'+$('#specificCity .active').text());
				})*/
				//时间
				$('#dateFrame li').on('click',function(){
					$(this).addClass('t-active').siblings().removeClass('t-active');
					$('#filterDateTime').text($('#dateFrame .t-active').text());
					$('#dateFrame').removeClass('d-active').fadeOut();
					$('#selectDate').find('em').removeClass('e-active');
					if($('#dataMallPage li.active span').text()!=''){
						_this.getProductList(parseInt($('#dataMallPage li.active span').text()))
					}else{
						_this.getProductList(1)
					}
					//_this.getProductList($('#dataMallPage li.active span').text());
				})
				//城市选择框显示隐藏
				$('#selectCity').on('click',function(e){
					$('#cityFrame').addClass('c-active').fadeIn();
					$(this).addClass('active').siblings().removeClass('active');
					$(this).find('em').addClass('e-active');
					$(document).one("click", function(){
				    	$('#cityFrame').removeClass('c-active').fadeOut();
						$(this).find('em').removeClass('e-active');
				    });
					e.stopPropagation();
				})
				$('#cityFrame').on('click',function(e){
						e.stopPropagation();
				})
				//日期选择框显示隐藏
				$('#selectDate').on('click',function(e){
					$('#dateFrame').addClass('d-active').fadeIn();
					$(this).addClass('active').siblings().removeClass('active');
					$(this).find('em').addClass('e-active');
					$(document).one("click", function(){
				    	$('#dateFrame').removeClass('d-active').fadeOut();
						$(this).find('em').removeClass('e-active');
				    });
					if( $('#filterDateTime').text()!='自定义' ){
						_this.getProductList(1);
					}
					e.stopPropagation();
				})
				$('#dateFrame').on('click',function(e){
						e.stopPropagation();
				})
			},
			clickPurchase:function(){
				var _this=this;
				$('.purchaseData').on('click',function(){
					if($('#dataMallBanner').length){
						var params,data;
						data=$(this).parents('.product').data();
						params={
							categoryName:data.categoryname,
							provinceName:data.provincename,
							year:data.year
						}
					}
					layer.open({
					  type: 1,
					  skin: '', 
					  title:' ',
					  move:false,
					  area: ['400px', '420px'], //宽高
					  content: '<div class="purchase-frame">\
					  	<div class="purchase-con">\
					  		<ul>\
					  			<li><span>姓名：</span><input type="text" id="applyName" /></li>\
					  			<li><span>电话：</span><input type="text" id="applyPhone" /></li>\
					  			<li><span>公司：</span><input type="text" id="applyCompany" /></li>\
					  			<li><span>行业：</span>\
						  			<span><input type="radio" name="industry" id="land" checked="checked" value="地产"/><label for="land">地产</label></span>\
						  			<span><input type="radio" name="industry" id="finance" value="金融"/><label for="finance">金融</label></span>\
						  			<span><input type="radio" name="industry" id="consultation" value="咨询"/><label for="consultation">咨询</label></span>\
						  			<span><input type="radio" name="industry" id="other" value="其它"/><label for="other">其它</label></span>\
					  			</li>\
					  			<li><span>备注：</span><textarea name="" id="textarea" class="textarea" cols="30" rows="10" placeholder="如需多城市／多月度／多维度数据请备注"></textarea></li>\
					  			<li><span class="submit">提交</span></li>\
					  		</ul>\
					  	</div>\
					  </div>'
					});
					_this.submit(params);
				})
				
				/**
				 * 需求定制功能
				 */
				$('.buy-custom').on('click',function(){
					if($('.buy-custom-text').length==0){						
						layer.open({
						  type: 1,
						  skin: '', 
						  title:' ',
						  move:false,
						  area: ['400px', '450px'], //宽高
						  content: '<div class="purchase-frame">\
						  	<div class="purchase-con">\
						  		<ul>\
						  			<li><span>姓名：</span><input type="text" id="applyName"  /></li>\
						  			<li><span>电话：</span><input type="text" id="applyPhone" /></li>\
						  			<li><span>公司：</span><input type="text" id="applyCompany" /></li>\
						  			<li><span>行业：</span>\
							  			<span><input type="radio" name="industry" id="land" checked="checked"  value="地产"/><label for="land">地产</label></span>\
							  			<span><input type="radio" name="industry" id="finance" value="金融"/><label for="finance">金融</label></span>\
							  			<span><input type="radio" name="industry" id="consultation" value="咨询"/><label for="consultation">咨询</label></span>\
							  			<span><input type="radio" name="industry" id="other" value="其它"/><label for="other">其它</label></span>\
						  			</li>\
						  			<li><span>定制需求：</span><textarea name="" id="textarea" cols="30" rows="10" placeholder="" class="buy-custom-text"></textarea></li>\
						  			<li><span class="submit">提交</span></li>\
						  		</ul>\
						  	</div>\
						  </div>'
						});
						if($('#dataMallBanner').length){
							var params,categoryName,provinceName,year,curYear;
							categoryName=$('#filterCate .active').text()=='全部'?'':$('#filterCate .active').text();
							provinceName=$('#filterCityName').text()=='请选择省/市'?'':$('#filterCityName').text().split('/')[0];
							year=$('#filterDate span:lt(6).active').text() || $('#filterDateTime').text();
							curYear=year=='自定义'||year=='全部'?'':year;
							params={
								categoryName:categoryName,
								provinceName:provinceName,
								year:curYear
							}
							_this.submit(params);
						}
					}
				})
			},
			glideEffect:function(){
				var _this=this;
				$('.glide').on({
					mouseenter:function(){
						$(this).find('img').attr('src',_this.cateObj[$(this).data('id')-1].picLogUrl.split(',')[1]);
					},
					mouseleave:function(){
						$(this).find('img').attr('src',_this.cateObj[$(this).data('id')-1].picLogUrl.split(',')[0]);
					}
				})
			},
			getProvince:function(){
				var _this=this;
				mallservice.getProvince()
				.success(function(data){
					var province1=['a','b','c','d','e','f','g'];
					var province2=['h','i','j','k'];
					var province3=['l','m','n','o','p','q','r','s'];
					var province4=['t','u','v','w','x','y','z'];
					for(var i=0;i<data.length;i++){
						if(province1.indexOf(data[i].prefix) != -1){
							$('#provinceA').append('<span data-id="'+data[i].id+'" data-city="'+data[i].isCity+'">'+data[i].name+'</span>')
						}else if(province2.indexOf(data[i].prefix) != -1){
							$('#provinceH').append('<span data-id="'+data[i].id+'" data-city="'+data[i].isCity+'">'+data[i].name+'</span>')
						}else if(province3.indexOf(data[i].prefix) != -1){
							$('#provinceL').append('<span data-id="'+data[i].id+'" data-city="'+data[i].isCity+'">'+data[i].name+'</span>')
						}else if(province4.indexOf(data[i].prefix) != -1){
							$('#provinceT').append('<span data-id="'+data[i].id+'" data-city="'+data[i].isCity+'">'+data[i].name+'</span>')
						}
					}
					_this.choiceProvince();
				})
			},
			choiceProvince:function(){
				var _this=this;
				$('#specificProvince span').on('click',function(){
					$(this).addClass('active').parents('.province').siblings().find('span').removeClass('active');
					$(this).siblings().removeClass('active');
					if($(this).data('city')){
						$('#allCity').hide();
					}else{
						$('#allCity').show();
					}
					$('#cityA,#cityH,#cityL,#cityT').children().remove();
					mallservice.getCity({provinceId:$(this).data('id')})
					.success(function(data){
						var city1=['a','b','c','d','e','f','g'];
						var city2=['h','i','j','k'];
						var city3=['l','m','n','o','p','q','r','s'];
						var city4=['t','u','v','w','x','y','z'];
						for(var i=0;i<data.length;i++){
							if(city1.indexOf(data[i].prefix) != -1){
								$('#cityA').append('<span data-id="'+data[i].id+'">'+data[i].name+'</span>')
							}else if(city2.indexOf(data[i].prefix) != -1){
								$('#cityH').append('<span data-id="'+data[i].id+'">'+data[i].name+'</span>')
							}else if(city3.indexOf(data[i].prefix) != -1){
								$('#cityL').append('<span data-id="'+data[i].id+'">'+data[i].name+'</span>')
							}else if(city4.indexOf(data[i].prefix) != -1){
								$('#cityT').append('<span data-id="'+data[i].id+'">'+data[i].name+'</span>')
							}
						}
						$('#select-tit span').eq(1).addClass('active').siblings().removeClass('active');
						$('#specificCity').addClass('active').prev().removeClass('active');
						/*$('#specificCity .city-box').each(function(ind,el){
							if($(this).children().length==0){
								$(this).parents('.province').remove();
							}
						})*/
						$('#specificCity span').on('click',function(){
							if($(this).parent().attr('id')=='allCity'){
								$(this).addClass('active').parents('.all-city').siblings().find('span').removeClass('active');
							}else{
								$(this).addClass('active').parents('.province').siblings().find('span').removeClass('active');
								$(this).siblings().removeClass('active');
							}
							
							$('#cityFrame').removeClass('c-active').fadeOut();
							$('#selectCity').find('em').removeClass('e-active');
							$('#filterCityName').text($('#specificProvince .active').text()+'/'+$('#specificCity .active').text());
							if($('#dataMallPage li.active span').text()!=''){
								_this.getProductList(parseInt($('#dataMallPage li.active span').text()))
							}else{
								_this.getProductList(1)
							}
						})
						/*$('.all-city span').on('click',function(){
							$(this).addClass('active').parents('.all-city').siblings().find('span').removeClass('active');
						})*/
						$('#filterCityName').text($('#specificProvince .active').text()+'/'+$('#specificCity .active').text());
						/*$('#filterCityName').data('province',$('#specificProvince .active').data('id'));
						$('#filterCityName').data('city',$('#specificCity .active').data('id'));*/
					})
					if($('#dataMallPage li.active span').text()!=''){
						_this.getProductList(parseInt($('#dataMallPage li.active span').text()))
					}else{
						_this.getProductList(1)
					}
					//_this.getProductList($('#dataMallPage li.active span').text());
				})
			},
			/**
			 * api列表条件查询请求
			 */
			apiGetParams: function() {
				var _this = this;
				var aApiReqType = $('#apiReqType');

				aApiReqType.find('.box span').unbind().bind('click',function(){
					$(this).addClass('active').siblings().removeClass('active');
					_this.apiProductList(1);
				});
			},
			/**
			 * 数据api产品列表
			 */
			apiProductList: function(curPage) {
				var _this=this;
				var type = $('#apiReqType .active').data().val;
				var oApiListBox = $('#apiListBox');
				var sHtml = '';
				var form = {
					pageNow: curPage || 1,
					apiType: type || '',
					pageSize: 12
				}
				mallservice.apiProductList(form).
				success(function(data){
					var dataList = data.list;
					for (var i = 0; i < dataList.length; i++) {
						var d = dataList[i];
						sHtml += '<div class="product">\
							<div class="pro-title">'+d.apiName+'</div>\
							<div class="pro-img"><a href="/dataapi/apiDetail.html?id='+d.id+'">\
							<img class="bg-img" src="'+d.pageUrl+'" alt=""></a></div>\
							<div class="count text-center">\
								<p> <b class="iconfont icon-goumai"></b>\
									<span>'+d.outCount+'</span>人已购买\
								</p>\
							</div>\
							<div class="btns text-center">\
								<a href="/dataapi/apiDetail.html?id='+d.id+'" class="btn">查看详情</a>\
							</div>\
						</div>';
					};
					oApiListBox.html(sHtml);

					drawPage('apiDataPage',{
						currentPage :data.pageNum,
						totalItems : data.total,
						itemsPerPage : 12,
						pagesLength : 9,
						onChange : function(){
							_this.apiProductList(this.currentPage);
						}
					})

				}).error(function(e){});
			},
			/**
			 * 数据商城产品列表
			 */
			productList:function(params,curPage){
				var _this=this,html='';
				var form={
					year:params.year || '',
					categoryId:params.categoryId || '',
					cityId:params.cityId || '',
					provinceId:params.provinceId || '',
					pageSize:params.pageSize || 12,
					pageNow:curPage
				}
				mallservice.getProductList(form)
				.success(function(data){
					$('#listPage').html();
					if(data.total==0){
						$('#blackPage').show();
						$('#listPage').hide();
						$('#dataMallPage').hide();
						return;
					}
					$('#blackPage').hide();
					$('#listPage').show();
					$('#dataMallPage').show();
					for(var i=0;i<data.list.length;i++){
						var subCate;
						if(data.list[i].subCategoryId==null){
							subCate="015";
						}else if(data.list[i].subCategoryId.toString().length==1){
							subCate="00"+data.list[i].subCategoryId;
						}else if(data.list[i].subCategoryId.toString().length==2){
							subCate="0"+data.list[i].subCategoryId;
						}
						var img=_this.cateObj[data.list[i].categoryId-1].picUrl || data.list[i].customPicUrl;
						//var img=data.list[i].customPicUrl==null?_this.cateObj[data.list[i].categoryId-1].picUrl:data.list[i].customPicUrl;

						if(i%4==0 && i!=0){
							//html+='</div><div class="list-box">';
						}
						if(data.list[i].isHot){
							html+='<div class="product" data-categoryName="'+data.list[i].categoryName+'" data-provinceName="'+data.list[i].provinceName+'" data-year="'+data.list[i].year+'">\
								<div class="pro-title">'+data.list[i].name+'</div>\
								<div class="pro-img"><a href="http://www.yunfangdata.com/datamall_'+subCate+'_'+data.list[i].id+'.html"><img class="bg-img" src="'+img+'" alt="" /></a></div>\
								<div class="count text-center">\
									<p><b class="iconfont icon-goumai"></b><span>'+data.list[i].salesVolume+'</span>人已购买</p>\
								</div>\
								<div class="btns text-center">\
									<a href="http://www.yunfangdata.com/datamall_'+subCate+'_'+data.list[i].id+'.html" class="btn">查看详情</a>\
									<a href="javascript:;" class="btn purchaseData">立即购买</a>\
								</div>\
							</div>';
						}else{
							html+='<div class="product" data-categoryName="'+data.list[i].categoryName+'" data-provinceName="'+data.list[i].provinceName+'" data-year="'+data.list[i].year+'">\
								<div class="pro-title">'+data.list[i].name+'</div>\
								<div class="pro-img"><a href="http://www.yunfangdata.com/datamall_'+subCate+'_'+data.list[i].id+'.html"><img class="bg-img" src="'+img+'" alt="" /></a></div>\
								<div class="count text-center">\
									<p><b class="iconfont icon-goumai"></b><span>'+data.list[i].salesVolume+'</span>人已购买</p>\
								</div>\
								<div class="btns text-center">\
									<a href="http://www.yunfangdata.com/datamall_'+subCate+'_'+data.list[i].id+'.html" class="btn">查看详情</a>\
									<a href="javascript:;" class="btn purchaseData">立即购买</a>\
								</div>\
							</div>';
						}
					}
					// html+='</div>';
					$('#listPage').html(html);
					_this.glideEffect();		
					_this.clickPurchase();
					if($('#dataMallPage li.active span').text()!=''){
						_this.changePage(parseInt($('#dataMallPage li.active span').text()),data.total)
					}else{
						_this.changePage(1,data.total)
					}
				})
			},
			getProductList:function(curPage){
				var cate,province,city,year,curCate,curProvince,curCity,curYear;
				if($('#filterCate .active').data('id')=='定制'){
					return;
				}
				cate=$('#filterCate .active').data('id')
				province=$('#filterCity span:lt(1).active').text() || $('#specificProvince .active').data('id');
				city=$('#filterCity span:lt(1).active').text() || $('#specificCity .active').data('id');
				year=$('#filterDate span.active').text() || $('#filterDateTime').text();
				curCate=cate==undefined?'':cate;
				curProvince=province==undefined || province=='全部'?'':province;
				curCity=city==undefined || city=='全部'?'':city;
				curYear=year=='自定义'||year=='全部'?'':year;
				var params={
					year:curYear,
					categoryId:curCate, // 类别
					cityId:curCity,
					provinceId:curProvince,
					pageSize:12,
					pageNow:curPage
				}
				this.productList(params,curPage);
			},
			changePage:function(curPage,totalRow){
				var _this=this;
				drawPage('dataMallPage',{
					currentPage :curPage,
					totalItems : totalRow,
					itemsPerPage : 12,
					pagesLength : 9,
					onChange : function(){
						_this.getProductList(this.currentPage)
					}
				})
			},
			submit:function(data){
				$(".submit").on('click',function(){
					var name=$.trim($("#applyName").val());
					var phone=$.trim($("#applyPhone").val());
					var company=$.trim($("#applyCompany").val());
                    var companyType=$("input[name='industry']:checked").val();
                    var textareaContent=$.trim($("#textarea").val());
					var regPhone=/^1[34578]\d{9}$/;
                    var regUserName=/^[\u4E00-\u9FA5]{2,30}$/;
					if(!name){
						return layer.msg("请输入姓名");
					}
					if(!regUserName.test(name)){
						return layer.msg("姓名格式错误");
					}
					if(!phone){
						return layer.msg("请输入手机号码");
					}
					if(!regPhone.test(phone)){
						return layer.msg("手机格式错误");
					}
					if(!company){
						return layer.msg("请输入公司名称");
					}						
					if(company.length>30){
						return layer.msg("公司名称格式错误");
					}
					var describe = "数据类别:"+data.categoryName+";城市:"+data.provinceName+";年份:"+data.year+";";
					if($(".data-details").length){
						describe += "时间范围："+$(".start-time option:selected").text()+"月至月"+$(".end-time option:selected").text()+";时间维度:"+$("input[name='time']:checked").val()+";区域维度:"+$("input[name='area']:checked").val()
						describe += ";"+$(".status").text()+":"+$("input[name='status']:checked").val()+";户型分类:"+$("input[name='type']:checked").val()+";交付形式:"+$("input[name='modality']:checked").val()+";"				
					}
					describe += $("#textarea").siblings('span').eq(0).text()+textareaContent;
					var param={
						name:name,
						mobile:phone,
						company:company,
						industry:companyType,
						source:'PC官网',
						sourceUrl:sessionStorage.getItem('url'),							
						describe:describe
					}
					mallservice.purchaseApply(param)
					.success(function(data){
						if(data.success){
							layer.msg(data.message,0,function(){
								layer.closeAll();
							});
						}else{
							layer.msg(data.message);
						}
						
					})						
				});
			}
		}
	}().init()
})