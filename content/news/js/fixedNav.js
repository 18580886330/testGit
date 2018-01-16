$(function(){
	loadFixNav();
	var _this = this;
	var timer = null;
	var fixNav = $('#fixedNav');
	var fixedContent = $('#fixedContent');
	var closeNav = $(fixedContent).find('.btn-close-fix-nav');
	var childs = fixNav.children('.item');
	var firstChild = childs.eq(0);
	var lastChild = childs.eq(childs.length-1);
	firstChild.click(function(){
		$('body,html').stop(true,false).animate({
			scrollTop: 0
		}, 800, 'easeOutQuart');
	});
	lastChild.click(function(){
		$('body,html').stop(true,false).animate({
			scrollTop: document.body.scrollHeight
		}, 800, 'easeOutQuart');
	});
	function hidden(obj){
		timer = setTimeout(function(){
			obj.removeClass('active');
        },200);
	}
	function show(obj){
		clearTimeout(timer);
		obj.addClass('active').siblings().removeClass('active');
	}
	childs.each(function(idx,elm){
		$(elm).find('a').hover(function(){
			show($(elm));
		},function(){
			hidden($(elm));
		});
		$(elm).find('.child-item').hover(function(){
			show($(elm));
		},function(){
			hidden($(elm));
		});
	});
	closeNav.click(function(){
		
		fixedContent.toggleClass('off');
		/*if(fixNav.hasClass('off')){
			fixNav.stop(true,false).animate({
				left: '40px',
			});
		}else{
			fixNav.stop(true,false).animate({
				left: '0',
			});
		}*/
	});
});
var loadFixNav = function() {
	var data = [ {
		picUrl :  "/content/lib/images/yunfangdata_weixin_code.jpg",
		name : "云房资讯公众号"
	}, {
		picUrl :  "/content/lib/images/fanggugu_weixin_code.jpg",
		name : "房估估公众号"
	} ]
	var fixedContent = document.getElementById('fixedContent');
	var sHtml = '<ul id="fixedNav" class="list-unstyled nav-list">\
		<li class="item"><a href="javascript:;" class="icon top"></a></li>\
		<li class="item">\
			<p class="tel">010-60845501</p>\
		</li>\
		<li class="item" style="height:75px;">\
			<div class="transition_03 services">\
				<p class="item" style="width:120px;"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1569135405&site=qq&menu=yes"><b class="icon c-qq"></b>在线客服1</a></p>\
				<p class="item" style="width:120px;"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2270866518&site=qq&menu=yes"><b class="icon c-qq"></b>在线客服2</a></p>\
			</div>\
		</li>\
		<li class="item" style="height:100px;">\
			<div class="transition_03 twocode">\
				<img width="98" src="'+data[0].picUrl+'">\
			</div>\
		</li>\
		<li class="item"><a href="javascript:;" class="icon bottom"></a></li>\
		<div class="icon btn-close-fix-nav"></div>\
	</ul>';
	fixedContent.innerHTML = sHtml;
}