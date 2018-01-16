require(['third/jquery/jquery-1.8.2.min'],function(){
	jQuery.extend(jQuery.easing,{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158; 
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	});
	window.yf = window.yf || {};

	/**
     * 获取url参数的值
     */
    yf.getParam = function(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.href);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
	/**
	 * slide
	 */
	require(['lib/js/slide','third/layer/layer'],function(){
		//头部导航
		yf.bannerFluid = function() {
			var oBannerFluid = $("#bannerFluid");
			oBannerFluid.Slide({
			    slideContent:".slide-content",
			    slideActive:".slide-ul",
			    offset: "auto",
			    easing: "",
			    prevBtn:".prev-btn",
			    nextBtn:".next-btn",
			    autoPlay: true,
			    interval:5000,
			    callBack: function(data){

			    }
			});
		}
		
		//地产banner
		if($('#dichanbannerFluid').length){
			setTimeout(function(){
				$("#dichanbannerFluid").Slide({
				    slideContent:".slide-content",
				    slideActive:".slide-ul",
				    offset:"scrollX",
				    easing: "",
				    prevBtn:".prev-btn",
				    nextBtn:".next-btn",
				    autoPlay:true,
				    interval:5000,
				    callBack: function(data){
				    	
				    }
				});
			},200);
		}
		// 合作伙伴
		if($("#partnersContent").length){
			$("#partnersContent").Slide({
			    slideContent:".partners-list",
			    slideActive:".slide-ul",
			    offset:"scrollX",
			    easing: "easeOutQuart",
			    prevBtn:".prev-btn",
			    nextBtn:".next-btn",
			    autoPlay: true,
			    interval: 5000,
			    callBack: function(data){
			    	var aContentItems = data.content.aContentItems;
			    	aContentItems.eq(data.index).addClass('active');
			    }
			});
		}

		if($("#servicesCase").length){
			$("#servicesCase").Slide({
			    slideContent:".slide-content",
			    slideActive:".slide-ul",
			    offset:"scrollX",
			    easing: "easeOutQuart",
			    prevBtn:".prev-btn",
			    nextBtn:".next-btn",
			    autoPlay:false,
			    focus:true,
			    callBack: function(data){
			    	var aContentItems = data.content.aContentItems;
			    	aContentItems.eq(data.index).addClass('active');
			    }
			});
		}
		if($("#companyCertificate").length){
			$("#companyCertificate").Slide({
			    slideContent:".slide-content",
			    slideActive:".slide-ul",
			    offset:"scrollX",
			    easing: "easeOutQuart",
			    prevBtn:".prev-btn",
			    nextBtn:".next-btn",
				interval:5000,
			    autoPlay:true,
			    focus:true,
			    callBack: function(data){
			    	var aContentItems = data.content.aContentItems;
			    	aContentItems.eq(data.index).addClass('active');
			    }
			});
		}
		if($("#applyDataApi").length){
			$("#applyDataApi").click(function(){
				$(".applywrap").hide();
				$("#applyBox").removeClass("close").addClass("open");
				$(".btn-close").unbind('click').bind("click",function(){
					$("#applyName").val("");
					$("#applyPhone").val("");
					$("#applyCompany").val("");
					$("#companyType").val("请选择");
					$("#applyBox").removeClass("open").addClass("close");
					$(".applywrap").show(200);
				});
				$("#applySubmit").unbind('click').bind("click",function(){
					var name=$.trim($("#applyName").val());
					var phone=$.trim($("#applyPhone").val());
					var company=$.trim($("#applyCompany").val());
                    var companyType=$("#companyType").val();
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
					if(companyType=="请选择"){
						return layer.msg("请选择公司类型");
					}
					var param={
						name:name,
						phone:phone,
						companyName:company,
						fromName:'PC官网',
						companyType:companyType
					}
					$.ajax({
						type: 'post',
						url: 'http://123.56.108.173:8083/api/offcialWebsite/app/add?jsonpCallback=?',
						data: param,
						//async: false,
						dataType: 'jsonp',
						success:function(data){
							layer.msg(data.message);
							if(data.success){
								$("#applyName").val("");
								$("#applyPhone").val("");
								$("#applyCompany").val("");
								$("#companyType").val("请选择");
					 			$("span[id^='emptyhint']").show();
								$("#applyBox").removeClass("open").addClass("close");
								$(".applywrap").show(200);
							}
						},
						error:function(e) {
							
						}
					})
				});
			})
		}

		//数据商城
		//批量评估申请试用
		if($("#applySubmit_piliangfugu").length){
			$("#applySubmit_piliangfugu").on("click",function(){
				var name=$.trim($("#applyName").val());
				var phone=$.trim($("#applyPhone").val());
				var company=$.trim($("#applyCompany").val());
                var companyType=$("#companyType").val();
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
				if(companyType=="请选择"){
					return layer.msg("请选择公司类型");
				}
				var param={
					name:name,
					phone:phone,
					companyName:company,
					fromName:'PC官网',
					companyType:companyType
				}
				$.ajax({
					type: 'post',
					url: 'http://123.56.108.173:8083/api/offcialWebsite/app/add/piliangfugu?jsonpCallback=?',
					data: param,
					//async: false,
					dataType: 'jsonp',
					success:function(data){
						layer.msg(data.message);
						if(data.success){
							$("#applyName").val("");
							$("#applyPhone").val("");
							$("#applyCompany").val("");
							$("#companyType").val("请选择");
				 			$("span[id^='emptyhint']").show();
						}
					},
					error:function(e) {
						console.log(e)
					}
				})
			});
		}
		//批量评估banner
		if($('#piliangfuguFluid').length){
			setTimeout(function(){
				$("#piliangfuguFluid").Slide({
				    slideContent:".slide-content",
				    slideActive:".slide-ul",
				    offset:"scrollX",
				    easing: "",
				    prevBtn:".prev-btn",
				    nextBtn:".next-btn",
				    autoPlay:true,
				    interval:5000,
				    callBack: function(data){
				    	
				    }
				});
			},200);
		}
		//数据商城banner
		if($('#dataMallBanner').length){
			setTimeout(function(){
				$("#dataMallBanner").Slide({
				    slideContent:".slide-content",
				    slideActive:".slide-ul",
				    offset:"scrollX",
				    easing: "",
				    prevBtn:".prev-btn",
				    nextBtn:".next-btn",
				    autoPlay:true,
				    interval:5000,
				    callBack: function(data){
				    	
				    }
				});
			},200);
		}
		if($('#detailBanner').length){
			setTimeout(function(){
				$("#detailBanner").Slide({
				    slideContent:".slide-content",
				    slideActive:".slide-ul",
				    offset:"scrollX",
				    easing: "",
				    prevBtn:".prev-btn",
				    nextBtn:".next-btn",
				    autoPlay:true,
				    interval:5000,
				    callBack: function(data){
				    }
				});
			},200);
		}
		//获取入口页面url
		if(sessionStorage.getItem('url')==null){
			sessionStorage.setItem('url',location.href);
		}
	});

	!function (){
		/**
		 * IsPc: 是否在pc端
		 */
		var IsPc = function() {
			//api页面手机端也可以访问
			if(this.location.pathname.indexOf('dataapi')!=-1){return true;}
		    var userAgentInfo = navigator.userAgent;
		    var Agents = ["Android", "iPhone",
		        "SymbianOS", "Windows Phone",
		        "iPad", "iPod"];
		    var flag = true;
		    for (var v = 0; v < Agents.length; v++) {
		        if (userAgentInfo.indexOf(Agents[v]) > 0) {
		            flag = false;
		            break;
		        }
		    }
		    return flag;
		}

		if(!IsPc()){ window.location.href="http://m.yunfangdata.com/"; }

		/**
		 * 下拉菜单伸缩功能
		 */
		
		/**
		 * 渲染head内容
		 */
		 function renderHeader(){
		 	/*<a href="https://www.liepin.com/company/8047206/" target="_blank" class="join-us"><img src="http://img.yunfangdata.com/abe4591a-b8af-11e7-8f8d-00163e064655.png" alt="" /></a>*/
			var header='<div class="container">\
				   <div class="logo pull-left">\
				    <a href="http://www.yunfangdata.com/"><img class="yunfanglogo" src="http://img.yunfangdata.com/cda0ea3c-e6f9-11e7-8ccd-00163e064655.png" alt="" /><span class="logo-slogan">独立第三方房地产大数据服务商</span></a>&nbsp;&nbsp;\
				   </div>\
				   <nav class="nav pull-right">\
				    <ul id="nav" class="list-inline">\
				     <li class="nav-link transition_03"><a href="http://www.yunfangdata.com/" class="link" target="_self">首页<b class="caret transition_03"></b></a></li>\
				     <li class="nav-link transition_03"><a href="http://www.yunfangdata.com/dataMall.html" class="link">数据服务</a></li>\
				     <li class="nav-link transition_03"><a class="link" style="cursor:default;" target="_blank">行业<b class="caret transition_03"></b></a>\
				      <ul class="list-unstyled menu-down">\
				       <li><a href="http://www.yunfangdata.com/jinrong.html" target="_self">金融</a></li>\
				       <li><a href="http://www.yunfangdata.com/dishui.html" target="_self">地税</a></li>\
				       <li><a href="http://www.yunfangdata.com/pinggu.html" target="_self">评估</a></li>\
				       <li><a href="http://www.yunfangdata.com/dichan.html" target="_self">地产</a></li>\
				      </ul></li>\
				     <li class="nav-link transition_03"><a class="link" style="cursor:default;" target="_blank">产品<b class="caret transition_03"></b></a>\
				      <ul class="list-unstyled menu-down">\
				       <li><a href="http://www.yunfangdata.com/houseload.html" target="_self">房估估</a></li>\
				       <li><a href="http://pg.yunfangdata.com" target="_blank">评E评</a></li>\
				       <li><a href="http://www.yunfangdata.com/datacollection.html" target="_self">外采系统</a></li>\
				       <li><a href="http://www.yunfangdata.com/piliangfugu.html" target="_self">批量评估</a></li>\
				       <li><a href="http://zhizi.yunfangdata.com/#/login" target="_blank">智子数库</a></li>\
				      </ul></li>\
				     <li class="nav-link transition_03"><a href="http://www.yunfangdata.com/news_001.html" class="link" target="_self">研究中心<b class="caret transition_03"></b></a>\
				      <ul class="list-unstyled menu-down">\
				       <li><a href="http://www.yunfangdata.com/news_001.html" target="_self">市场报告</a></li>\
				       <li><a href="http://www.yunfangdata.com/news_002.html" target="_self">精选专题</a></li>\
				       <li><a href="http://www.yunfangdata.com/news_003.html" target="_self">房价指数</a></li>\
				       <li><a href="http://www.yunfangdata.com/news_004.html" target="_self">云房观点</a></li>\
				      </ul></li>\
				     <li class="nav-link transition_03"><a href="http://www.yunfangdata.com/aboutUs.html" class="link" target="_self">关于我们<b class="caret transition_03"></b></a>\
				      <ul class="list-unstyled menu-down">\
				       <li><a href="http://www.yunfangdata.com/aboutUs.html#companyProfile" target="_self">公司简介</a></li>\
				       <li><a href="http://www.yunfangdata.com/aboutUs.html#teamIntroduction" target="_self">团队介绍</a></li>\
				       <li><a href="http://www.yunfangdata.com/aboutUs.html#development" target="_self">发展历程</a></li>\
				       <li><a href="http://www.yunfangdata.com/aboutUs.html#contactUs" target="_self">联系我们</a></li>\
				       <li><a href="https://www.liepin.com/company/8047206/" target="_blank">加入我们</a></li>\
				      </ul></li>\
				    </ul>\
				   </nav>\
				  </div>';
			$('header').html(header);
		}
		renderHeader();
		var navEvent = (function() {
			var oNav = $('#nav');
			var navLinks = oNav.children('.nav-link');
			navLinks.each(function(index,elm){
				$(elm).hover(function(){
					$(this).find('.menu-down').stop(true,true).slideDown('fast');
				},function(){
					$(this).find('.menu-down').stop(true,true).slideUp('fast');
				});
			});
		})();
		
		/**
		 * 渲染footer内容
		 */
		var renduFooter = function(data){
			return;
			var weixinCode = data.weixinCode;
			var baseInfo = data.baseInfo;
			var data = data.data;
			var $footer = $('#footer');
			var sHtml = '<div class="container">'+
		    	'<div class="footer-left pull-left">';
		    		for (var i = 0; i < data.length; i++) {
		    			var navs = data[i].childs.navs;
		    			var href = data[i].childs.href;
						var target = data[i].childs.target;
		    			sHtml+='<ul class="footer-link-group list-unstyled">';
		    			if(data[i].href!=null){
		    				sHtml+='<li><strong><a href="'+ data[i].href +'" target="_self">'+data[i].title+'</a></strong></li>';
		    			}else{
		    				sHtml+='<li><strong>'+data[i].title+'</strong></li>';
		    			}
				          
	    				for (var j = 0; j < navs.length; j++) {
	    					sHtml+='<li><a href="'+href[j]+'" target="'+target[j]+'">'+navs[j]+'</a></li>';
	    				};
				        sHtml+='</ul>';
		    		};
			        sHtml+='<p>'+baseInfo.copyright+'</p>';
		      '</div>';
		      sHtml+='<div class="footer-weixin-code pull-right">';
		      	for (var i = 0; i < weixinCode.length; i++) {
					sHtml+='<div class="img-code">'+
						'<img _src="'+weixinCode[i].picUrl+'" />'+
						'<p>'+weixinCode[i].name+'</p>'+
					'</div>';
		      	};
		      sHtml+='</div></div>';
			$footer.html(sHtml);
		}

		var renduSolution = function(data){
            var data=data.data;
			var sHtml = '';
			var oSolutionContent = $('#solutionContent');
			for (var i = 0; i < data.length; i++) {
				var list=data[i].list;
				sHtml += '<h4>' + data[i].title + '</h4><ul class="nav-group">';
				for (var j = 0; j < list.name.length; j++) {
					sHtml += '<li class="item"><a href="' + list.link[j] + '" target="_self">' + list.name[j] + '</a></li>';
				}
				sHtml += '</ul>';
			};
            oSolutionContent.html(sHtml);
		}

		var renduApiNavTree = function(data){
            $('#apiApplyTel').html(data.tel);
  			var locationUrl=window.location.href;
            var data=data.data;
			var sHtml = '<ul>';
			var liIndex=0;
			var apiNavContent = $('#apiNavTree');
			for (var i = 0; i < data.length; i++) {
				var list=data[i].list;
				sHtml += '<li>\
					<em class="fr"></em>\
	            	<a href="javascript:;" class="mainList">' + data[i].title + '</a>\
					<div class="subMenu">';
				for (var j = 0; j < list.name.length; j++) {
					if(locationUrl.indexOf(list.ids[j])!=-1){
						sHtml += '<a class="current" id="'+ list.ids[j] + '"href="' + list.link[j] + '">' + list.name[j] + '</a>';
						liIndex=i;
					}else{
						sHtml += '<a id="'+ list.ids[j] + '"href="' + list.link[j] + '">' + list.name[j] + '</a>';
					}
				}
				sHtml += '</div></li>';
			};
			sHtml += '</ul>';
            apiNavContent.html(sHtml);
            apiNavContent.find('li').eq(liIndex).addClass('on').find('div').css('display','block');
		}

		var renduSiteMap = function(data){
			var ositeMapIndustryContent = $('#siteMapIndustry');
			if(ositeMapIndustryContent.length!=1) return;
            var solutionData=data.solutionData;
			var sHtml = '<ul>';
			for (var i = 0; i < solutionData.length; i++) {
				var list=solutionData[i].list;
				sHtml += '<li class="vt"><h5 class="service-title">' + solutionData[i].title + '</h5>';
				for (var j = 0; j < list.name.length; j++) {
					sHtml += '<a href="' + list.link[j] + '" target="_blank">' + list.name[j] + '</a>';
				}
				sHtml += '</li>';
			}
			sHtml+='</ul>';
            ositeMapIndustryContent.html(sHtml);

            var ositeMapResearchContent = $('#siteMapResearch');
			if(ositeMapResearchContent.length!=1) return;
            var researchData=data.researchData;
			var sHtml = '<ul>';
			for (var i = 0; i < researchData.list.link.length; i++) {
				
				sHtml += '<li class="vt">\
				<a href="'+ researchData.list.link[i] +'" target="_self"><h5 class="service-title">'+ researchData.list.name[i] +'</h5></a>\
				</li>';
			}
			sHtml+='</ul>';
            ositeMapResearchContent.html(sHtml);

    		var ositeMapAboutUsContent = $('#siteMapAboutUs');
			if(ositeMapAboutUsContent.length!=1) return;
            var aboutUsData=data.aboutUsData;
			var sHtml = '<ul>';
			for (var i = 0; i < aboutUsData.list.link.length; i++) {
				
				sHtml += '<li class="vt">\
				<a href="'+ aboutUsData.list.link[i] +'" target="_self"><h5 class="service-title">'+ aboutUsData.list.name[i] +'</h5></a>\
				</li>';
			}
			sHtml+='</ul>';
            ositeMapAboutUsContent.html(sHtml);
		}

		require(['lib/js/data'],function(data){
			renduFooter(data.footerData);
			renduSolution(data.solutionData);
			renduApiNavTree(data.apiTreeData);
			renduSiteMap(data.siteMapData);
		});
	}();
	
});

/*var start_time = new Date();
var end_time = "" ;
var t = setInterval(function(){
	console.log(document.readyState)

    if(document.readyState=="complete"){
    	loadingSuccess();
    }
},0);
function loadingSuccess(){
    end_time = new Date();
    clearInterval(t);
    console.log(end_time.getTime() -  start_time.getTime() );
}*/

/**
 * @places 保留小数位数
 * @symbol 货币符号
 * @thousand 整数部分千位分隔符
 * @decimal 小数分隔符
 * @returns 返回结果
 */
String.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this,
		negative = number < 0 ? "-" : "",
		i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}

/*
* 让浏览器原生支持placeholder
* initPlaceHolders => input placeholder
* */
~function(){
    if('placeholder' in document.createElement('input')){ //如果浏览器原生支持placeholder
        return ;
    }
    function target (e){
        var e=e||window.event;
        return e.target||e.srcElement;
    };
    function _getEmptyHintEl(el){
        var hintEl=el.hintEl;
        return hintEl && g(hintEl);
    };
    function blurFn(e){
        var el=target(e);
        if(!el || el.tagName !='INPUT' && el.tagName !='TEXTAREA') return;//IE下，onfocusin会在div等元素触发
        var    emptyHintEl=el.__emptyHintEl;
        if(emptyHintEl){
            //clearTimeout(el.__placeholderTimer||0);
            //el.__placeholderTimer=setTimeout(function(){//在360浏览器下，autocomplete会先blur再change
            if(el.value) emptyHintEl.style.display='none';
            else emptyHintEl.style.display='';
            //},600);
        }
    };
    function focusFn(e){
        var el=target(e);
        if(!el || el.tagName !='INPUT' && el.tagName !='TEXTAREA') return;//IE下，onfocusin会在div等元素触发
        var emptyHintEl=el.__emptyHintEl;
        if(emptyHintEl){
            //clearTimeout(el.__placeholderTimer||0);
            emptyHintEl.style.display='none';
        }
    };
    if(document.addEventListener){//ie
        document.addEventListener('focus',focusFn, true);
        document.addEventListener('blur', blurFn, true);
    }
    else{
        document.attachEvent('onfocusin',focusFn);
        document.attachEvent('onfocusout',blurFn);
    }

    var elss=[document.getElementsByTagName('input'),document.getElementsByTagName('textarea')];
    for(var n=0;n<2;n++){
        var els=elss[n];
        for(var i =0;i<els.length;i++){
            var el=els[i];
            var placeholder=el.getAttribute('placeholder'),
                emptyHintEl=el.__emptyHintEl;
            if(placeholder && !emptyHintEl){
                emptyHintEl=document.createElement('span');
                emptyHintEl.innerHTML=placeholder;
                emptyHintEl.className='emptyhint'+i;
                emptyHintEl.onclick=function (el){return function(){try{el.focus();}catch(ex){}}}(el);
                if(el.value) emptyHintEl.style.display='none';
                el.parentNode.appendChild(emptyHintEl);//.insertBefore(emptyHintEl,el);
                el.__emptyHintEl=emptyHintEl;
            }
        }
    }
}();

!(function(w){

	var QiaoBaidu = function() {
		window.onload = function(){
			yf.bannerFluid&&yf.bannerFluid();
			// 百度统计		
			;(function() {
				var _hmt = _hmt || [];
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?c27e64daf59b8506d196986f2910f73f";
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
			// 百度商桥
			;(function() {
				var _hmt = _hmt || [];
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?852306adb1eaf7798b9e53efab18b78d";
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
		}
	}

	var dom = {
		getId: function(obj) {
	        return document.getElementById(obj);
	    },
	    getClass: function(obj, className) {
	        if (obj && obj.getElementsByClassName) {
	            return obj.getElementsByClassName(className);
	        } else {
	            var arr = [],
	                collections = obj.getElementsByTagName('*'),
	                len = collections.length;
	            for (var i = 0; i < len; i++) {
	                if (collections[i].className.indexOf(className) > -1) {
	                    if (collections[i].className == className) {
	                        arr.push(collections[i]);
	                    }
	                }
	            }
	            return arr;
	        }
	    },
	    addClass: function(element, className) {
	        if (!dom.hasClass(element, className)) {
	            if (!element.className) {
	                element.className += className;
	            } else {
	                element.className += " " + className;
	            }
	        }
	    },
	    removeClass: function(element, className) {
	        if (dom.hasClass(element, className)) {
	            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	            element.className = element.className.replace(reg, '');
	        }
	    },
	    hasClass: function(element, className) {
	        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	        return element.className.match(reg);
	    },
	    getStyle: function(obj, style) {
	        if (!obj) {
	            return;
	        }
	        var css = obj.currentStyle ? obj.currentStyle[style] : getComputedStyle(obj, false)[style];
	        return css;
	    },
	    getPrev: function(obj) {
	        var prev = obj.previousSibling.nodeType != 1 ? obj.previousSibling.previousSibling : obj.previousSibling;　　
	        return prev;
	    },
	    getNext: function(obj) {
	        var next = obj.nextSibling.nodeType != 1 ? obj.nextSibling.nextSibling : obj.nextSibling;　　
	        return next;
	    },
	    siblings: function(elm) {
	        var a = [];
	        var b = elm.parentNode.children;
	        for (var i = 0; i < b.length; i++) {
	            if (b[i] != elm) {
	                a.push(b[i]);
	            }
	        }
	        return a;
	    },
	    _extend: function(childObj, parentObj) {
	        for (var attr in parentObj) {
	            childObj[attr] = parentObj[attr];
	        }
	    },
	    getOffset: function(Node, offset) {
	        if (!offset) {
	            offset = {
	                top: 0,
	                left: 0
	            };
	        }
	        //当该节点为body节点时，结束递归
	        if (Node == document.body) {
	            return offset;
	        }
	        offset.top += Node.offsetTop;
	        offset.left += Node.offsetLeft;
	        //向上累加offset里的值
	        return dom.getOffset(Node.parentNode, offset);
	    },
	    getParameterByName: function(name) {
		    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.href);
		    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		},
		htmlEncode:function (str) {
			var s = "";
			if (str.length == 0) return "";   
			s = str.replace(/</g, "&lt;");   
			s = s.replace(/>/g, "&gt;");   
			s = s.replace(/ /g, "&nbsp;");   
			s = s.replace(/\'/g, "&#39;");   
			s = s.replace(/\"/g, "&quot;");   
			s = s.replace(/\n/g, "<br>");   
			return s;   
		},
		htmlDecode:function (str) {
		  var s = "";   
		  if (str.length == 0) return "";    
		  s = str.replace(/&lt;/g, "<");   
		  s = s.replace(/&gt;/g, ">");   
		  s = s.replace(/&nbsp;/g, " ");   
		  s = s.replace(/&#39;/g, "\'");   
		  s = s.replace(/&quot;/g, "\"");   
		  s = s.replace(/<br>/g, "\n");   
		  return s;   
		}
    }
	/**
	 * ScrollCount: 数字滚动
	 */
	var ScrollCount = function(){}
	ScrollCount.prototype.scroll = function(elm,isFormat,timer){
		if(!elm){
			throw new Error('第一个参数，缺少id选择器');
		}
		var timer = timer;
		var t = 0;
		var dataNumber = $(elm).attr('data-number');
		var dataIncrease = parseInt($(elm).attr('data-increase'));
		var numText = parseInt($(elm).html().replace(/\,/g,''));
		if(parseInt(dataNumber)==parseInt(numText)){ return; }
		var _this = this;
		t = setInterval(function(){
			numText += dataIncrease;
			if(numText >= dataNumber){
				numText = dataNumber;
				clearInterval(t);
			}
			if(isFormat){
				$(elm).html(numText.toString().formatMoney(0,''));
			}else{
				$(elm).html(numText.toString());
			}
		},timer?timer:100);
	}

	/**
    * 鼠标滚动事件
    */
    var Wheel = function() {
        this.delta = 0;
    };
    Wheel.prototype = {
        Scroll: function(obj,callback){
            var _this = this;
            if(!obj)
            	return;
            if (obj.addEventListener) {
				obj.addEventListener("DOMMouseScroll", function(event){
					_this.wheelFn(event,callback);
                }, false);
            }
            obj.onmousewheel = obj.onmousewheel = function(event){
                _this.wheelFn(event,callback);
            };
        },
        wheelFn: function(event,callback){
            var _this = this;
            if (!event) /* For IE. */
            event = window.event;
            if (event.wheelDelta) { /* IE/Opera. */
                this.delta = event.wheelDelta / 120;
            } else if (event.detail) {
                this.delta = -event.detail / 3;
            }
            // 非零
            if (this.delta)
            _this.handle(callback);

            if (event.preventDefault)
                event.preventDefault();
            event.returnValue = false;
        },
        handle: function(callback){
            callback(function(){
                return this.delta;
            });
        }
    }

    /**
	 * 滚动屏幕添加active状态
	 */
	function ScrollScreen(){ }
	ScrollScreen.prototype.eachScroll = function(aSecondpages){
		if(!aSecondpages){
			throw new Error('aSecondpages不存在');
		}
		var top = 0;
		var aSecondpages = aSecondpages;
		aSecondpages.each(function(index,elm){
			top = $(elm).offset().top;
			if( (top - $(window).scrollTop())<=parseInt(($(window).height()/1.2)) ){
				if(!$(elm).hasClass('active')){
					$(elm).addClass('active');
				}
			}
		});
	}

	/**
	 * 调用ScrollScreen
	 */
	var startScrollScreen = function(classNames){
		if(!classNames){
			throw new Error('className不存在');
		}
		var scrollScreen = new ScrollScreen();
		var scroll = function(){
			scrollScreen.eachScroll(classNames);
		}
		scroll();
		$(window).on('scroll',function(){
			scroll();
		});
	}

	// 选项卡
	var tab = function() {
        this.setings = {
            tabId: "",
            contents: "",
            offset: "", // opacity
            eventType: 'load'
        }
        if (this.setings.tabId == "") return;
    }
    tab.prototype.init = function(opts) {
        var self = this;
        dom._extend(this.setings, opts);
        this.setings.index = 0;
        if(!document.getElementById(this.setings.tabId)){ return; }
        this.childNode = document.getElementById(this.setings.tabId).children;
        this.childPanel = document.getElementById(this.setings.contents).children;
        !dom.hasClass(this.childNode[0],'active')?dom.addClass(this.childNode[0],'active'):'';
        if (this.setings.offset == 'opacity') {
        	for (var i = 0; i < this.childPanel.length; i++) {
                dom.addClass(this.childPanel[i], 'none');
            }
            dom.removeClass(this.childPanel[0], 'none');
        } else {
            for (var i = 0; i < this.childPanel.length; i++) {
                this.childPanel[i].style.display = 'none';
            }
            this.childPanel[0].style.display = 'block';
        }
        for(var i=0;i<this.childNode.length;i++){
            (function(index){
                self.childNode[index].onclick = function(){
                	if( this.className.indexOf('active') != -1 ) return;
                    self.changeTab(this, index);
                }
            })(i);
        }
        this.setings.callBack && this.setings.callBack();
    };
    tab.prototype.changeTab = function(obj, index) {
        var self = this;
        for (var i = 0; i < this.childNode.length; i++) {
            dom.removeClass(this.childNode[i], 'active');
        }
        dom.addClass(obj, 'active');
        if (self.setings.offset == 'opacity') {
            $(this.childPanel).addClass('none').animate({'opacity':0},300).eq(index).removeClass('none').animate({'opacity':1},300);
        } else {
            for (var i = 0; i < this.childPanel.length; i++) {
                this.childPanel[i].style.display = 'none';
            }
            this.childPanel[index].style.display = 'block';
        }
        this.setings.index = index;
        this.setings.eventType = 'click';
        this.setings.callBack && this.setings.callBack(this);
    }

    var loadFixNav = function() {
		var fixedContent = $('#fixedContent');
		var sHtml = '<div class="fix-center fixed-nav">\
			<div class="fix-tel clearfix">\
				<b class="iconfont icon-dianhuazixun"></b>\
				<div class="tel-text">\
					<p class="">电话咨询</p>\
					<p class="num">010-60845501</p>\
				</div>\
			</div>\
		    <ul class="consult-ul">\
				<li>\
					<a href="http://p.qiao.baidu.com/cps/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22235934%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2210602957%22%2C%22userId%22%3A%2220299659%22%2C%22pageId%22%3A0%7D" target="_blank"><b class="iconfont icon-chanpinzixun"></b>产品咨询</a>\
				</li>\
				<li>\
					<a href="http://p.qiao.baidu.com/cps/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22235947%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2210602957%22%2C%22userId%22%3A%2220299659%22%2C%22pageId%22%3A0%7D" target="_blank"><b class="iconfont icon-shujuzixun"></b>数据咨询</a>\
				</li>\
				<li>\
					<a href="http://p.qiao.baidu.com/cps/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22238634%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2210602957%22%2C%22userId%22%3A%2220299659%22%2C%22pageId%22%3A0%7D" target="_blank"><b class="iconfont icon-kehufuwu"></b>客户服务</a>\
				</li>\
			</ul>\
		</div>\
		<div class="server-switch"><b class="iconfont icon-shujuzixun"></b></div>\
	    <ul id="fixedNav" class="list-unstyled nav-list">\
			<li class="item top-item bottom" style="display: list-item;">\
				<a href="javascript:;" class="iconfont icon-dingbu"></a>\
			</li>\
		</ul>';
		fixedContent.append(sHtml);
		var oSwitch = fixedContent.find('.server-switch'),
			oFixNav = fixedContent.find('.fixed-nav');
		oSwitch.unbind().bind('click',function(){
			oFixNav.toggleClass('on');
			$(this).toggleClass('active');
		});
	}


	/**
     * 下拉菜单
     */
    var MenuDown = function(){
        this.setings = {
            timer: null,
            node: '',
            showNode: '',
            callBack: function(){}
        }
    };
    MenuDown.prototype = {
        init:function(opts){
            $.extend(this.setings, opts || {});
            var _this  = this;
            var node = this.setings.node;
            var showNode = this.setings.showNode;
			var callBack = this.setings.callBack;
            node.each(function(idx,elm){
                $(elm).hover(function(){
					if( !$(showNode).length ) return;
					showNode.hide();
                    _this.show( $(this).next(showNode));
                },function(){
                    if( !$(showNode).length ) return;
                    _this.hide(showNode);
                });
            });
            showNode.hover(function(){
                _this.show($(this));
            },function(){
                _this.hide(showNode);
            });
        },
        show:function(elm,callBack){
            this.setings.node.addClass('on');
            this.setings.showNode.addClass('on');
            this.timer&&clearTimeout(this.timer); elm.stop(true,true).show();
            this.setings.callBack&&this.setings.callBack();
        },
        hide:function(elm){
            var _this = this;
            this.timer = setTimeout(function(){ elm.stop(true,true).hide(); _this.setings.node.removeClass('on'); _this.setings.showNode.removeClass('on'); clearTimeout(this.timer) },200);
        }
    };

    /**
     * 截取字符个数
     */
    var Midstr = function(str, len) {
	  return str ? (str.length <= len ? str : str.substring(0, len) + "...") : "";
	}

	var oMenuDown;
	return w.yf = {
		dom: dom,
		tab: function(obj){
			return new tab().init(obj);
		},
        // 下拉菜单
        menuDown: function(opts) {
            return oMenuDown ? oMenuDown.init(opts) : (oMenuDown = new MenuDown).init(opts);
        },
		ScrollCount: function(){
			return new ScrollCount();
		},
		Wheel: function(){
			return new Wheel();
		},
		startScrollScreen: function(classNames){
			return startScrollScreen(classNames);
		},
		loadFixNav: function(data) {
			return loadFixNav(data);
		},
		qiaoBaidu: function() {
			return QiaoBaidu();
		},
		midstr: function(str, len) {
			return Midstr(str, len);
		}
	}
})(window);
