require(['../content/third/jquery/jquery-1.8.2.min'],function(){
	
	;(function(){
		return {
			init: function() {
				this.submit();
			},
			submit:function() {
				$(".submit").on('click',function(){
					var name=$.trim($("#applyName").val());
					var phone=$.trim($("#applyPhone").val());
					var company=$.trim($("#applyCompany").val());
		            var companyType=$("input[name='industryType']:checked").val();
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
					$.ajax({
						type:'post',
						data:{
							name:name,
							mobile:phone,
							company:company,
							industry:companyType,
							source:'PC官网',
							sourceUrl:sessionStorage.getItem('url'),							
							describe:textareaContent
						},
						url:'http://www.yunfangdata.com/mall/purchaseApply',
						success: function(data) {
							if(data.success){
								layer.msg('需求已提交，请等待客服与您联系',0,function(){
									layer.closeAll();
									$('.cus-content input,.cus-content textarea').val('');
								});
							}else{
								layer.msg(data.message);
							}
						}
					});
				});
			}
		}
	})().init();
	
});