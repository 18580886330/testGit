({
	init:function(){
		this.autoH();
		this.linkTo();
	},
	autoH:function(){
		autoHei();
		window.onresize = function(){
				autoHei()
			}
		function autoHei(){
			document.getElementsByTagName('body')[0].style.height=document.documentElement.clientHeight+'px';
		}
	},
	linkTo:function(){
	    var t=setTimeout(function(){
			window.location.href="http://www.fungugu.com";
			clearTimeout(t);
		},3000);
	}
}).init();