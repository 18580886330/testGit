require(['lib/js/mallServices','third/jquery/jquery-1.8.2.min','lib/js/page.min'],function(mallservice){
	//数据筛选
	!function(){
		return{
			init:function(){
				this.clickPurchase();
				this.dataDetails();
			},
			clickPurchase:function(){
				var _this=this;			
				$('.purchaseData').on('click',function(){					
					layer.open({
					  type: 1,
					  skin: '', 
					  title:' ',
					  move:false,
					  area: ['400px', '450px'], //宽高
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
				})	
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
					}
				})
			},
			submit:function(data){
				$(".data-mall").on('click','.submit',function(){								
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
			},
			dataDetails:function(){
				var _this = this;
				if($(".data-details").length){
					var form={'id':window.location.href.split('_')[2].split('.')[0]}
					mallservice.getProductById(form)
					.success(function(data){							
						_this.submit(data);						
					})
				}
			}
		}
	}().init()
})