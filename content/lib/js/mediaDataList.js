var media_1_data = {
	"conf": {},
	"data": [{
		"id": "",
		"title": "重磅！11月100城二手房价格出炉 哪座城市值得你安居？",
		"media": "凤凰房产",
		"url": "http://house.ifeng.com/detail/2017_12_05/51309230_0.shtml",
		"create_date": "2017-12-05",
		"create_time": "07:43"
	},
	{
		"id": "",
		"title": "全国2手房房价出炉！福州位列全国第9 均价24481元/㎡",
		"media": "乐居",
		"url": "http://fj.house.sina.com.cn/news/zhengce/2017-12-20/14416349136563712359981.shtml",
		"create_date": "2017-12-20",
		"create_time": "14:41"
	},
	{
		"id": "",
		"title": "11月二手住宅降价榜单发布 海淀你还好吗？",
		"media": "网易房产",
		"url": "http://bj.house.163.com/photonew/4EBT0007/249073.html",
		"create_date": "2017-12-16",
		"create_time": "06:42"
	},
	{
		"id": "",
		"title": "2017年上半年全国房价涨了多少?你知道吗?",
		"media": "搜狐焦点",
		"url": "https://house.focus.cn/zixun/0b3ed457a9b5bd53.html",
		"create_date": "2017-12-17",
		"create_time": "16:53"
	},
	{
		"id": "",
		"title": "最新北京房价走势！二手房房价为何一跌再跌？",
		"media": "北京时间",
		"url": "https://item.btime.com/wm/449o8gm8u3v9bvb9729qrffhprq",
		"create_date": "2017-12-14",
		"create_time": "18:06"
	}]
}

function showMedia(data_str) {
	var html = "";
	var data = data_str["data"];
	var i = 0;
	for( var j in data ) {
		if(i>4){ break; }
		html += '<li><a target="_blank" href="'+data[j].url+'" class="link" title="'+data[j].title+'">'+data[j].title+'</a><p><span class="timer">'+data[j].create_date +'&nbsp;'+ data[j].create_time+'</span><span class="source">媒体: '+data[j].media+'</span></p></li>';
		i++;
	}
	document.write(html);
}

if( typeof(showMedia) != "undefined" ){
	showMedia(media_1_data);
}