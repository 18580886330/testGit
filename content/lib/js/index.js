require(['lib/js/indexServer','third/jquery/jquery-1.8.2.min','lib/js/fixedNav'],function(indexServer){
	~function(){
		var off = true;
		var iSpeed = 400;
		var scrollIndex = 0;
		var doc = document.getElementById("body");
		var screenLen = $('section.screen-item').length;
		var screenArr = ['.banner-fluid','.serve-content','.core-business','.partners'];
		// doc.style.overflow="hidden";
		return {
			init:function(){
				this.slidePro();
				this.load();
				// this.autoSize();
				// this.scrollScreen();
				this.tabFn();
				// this.serveEffect();
				this.fixNav();
				this.newsDynamic();
				this.hotarticle();
				// this.mediaReport();
				yf.qiaoBaidu();
			},
			load: function() {
				var _this = this;
		    	// 首页所有图片
		    	var imgs = $('img[_src]');
		    	for (var i = 0; i < imgs.length; i++) {
		    		$(imgs).eq(i).attr('src',$(imgs).eq(i).attr('_src'));
		    	};
	    		$('#load').remove();
		    	// 首页banner大图
		    	/*var lis = $('#bannerFluid').find('.screen-item');
		    	for (var i = 0; i < lis.length; i++) {
		    		$(lis[i]).css({
		    			background: 'url('+$(lis).eq(i).attr('_src') + ') 50% center',
		    			'background-size': 'cover'
		    		});
		    	};*/
			},
			slidePro: function() {
				var sHtml = '<ul class="slide-content list-unstyled">';
				indexServer.slidePro().success(function(data){
					var data = data.data;
					for( var i=0; i<data.length; i++ ) {
						var d = data[i];
						sHtml += '<li class="screen-item item" style="background: url('+d.pageUrl+') 50% center; background-size:cover;">\
		              	<div class="screen-panel">';
			              	sHtml += '<div class="banner-slogan '+(d.lbtype=='有标题,居中'?'banner-center':'')+'">\
					            <h1>'+d.bigBT+'</h1>\
					            <h3>'+d.smallBT+'</h3>\
					            <a target="_blank" href="'+d.buttonLink+'" class="btn">'+d.buttonName+'</a>\
			              	</div>';
			              	if(d.lbtype == '有标题有图'){
			              		sHtml += '<div class="proimg"><img src="http://img.yunfangdata.com/9ae05fd8-e6f9-11e7-bcd2-00163e064655.png"></div>';
			              	}
		              	sHtml += '</div>\
		              </li>';
					}
					/*<ul class="slide-content list-unstyled">
		              <li class="screen-item item" style="background: url(http://img.yunfangdata.com/7a332ab8-e6f9-11e7-b337-00163e064655.jpg) 50% center; background-size:cover;">
		              	<div class="screen-panel">
			              	<div class="banner-slogan">
					            <h1>房估估，发现房产价值</h1>
					            <h3>独立第三方估值服务平台</h3>
					            <a target="_blank" href="http://www.fungugu.com/" class="btn">免费试用</a>
			              	</div>
			              	<div class="proimg"><img src="http://img.yunfangdata.com/9ae05fd8-e6f9-11e7-bcd2-00163e064655.png"></div>
		              	</div>
		              </li>
		              <li class="screen-item item" style="background: url(http://img.yunfangdata.com/84699440-e6f9-11e7-afc4-00163e064655.jpg) 50% center; background-size:cover;">
		              	<div class="screen-panel">
			              	<div class="banner-slogan banner-center">
					            <h1>智子数库，建档全国房产洞彻全链交易</h1>
					            <h3>房地产全交易链数据服务平台</h3>
					            <a target="_blank" href="http://zhizi.yunfangdata.com/#/login" class="btn">免费试用</a>
			              	</div>
		              	</div>
		              </li>
		          </ul>*/
		          sHtml+= '</ul><div class="slide-active">\
		              <div class="list">\
		                 <ul class="slide-ul unmargin-index list-unstyled">';
		                 	sHtml += '<li class="item active"></li>';
		                 	for( var i=0; i<data.length-1; i++ ) {
		                 		sHtml += '<li class="item"></li>';
		                 	}
		                 sHtml += '</ul>\
		             </div>\
		          </div>';
		          $('#bannerFluid').html(sHtml);
				}).error(function(e){});
			},
			tabFn: function() {
				yf.tab({
					tabId: 'cooperationHd',
					contents: 'cooperationBd',
					offset: 'opacity',
					callBack: function() {
						var _this = this;
						document.getElementById(this.contents).style.height = $('#'+this.contents).children().eq(this.index).outerHeight()+80+'px';
						setTimeout(function(){
							$('#'+_this.contents).removeAttr('style');
						},500);
						//document.getElementById(this.contents).removeAttribute('style');
						// this.setings.contents
					}
				});
			},
			// 新闻动态
			newsDynamic: function() {
				var html = '';
				indexServer.newsDynamic().
				success(function(data){
					var data = data.data[0],
						oNewsDynamic = $('#newsDynamic');
					html+='<div class="pic">\
							<img alt="'+data.altStr+'" class="img" src="'+data.imageUrl+'">\
						</div>\
						<a target="_blank" href="articleDetails.html?id='+data.id+'" title="'+data.title+'" class="link">'+data.title+'</a>\
						<p class="timer">'+data.releaseTime+'</p>\
						<p class="detail">'+yf.midstr(data.abstract,42)+'</p>\
						<p class="btns"><a target="_blank" href="articleDetails.html?id='+data.id+'" class="btn">查看详情</a></p>';
					oNewsDynamic.append(html);
				}).error(function(e){});
			},
			/**
			 * 研究中心
			 */
			hotarticle: function() {
				var html = '';
				indexServer.hotarticle().
				success(function(data){
					var data = data.data,
						oResearchCenter = $('#researchCenter');
					html += '<ul class="list">';
						for(var i=0; i<data.length; i++) {
							var d = data[i];
							html += '<li><a target="_blank" href="articleDetails.html?id='+d.id+'" title="'+d.title+'">'+d.title+'</a><span class="timer">'+d.releaseTime+'</span></li>';
						}
					html += '</ul>';
					oResearchCenter.append(html);
				}).error(function(e){});
			},
			/**
			 * 媒体报道
			 */
			mediaReport: function() {
				return;
				var html = '';
				indexServer.mediaReport().
				success(function(data){
					var data = data.data,
						oMediaReport = $('#mediaReport');
					html += '<ul class="list">';
						for(var i=0; i<data.length; i++) {
							var d = data[i];
							html += '<li>\
								<a target="_blank" href="articleDetails.html?id='+d.id+'" class="link">'+d.title+'</a>\
								<p><span class="timer">'+d.releaseTime+'</span><span class="source">媒体: 新浪地产 </span></p>\
							</li>';
						}
					html += '</ul>';
					oMediaReport.append(html);
				}).error(function(e){});
			},
			/*autoSize:function(){
				var screenItems = $('.screen-item');
				screenItems.css({
					width: $(window).width(),
					//height: $(window).height()
				});
				$(window).resize(function(){
					if($(window).width()<=500){
						return;
					}
					screenItems = $('.screen-item');
					screenItems.css({
						width: $(window).width(),
						//height: $(window).height()
					});
					$('.partners-group').css({
						width: 'auto'
					});
					$('body,html').animate({
		    			scrollTop: scrollIndex*$(window).height()
		    		}, 10);
				});
				$('body,html').animate({
	    			scrollTop: 0
	    		}, 300);
			},*/
			/*scrollScreen:function(){
				var _this = this;
				var wheel = yf.Wheel();
				wheel.Scroll(doc,function(event){
			    	scrollI = wheel.delta;
			    	if(scrollI<0){
			    		_this.startMove(0);
			    	}else{
			    		_this.startMove(1);
			    	}
			    	off = false;
				});
			},*/
			fixNav:function(){
				var _this = this;
				var timer = null;
				var fixNav = $('#fixedNav');
				//var closeNav = fixNav.next('.close-fix-nav');

				var childs = fixNav.children('.item');
				/*var prev = fixNav.find('.prev-item');
				var next = fixNav.find('.next-item');*/
				this.top = childs.eq(childs.length-1);
				this.top.hide();
				/*prev.click(function(){
					if(screenLen){
						_this.startMove(1);
						off = false;
					}else{
						$('body,html').stop(true,false).animate({
			    			scrollTop: document.body.scrollHeight
			    		}, 200);
					}
				});
				next.click(function(){
					if(screenLen){
						_this.startMove(0);
						off = false;
					}else{
						$('body,html').stop(true,false).animate({
			    			scrollTop: 0
			    		}, 200);
					}
				});*/
				this.top.click(function(){
					$('body,html').stop(true,false).animate({
		    			scrollTop: 0
					}, 200, function(){
						_this.top.hide();
					});
					scrollIndex = 0;
				});
			},
			/*startMove:function(type){
				if(!off){ return false; }
				if(!type){
					scrollIndex++;
				}else{
					scrollIndex--;
				}
				this.moveType();
			},
			moveType:function(){
				if( scrollIndex>=screenLen ){
					scrollIndex = screenLen-1;
				}else if(scrollIndex<0){
					scrollIndex = 0;
				}
				// screenArr 给滚动到的当前屏幕添加active
				if(!$(screenArr[scrollIndex]).hasClass('active')){
					$(screenArr[scrollIndex]).addClass('active');
				}
				$('body,html').stop(true,false).animate({
	    			scrollTop: scrollIndex*$(window).height()
	    		}, 200);
				setTimeout(function(){ off = true; },iSpeed);
				if(scrollIndex<=0){
					this.top.hide();
				}else{
					this.top.show();
				}
			},*/
			/**
			 * 服务行业
			 */
			/*serveEffect:function(){
				var serve = $("#serve");
				var childs = serve.find('.item');
				childs.each(function(idx,elm){
					$(elm).hover(function(){
						$(this).addClass('slide-up');
					},function(){
						$(this).removeClass('slide-up');
					});
				});
			}*/
		}
	}().init();
});
