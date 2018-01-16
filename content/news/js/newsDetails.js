
$(function(){
	$("#articleFooter").find('a').click(function() {
		if($(".disabled").length==1){
			return;
		}
		var index=$(this).index();
		var type='zan';
		if(index==0){
			type='tucao';
		}
		$.ajax({
			type: 'get',
			url: '/news/evaluate/'+type+"/"+$("#id").val(),
			dataType: 'json',
	        async: false,
			success : function(data) {
				var datas=eval(data);
				$("#zanNum").html(data.zan);
				$("#tucaoNum").html(data.tucao);
				$(".good-con").addClass("disabled");
			}
		});
	});
});