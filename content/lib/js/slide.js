/**
 * @authors Your Name (you@example.org)
 * @date    2016-05-31 10:48:28
 * @version $Id$
 */

;(function($,window,document,undefined){
	var Slide = function(elms,opts,callBack){
		this.contentWrap = elms;        // 调用Slide对象本身
		this.defaults = {
			slideContent:"",            // 滚动的主体部分
			slideActive:"",             // 小圆点外层ul
			offset:"",                  // 1.透明度变化(opacity) 2.左右轮播(scrollX) 3.上下轮播(scrollY)
			easing: "easeOutQuad",      // 动画效果
			interval:3000,              // 动画间隔时间
			autoPlay:true,              // 是否自动播放/默认自动播放
			focus:false,                // 鼠标移入时是否继续播放true: 暂停播放,false: 默认继续播放
			prevBtn:"",                 // 向上按钮
			nextBtn:"",                 // 向下按钮
			eventType: 'hover',         // 点击播放/鼠标移入播放
			callBack:callBack
		};
		this.settings = $.extend({},this.defaults,opts);
	};
	Slide.prototype = {
		init: function(){
			var _this = this;
			this.slideContent = this.contentWrap.find(this.settings.slideContent);
			this.slideActive = this.contentWrap.find(this.settings.slideActive);
			this.oBtnPrev = this.contentWrap.find(this.settings.prevBtn);
			this.oBtnNext = this.contentWrap.find(this.settings.nextBtn);
			this.offset = this.settings.offset;                      // 动画效果
			this.easing = this.settings.easing;                      // 动画效果
			this.aContentItems = $(this.slideContent).children();    // 保存子元素个数
			this.slideActiveItems = $(this.slideActive).children();  // 保存圆点个数
			this.len = this.aContentItems.length;                    // 元素个数
			this.elmWidth = 0;                                       // 第一个子元素的宽度
			this.index = 0;                                          // 当前动画的下标位置
			this.off = true;                                         // 防止点击次数过多
			this.iSpeed = 300;                                       // 动画执行间隔时间
			this.interval = this.settings.interval;                  // 自动播放的时间
			this.intervalTimer = 0;                                  // 自动播放定时器,用于管制点击时先停止定时器,间隔interval时间再次播放下一张
			this.isHover = false;                                    // 是否已点击,一般用于focus属性为ture时起作用
			this.eventType = this.settings.eventType;                // 点击播放/鼠标移入播放
			/*
			* 延时初始化dom结构,保证dom渲染完毕
			* 默认 opacityInit();
			*/
			setTimeout(function(){
				switch(_this.offset){
					case "auto":
						_this.autoInit();
					break;
					case "opacity":
						_this.opacityInit();
					break;
					case "scrollX":
					case "scrollY":
						_this.scrollInit();
					break;
					default:
						_this.autoInit();
					break;
				}
			},30);
			this.playNext();
			this.playPrev();
			this.settings.autoPlay&&this.autoPlay();
			this.bindEvent();
			this.callBackFn();
		},
		callBackFn:function(){
			var _this = this;
			var tempIndex;
			if( _this.offset == 'auto' || _this.offset == 'opacity' ){
				tempIndex = _this.index;
			}else{
				tempIndex = _this.index>=_this.aContentItems.length-1?0:_this.index;
			}
			this.settings.callBack&&this.settings.callBack({index:tempIndex,content: _this});
		},
		autoInit:function(){
			this.aContentItems.removeClass("active").eq(0).addClass("active");
			this.aContentItems.hide().eq(this.index).show();
		},
		/**
		* 初始化透明度动画方式的状态
		*/
		opacityInit:function(){
			var _this = this;
			_this.aContentItems.removeClass("active").eq(0).addClass("active");
			_this.aContentItems.hide().eq(_this.index).show();
			_this.slideContent.css({
				width:"100%",
				position:"relative"
			});
			_this.aContentItems.each(function(idx,elm){
				$(elm).css({
					position:"absolute"
				});
			});
		},
		/**
		* 初始化左右轮播动画方式的状态
		*/
		scrollInit:function(){
			var _this = this;
			_this.elmWidth = parseInt(_this.aContentItems.eq(0).width());
			_this.elmHeight = parseInt(_this.aContentItems.eq(0).width());
			
			/*$(window).resize(function(){
				_this.elmWidth = parseInt(_this.aContentItems.eq(0).width());
				_this.elmHeight = parseInt(_this.aContentItems.eq(0).width());
				console.log(_this.elmWidth*_this.len+"px")
				_this.slideContent.css({
					left:-_this.index*_this.elmWidth+"px",
					width:_this.elmWidth*_this.len+"px"
				});
			});*/

			_this.aContentItems.css({
				float:"left",
				width:_this.elmWidth+"px"
			});
			if(_this.aContentItems.length>1){
				_this.slideContent.append(_this.aContentItems.eq(0).clone());
			}
			_this.len = _this.slideContent.children().length;
			if(_this.offset=="scrollX"){
				_this.slideContent.css({
					position:"relative",
					width:_this.elmWidth*_this.len+"px"
				});
			}else if(_this.offset=="scrollY"){
				_this.slideContent.css({
					position:"relative",
					height:_this.elmHeight*_this.len+"px"
				});
			}
			_this.aContentItems = $(_this.slideContent).children();
		},
		/**
		 * 没有动效的切换
		 */
		autoFn:function(idx){
			var _this = this;
			idx>=this.len?idx=0:0>idx&&(idx=this.len-1);this.index=idx;
			_this.aContentItems.removeClass("active").eq(idx).addClass("active");
			_this.slideActiveItems.removeClass("active").eq(idx).addClass("active");
			this.aContentItems.hide().eq(_this.index).show();
			_this.callBackFn();
		},
		/**
		* 淡入淡出动画
		*/
		opacityFn:function(idx){
			var _this = this;
			idx>=this.len?idx=0:0>idx&&(idx=this.len-1);this.index=idx;
			console.log(idx);

			_this.aContentItems.removeClass("active").eq(idx).addClass("active");
			_this.slideActiveItems.removeClass("active").eq(idx).addClass("active");
			this.aContentItems.fadeOut('fast').eq(_this.index).fadeIn('fast');
			_this.callBackFn();
		},
		/**
		* 左右无缝轮播动画
		*/
		scrollXFn:function(){
			var _this = this;
			var tempIndex = 0;
			// 上一张
			if(_this.scrollType){
				if(_this.index<0){
					_this.index = _this.aContentItems.length-1;
					_this.slideContent.css("left",-this.index*_this.elmWidth+"px");
					_this.index--;
				}
        		_this.slideContent.stop(true,false).animate({"left":-_this.index*_this.elmWidth+"px"},500,_this.easing,function(){});
			}else{
				// 下一张
				if(_this.index>=_this.aContentItems.length){
        			_this.slideContent.css("left",0);
	        		_this.index = 1;
        		}
	        	this.slideContent.stop(true,false).animate({"left":-_this.index*_this.elmWidth+"px"},500,_this.easing,function(){});
			}
			tempIndex = _this.index;
			_this.index >= _this.aContentItems.length-1&&(tempIndex=0);
    		_this.slideActiveItems.removeClass("active").eq(tempIndex).addClass("active");
    		_this.callBackFn();
		},
		/**
		* 上下无缝轮播动画
		*/
		scrollYFn:function(){
			var _this = this;
			var tempIndex = 0;
			// 上一张
			if(_this.scrollType){
				if(_this.index<0){
					_this.index = _this.aContentItems.length-1;
					_this.slideContent.css("top",-this.index*_this.elmHeight+"px");
					_this.index--;
				}
        		_this.slideContent.stop(true,false).animate({"top":-_this.index*_this.elmHeight+"px"},500,_this.easing,function(){});
			}else{
				// 下一张
				if(_this.index==_this.aContentItems.length){
        			_this.slideContent.css("top",0);
	        		_this.index = 1;
        		}
	        	this.slideContent.stop(true,false).animate({"top":-_this.index*_this.elmHeight+"px"},500,_this.easing,function(){});
			}
			tempIndex = _this.index;
			_this.index >= _this.aContentItems.length-1&&(tempIndex=0);
    		_this.slideActiveItems.removeClass("active").eq(tempIndex).addClass("active");
		},
		/**
		* 播放下一张
		*/
		playNext:function(){
			var _this = this;
			_this.oBtnNext.click(function(){
				_this.checkAutoPlay();
				_this.startMove(0);
				_this.off = false;
			});
		},
		/**
		* 播放上一张
		*/
		playPrev:function(){
			var _this = this;
			_this.oBtnPrev.click(function(){
				_this.checkAutoPlay();
				_this.startMove(1);
				_this.off = false;
			});
		},
		/**
		* type:1 上一张
		* type:0 下一张
		*/
		startMove:function(type){
			this.scrollType = type;
			if(!this.off){
				return false;
			}
			this.scrollType?this.index--:this.index++;
			this.moveType(this.index);
		},
		/**
		* 对圆点绑定click事件
		*/
		bindEvent:function(){
			var _this = this;
			this.slideActiveItems.each(function(idx,elm){
				if(_this.eventType=='click'){
					$(elm).click(function(){
						_this.checkAutoPlay();
						if(_this.index==idx)
							return;
						_this.moveType(idx);
					});
				}else{
					$(elm).hover(function(){
						_this.checkAutoPlay();
						if(_this.index==idx)
							return;
						_this.moveType(idx);
					});
				}
			});
		},
		/**
		* 自动播放
		*/
		autoPlay:function(){
			var _this = this;
			this.playTime = 0;
			more();
			if(this.settings.focus){
				this.contentWrap.hover(function(){
					_this.isHover = true;
					_this.intervalTimer&&clearInterval(_this.intervalTimer);
				},function(){
					more();
				});
			}
			function more(){
				_this.intervalTimer = setInterval(function(){
					_this.startMove(0);
				},_this.interval);
			}
		},
		/**
		 * 点击按钮时检测是否存在自动滚动的情况,先清除定时状态再重新启用
		 */
		checkAutoPlay: function(){
			if(this.intervalTimer){
				clearInterval(this.intervalTimer);
				if(!this.isHover){
					this.autoPlay();
				}
			}
		},
		/**
		* 动画类型
		*/
		moveType:function(idx){
			var _this = this;this.index = idx;clearTimeout(t);var t=setTimeout(function(){_this.off=true},_this.iSpeed);
	    	switch(this.offset){
				case "auto":
					_this.autoFn(idx);
				break;
				case "opacity":
					_this.opacityFn(idx);
				break;
				case "scrollX":
					_this.scrollXFn();
				break;
				case "scrollY":
					_this.scrollYFn();
				break;
				default:
					_this.autoFn(idx);
				break;
			}
		}
	};
	$.fn.Slide = function(options,callBack){
		return new Slide(this,options,callBack).init();
	};
})(jQuery,window,document);
