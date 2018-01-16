define(function(){
	var baseurl='/';
	//var baseurl='http://192.168.140.1/yunfangData2017/';

	/*var baseurl='192.168.5.206:82'; 绝对路径*/
	/**
	 * navData: 头部数据
	 */
	var navData = {
		baseInfo:{
			logoUrl: baseurl+'content/lib/images/logo.png',
			indexUrl: baseurl+'index.html',
			jobLogUrl: baseurl+'content/lib/images/job.png'
		},
		data:[{
			firstNav: {
				nav: '首页',
				href: baseurl+'index.html',
				target: '_self'
			},
			childs:{}
		},{
			firstNav: {
				nav: '数据',
				href: ''
			},
			childs:{
				navs: ['数据提供','数据API'],
				href: [baseurl+'dataSupply.html',baseurl+'dataapi.html'],
				target: ['_self','_self']				
			}
		},{
			firstNav: {
				nav: '行业',
				href: ''
			},
			childs:{
				navs: ['金融','地税','评估','地产'],
				href: [baseurl+'jinrong.html',baseurl+'dishui.html',baseurl+'pinggu.html',baseurl+'dichan.html'],
				target: ['_self','_self','_self','_self']
			}
		},{
			firstNav: {
				nav: '产品',
				href: ''
			},
			childs:{
				navs:['房估估','评E评','外采系统','批量评估','智子数库'],
				href: [baseurl+'houseload.html','http://pep.yunfangdata.com/',baseurl+'datacollection.html','http://mass.yunfangdata.com/#/login','http://zhizi.yunfangdata.com/#/login'],
				target: ['_self','_blank','_self','_blank','_blank']
			}
		},{
			firstNav: {
				nav: '研究中心',
				href : baseurl+ "news_001.html"
			},
			childs : {
				navs : [ "市场报告", "精选专题", "房价指数", "云房观点" ],
				href : [ baseurl+ "news_001.html",
						baseurl+ "news_002.html",
						baseurl+ "news_003.html",
						baseurl+ "news_004.html" ],
				target: ['_self','_self','_self','_self']
			}
		},{
			firstNav: {
				nav: '关于我们',
				href: baseurl+'aboutUs.html'
			},
			childs:{
				navs:['公司简介','团队介绍','发展历程','联系我们'],
				href:[baseurl+'aboutUs.html#companyProfile',baseurl+'aboutUs.html#teamIntroduction',baseurl+'aboutUs.html#development',baseurl+'aboutUs.html#contactUs'],
				target: ['_self','_self','_self','_self']
			}
		}]
	};

	var footerData = {
		baseInfo: {
			copyright: '北京云房数据技术有限责任公司 | 网络经营许可证 京ICP备13050679号-2©2015 房估估Fungugu.com 版权所有'
		},
		weixinCode: [{
			picUrl: baseurl+'content/lib/images/yunfangdata_weixin_code.jpg',
			name: '云房资讯公众号'
		},{
			picUrl: baseurl+'content/lib/images/fanggugu_weixin_code.jpg',
			name: '房估估公众号'
		}],
		data: [{
			title: '首页 HOME',
			childs: {
				navs:['网站地图'],
				href:[baseurl+'sitemap.html'],
				target: ['_self']
			}
		},{
			title: '数据',
			childs: {
				navs: ['数据提供','数据API'],
				href: [baseurl+'dataSupply.html',baseurl+'dataapi.html'],
				target: ['_self','_self']
			}
		},{
			title: '行业',
			childs: {
				navs: ['金融','地税','评估','地产'],
				href: [baseurl+'jinrong.html',baseurl+'dishui.html',baseurl+'pinggu.html',baseurl+'dichan.html'],
				target: ['_self','_self','_self','_self']
			}
		},{
			title: '产品',
			childs: {
				navs:['房估估','评E评','外采系统','批量评估','智子数库'],
				href: [baseurl+'houseload.html','http://pep.yunfangdata.com/',baseurl+'datacollection.html','http://mass.yunfangdata.com/#/login','http://zhizi.yunfangdata.com/#/login'],
				target: ['_self','_blank','_self','_blank','_blank']
			}
		},{
			title: '研究中心',
			href : baseurl+ "news_001.html",
			childs : {
				navs : [ "市场报告", "精选专题", "房价指数", "云房观点" ],
				href : [ baseurl+ "news_001.html",
						baseurl+ "news_002.html",
						baseurl+ "news_003.html",
						baseurl+ "news_004.html" ],
				target: ['_self','_self','_self','_self']
			}
		},{
			title: '关于我们',
			href: baseurl+'aboutUs.html',
			childs: {
				navs:['公司简介','团队介绍','发展历程','联系我们'],
				href:[baseurl+'aboutUs.html#companyProfile',baseurl+'aboutUs.html#teamIntroduction',baseurl+'aboutUs.html#development',baseurl+'aboutUs.html#contactUs'],
				target: ['_self','_self','_self','_self']
			}
		}]
	};

	var solutionData = {
		data:[{
			title: '金融行业解决方案',
			list: {
				name: ['批量评估解决方案','房产数据解决方案','评估业务分发管理系统解决方案','在线评估解决方案'],
				link: [baseurl+'jinrong3_1.html',baseurl+'jinrong3_2.html',baseurl+'jinrong3_3.html',baseurl+'jinrong3_4.html']
			}
		},{
			title: '地税行业解决方案',
			list: {
				name: ['存量房交易计税批量评估','交易计税评估系统建设','房地产模拟评税'],
				link: [baseurl+'dishui3_1.html',baseurl+'dishui3_2.html',baseurl+'dishui3_3.html']
			}
		},{
			title: '评估行业解决方案',
			list: {
				name: ['全流程估价作业系统解决方案','业务合作解决方案','自动估值及房产数据库解决方案'],
				link: [baseurl+'pinggu3_3.html',baseurl+'pinggu3_1.html',baseurl+'pinggu3_2.html']
			}
		},{
			title: '地产行业解决方案',
			list: {
				name: ['地产行业解决方案'],
				link: [baseurl+'dichan3_1.html']
			}
		}
		]
	};
	var siteMapData = {
		solutionData:[{
			title: '金融',
			list: {
				name: ['批量评估解决方案','房产数据解决方案','评估业务分发管理系统解决方案','在线评估解决方案'],
				link: [baseurl+'jinrong3_1.html',baseurl+'jinrong3_2.html',baseurl+'jinrong3_3.html',baseurl+'jinrong3_4.html']
			}
		},{
			title: '地税',
			list: {
				name: ['存量房交易计税批量评估','交易计税评估系统建设','房地产模拟评税'],
				link: [baseurl+'dishui3_1.html',baseurl+'dishui3_2.html',baseurl+'dishui3_3.html']
			}
		},{
			title: '评估',
			list: {
				name: ['全流程估价作业系统解决方案','业务合作解决方案','自动估值及房产数据库解决方案'],
				link: [baseurl+'pinggu3_3.html',baseurl+'pinggu3_1.html',baseurl+'pinggu3_2.html']
			}
		},{
			title: '地产',
			list: {
				name: ['地产行业解决方案'],
				link: [baseurl+'dichan3_1.html']
			}
		}
		],
		researchData:
		{
			title: '研究中心',
			list : {
				name : [ "市场报告", "精选专题", "房价指数", "云房观点" ],
				link : [ baseurl+ "news_001.html",
						baseurl+ "news_002.html",
						baseurl+ "news_003.html",
						baseurl+ "news_004.html" ]
			}
		},
		aboutUsData:
		{
			title: '关于我们',
			list: {
				name: ['公司简介','团队介绍','发展历程','联系我们'],
				link: [baseurl+'aboutUs.html#companyProfile',baseurl+'aboutUs.html#teamIntroduction',baseurl+'aboutUs.html#development',baseurl+'aboutUs.html#contactUs']
			}
		}
	};
	var apiTreeData = {
		liIndex:0,
		aIndex:0,
		tel:'010-60845501',
		data:[{
			title: '房屋价格类',
			list: {
				name: ['房屋询价接口','议价空间接口','成交周期接口','税金查询接口'],
				link: [baseurl+'dataapi/api_001.html',baseurl+'dataapi/api_003.html',baseurl+'dataapi/api_004.html',baseurl+'dataapi/api_005.html'],
				ids: ['api_001','api_003','api_004','api_005']
			}
		},{
			title: '价格走势类',
			list: {
				name: ['查询小区、行政区价格走势接口'],
				link: [baseurl+'dataapi/api_007.html'],
				ids: ['api_007']
			}
		},{
			title: '案例信息类',
			list: {
				name: ['获取小区案例信息接口','获取不同案例信息接口'],
				link: [baseurl+'dataapi/api_012.html',baseurl+'dataapi/api_013.html'],
				ids: ['api_012','api_013']
			}
		},{
			title: '小区基本信息类',
			list: {
				name: ['获取小区照片接口','小区百度坐标接口','小区基础信息接口'],
				link: [baseurl+'dataapi/api_028.html',baseurl+'dataapi/api_029.html',baseurl+'dataapi/api_031.html'],
				ids: ['api_028','api_029','api_031']
			}
		},{
			title: '小区周边信息类',
			list: {
				name: ['小区周边配套接口','周边小区均价接口'],
				link: [baseurl+'dataapi/api_032.html',baseurl+'dataapi/api_033.html'],
				ids: ['api_032','api_033']
			}
		},{
			title: '统计图表类',
			list: {
				name: ['获取案例散点图信息接口','出租案例散点图接口','投资回报率接口'],
				link: [baseurl+'dataapi/api_015.html',baseurl+'dataapi/api_017.html',baseurl+'dataapi/api_018.html'],
				ids: ['api_015','api_017','api_018']
			}
		},{
			title: '模糊匹配类',
			list: {
				name: ['小区模糊匹配接口','根据小区名称获取楼幢名'],
				link: [baseurl+'dataapi/api_019.html',baseurl+'dataapi/api_020.html'],
				ids: ['api_019','api_020']
			}
		},{
			title: '其他接口',
			list: {
				name: ['获取特殊因素接口','获取小区询价记录接口'],
				link: [baseurl+'dataapi/api_023.html',baseurl+'dataapi/api_025.html'],
				ids: ['api_023','api_025']
			}
		}
		]
	};

	return {
		navData: navData,
		footerData: footerData,
		solutionData: solutionData,
		apiTreeData: apiTreeData,
		siteMapData: siteMapData
	}
});
