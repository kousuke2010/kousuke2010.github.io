/***********************************************
功能说明:自选快捷方式设置
日期：2014-03-14
作者：James.pu
***********************************************/
$(document).ready(function(){
	//底部浮动条"热门"事件绑定[弹出快捷方式窗口]
	$("#shortcuts_self_show").click(function(){
		$("#shortcuts_self").slideDown("fast",function(){
			setShortcuts.loadShortcutsSelf();
		});
	});
   //关闭快捷方式窗口
   $("#shortcuts_self_hide").click(function(){
	   $("#shortcuts_self").slideUp("fast");
   });
});

/**
 * 封装自选快捷方式设置操作
 */
var setShortcuts={
	
	/**所有快捷方式项**/
	_optionals:{
		"1":{"title_zh":"真实开户","title_tw":"真實開戶","href_zh":"/zh/realaccount_open.html","href_tw":"/tw/realaccount_open.html"},
		"2":{"title_zh":"模拟开户","title_tw":"模擬開戶","href_zh":"/zh/account_02.html","href_tw":"/tw/account_02.html"},
		"3":{"title_zh":"伦敦金报价及走势","title_tw":"倫敦金報價及走勢","href_zh":"/zh/quote-gold.html","href_tw":"/tw/quote-gold.html","add_class":"add-sfon"},
		"4":{"title_zh":"平台下载","title_tw":"平台下載","href_zh":"/zh/download.html","href_tw":"/tw/download.html"},
		"5":{"title_zh":"即时报价","title_tw":"即時報價","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html"},
		"6":{"title_zh":"财经资讯","title_tw":"財經資訊","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"7":{"title_zh":"金道优势","title_tw":"金道優勢","href_zh":"/zh/advantage.html","href_tw":"/tw/advantage.html"},
		"8":{"title_zh":"交易指南","title_tw":"交易指南","href_zh":"/zh/trade_guide.html","href_tw":"/tw/trade_guide.html"},
		"9":{"title_zh":"联系我们","title_tw":"聯繫我們","href_zh":"/zh/contact.html","href_tw":"/tw/contact.html"},
		"10":{"title_zh":"账户简介","title_tw":"賬戶簡介","href_zh":"/zh/account_info.html","href_tw":"/tw/account_info.html"},
		"11":{"title_zh":"推广优惠","title_tw":"推廣優惠","href_zh":"/zh/subjectlist.html","href_tw":"/tw/subjectlist.html"},
		"12":{"title_zh":"黄金头条","title_tw":"黃金頭條","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"13":{"title_zh":"财经新闻","title_tw":"財經新聞","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"14":{"title_zh":"交易场动态","title_tw":"交易場動態","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html","add_class":"add-sfon"},
		"15":{"title_zh":"金银产业快讯","title_tw":"金銀產業快訊","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html","add_class":"add-sfon"},
		"16":{"title_zh":"每日金评","title_tw":"每日評論","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"17":{"title_zh":"即市评论","title_tw":"即市評論","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"18":{"title_zh":"交易策略","title_tw":"交易策略","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"19":{"title_zh":"金道周评","title_tw":"金道周評","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"20":{"title_zh":"金道专栏","title_tw":"金道專欄","href_zh":"/zh/finance_news.html","href_tw":"/tw/finance_news.html"},
		"21":{"title_zh":"财经日历","title_tw":"財經日曆","href_zh":"/zh/finance/index.html","href_tw":"/tw/finance/index.html"},
		"22":{"title_zh":"贵金属报价","title_tw":"貴金屬報價","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html","add_class":"add-sfon"},
		"23":{"title_zh":"环球商品报价","title_tw":"環球商品報價","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html","add_class":"add-sfon"},
		"24":{"title_zh":"贵金属库存","title_tw":"貴金屬庫存","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html","add_class":"add-sfon"},
		"25":{"title_zh":"外汇牌价","title_tw":"外匯牌價","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html"},
		"26":{"title_zh":"国债收益率","title_tw":"國債收益率","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html","add_class":"add-sfon"},
		"27":{"title_zh":"股票指数","title_tw":"股票指數","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html"},
		"28":{"title_zh":"央行利率","title_tw":"央行利率","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html"},
		"29":{"title_zh":"CFTC持仓比例","title_tw":"CFTC持倉比例","href_zh":"/zh/quote.html","href_tw":"/tw/quote.html","add_class":"add-sfon"},
		"30":{"title_zh":"伦敦银报价及走势","title_tw":"倫敦銀報價及走勢","href_zh":"/zh/quote-silver.html","href_tw":"/tw/quote-silver.html","add_class":"add-sfon"},
		"31":{"title_zh":"纽约期油报价及走势","title_tw":"紐約期油報價及走勢","href_zh":"/zh/quote-oil.html","href_tw":"/tw/quote-oil.html","add_class":"add-sfon"},
		"32":{"title_zh":"美元指数报价及走势","title_tw":"美元指數報價及走勢","href_zh":"/zh/quote-usd.html","href_tw":"/tw/quote-usd.html","add_class":"add-sfon"},
		"33":{"title_zh":"多媒体中心","title_tw":"多媒體中心","href_zh":"/zh/goldchannel/goldchannel.html","href_tw":"/tw/goldchannel/goldchannel.html"},
		"34":{"title_zh":"策略分析","title_tw":"策略分析","href_zh":"/zh/goldchannel/goldchannel.html","href_tw":"/tw/goldchannel/goldchannel.html"},
		"35":{"title_zh":"教学视频","title_tw":"教學視頻","href_zh":"/zh/goldchannel/goldchannel.html","href_tw":"/tw/goldchannel/goldchannel.html"},
	},
	
	/**从cookie读取已选择项**/
	shortcutsCookie:[],
	
	/**语言版本**/
	langStr:function(){
		var url=location.href;
		if(url.indexOf("/tw/")!=-1){
			return "tw";
		}
		else{
			return "zh";
		}
	},
	
	/**加载自定义快捷方式**/
	loadShortcutsSelf:function(){
		shortcutsCookie=this.getShortcutsCookie("m24khk_shortcuts_selected");
		if(typeof(shortcutsCookie)!='undefined' && shortcutsCookie!=null && shortcutsCookie.length>0){
			var lang=this.langStr();
			var innerHTML=[];
			$("#shortcuts_self_list").html("");
			//默认两个选项
			if("tw"==lang){
				innerHTML.push("<li><a href='"+this._optionals['1']['href_tw']+"'><i class='icon-f1'></i><span>"+this._optionals['1']['title_tw']+"</span></a></li>");
				innerHTML.push("<li><a href='"+this._optionals['2']['href_tw']+"'><i class='icon-f2'></i><span>"+this._optionals['2']['title_tw']+"</span></a></li>");
			}
			else{
				innerHTML.push("<li><a href='"+this._optionals['1']['href_zh']+"'><i class='icon-f1'></i><span>"+this._optionals['1']['title_zh']+"</span></a></li>");
				innerHTML.push("<li><a href='"+this._optionals['2']['href_zh']+"'><i class='icon-f2'></i><span>"+this._optionals['2']['title_zh']+"</span></a></li>");
			}
			//cookie中的数据
			for(var i=0;i<shortcutsCookie.length;i++){
				var num=shortcutsCookie[i];
				var obj=this._optionals[num];
				if(typeof(obj)!='undefined'){
					if("tw"==lang){
						innerHTML.push("<li><a href='"+this._optionals[num]['href_tw']+"'><i class='icon-f"+num+"'></i><span>"+this._optionals[num]['title_tw']+"</span></a></li>");
					}
					else{
						innerHTML.push("<li><a href='"+this._optionals[num]['href_zh']+"'><i class='icon-f"+num+"'></i><span>"+this._optionals[num]['title_zh']+"</span></a></li>");
					}
				}
			}
			
			//填充内容
			$("#shortcuts_self_list").html(innerHTML.join(""));
			
		}
		//判断是否增加 “添加” 按钮
		if($("#shortcuts_self_list li").length<9 && $("#shortcuts_self_add").length<=0){
			$("#shortcuts_self_list").append("<li id='shortcuts_self_add'><a href='/"+lang+"/shortcuts-set.html' class='tianj-btn'><i class='icon-add'></i><span>添加</span></a></li>");
		}
	},
	
	
	
	
	
	/**初始化快捷方式设置页面**/
	initSetShortcutsPage:function(){
		//加载已选择项
		shortcutsCookie=this.getShortcutsCookie("m24khk_shortcuts_selected");
		this.loadOptionalsSelected(shortcutsCookie);
		//给已选择的快捷方式绑定删除事件(ios设备上不支持live动态绑定事件,需在新添加时同时绑定事件)
		$("#optionals_selected_list li[num]").bind("click",{obj:this},this.delShortcuts);
		//检查已绑定数量
		this.countSelectedShortcuts();
		//保存按钮事件
		$("#shortcuts_save_but").bind("click",{obj:this},this.saveShortcuts);
		//保存提示OK按钮事件
		$("#shortcuts_save_tips_ok").bind("click",this.saveShortcutsTipsOK);
	},
	
	/**设置页面加载已选择内容**/
	loadOptionalsSelected:function(numArr){
		if(typeof(numArr)!='undefined' && numArr!=null && numArr.length>0){
			var lang=this.langStr();
			var innerHTML=[];
			$("#optionals_selected_list").html("");
			//默认两个选项
			if("tw"==lang){
				innerHTML.push("<li class='on-status'>真實開戶</li>");
				innerHTML.push("<li class='on-status'>模擬開戶</li>");
			}
			else{
				innerHTML.push("<li class='on-status'>真实开户</li>");
				innerHTML.push("<li class='on-status'>模拟开户</li>");
			}
			for(var i=0;i<numArr.length;i++){
				var num=numArr[i];
				var obj=this._optionals[num];
				if(typeof(obj)!='undefined'){
					var addClass=obj['add_class'];
					if(typeof(addClass)=='undefined')
						addClass="";
					if("tw"==lang){
						innerHTML.push("<li num='"+num+"' class='"+addClass+"'>"+obj['title_tw']+"<i>&times;</i></li>");
					}
					else{
						innerHTML.push("<li num='"+num+"' class='"+addClass+"'>"+obj['title_zh']+"<i>&times;</i></li>");
					}
					$("#optionals_all_list > li[num='"+num+"']").hide();
				}
			}
			$("#optionals_selected_list").html(innerHTML.join(''));
		}
	},
	
	/**统计已经绑定的数量及给可选择项绑定事件**/
	countSelectedShortcuts:function(){
		var selectedSize=$("#optionals_selected_list li").size();
		//更新已选择的数量
		$("#optionals_selected_count").html(selectedSize);
		if(selectedSize>=9){
			//选择个数超过9时变灰且不能添加
			$("#optionals_all_list > li").unbind("click",{obj:this},this.addShortcuts);
			$("#optionals_all_list").addClass("gray-font");
		}
		else{
			var _this=this;
			$("#optionals_all_list > li").each(function(){
				//没有绑定click时绑定
				if(typeof($(this).data("events"))=='undefined'){
					$(this).bind("click",{obj:_this},_this.addShortcuts);
				}
			});
			$("#optionals_all_list").removeClass("gray-font");
		}
	},
	
	/**添加快捷方式**/
	addShortcuts:function(event){
		var selectedSize=$("#optionals_selected_list li").size();
		var _this=event.data.obj;//对象
		if(selectedSize<9){
			var lang=_this.langStr();
			var num=$(this).attr("num");
			var addClass=_this._optionals[num]['add_class'];
			if(typeof(addClass)=='undefined')
				addClass="";
			
			$(this).hide();
			if("tw"==lang){
				$("<li num='"+num+"' class='"+addClass+"'>"+_this._optionals[num]['title_tw']+"<i>&times;</i></li>").appendTo($("#optionals_selected_list")).bind("click",{obj:_this},_this.delShortcuts);
			}
			else{
				$("<li num='"+num+"' class='"+addClass+"'>"+_this._optionals[num]['title_zh']+"<i>&times;</i></li>").appendTo($("#optionals_selected_list")).bind("click",{obj:_this},_this.delShortcuts);
			}
		}
		//检查已选择个数
       	_this.countSelectedShortcuts();	
	},
	
	/**删除快捷方式**/
	delShortcuts:function(event){
		var _this=event.data.obj;
		//获取元素编号
		var num=$(this).attr("num");
		//删除自身元素
		$(this).remove();
		//显示对应编号可选项
		$("#optionals_all_list > li[num='"+num+"']").show();
		//调用统计绑定数量
		_this.countSelectedShortcuts();
	},
	
	/**保存已选项**/
	saveShortcuts:function(event){
		var _this=event.data.obj;
		//获取已选的编号
		var numArr=[];
		$("#optionals_selected_list li[num]").each(function(){
			numArr.push($(this).attr("num"));
		});
		if(typeof(numArr)=='undefined' || numArr.length<=0){
			numArr.push(0);
		}
		//存储cookie
		_this.setShortcutsCookie("m24khk_shortcuts_selected",numArr.join("_"),{expires: 365,path: "/"});
		//提示
		$.blockUI({			   
			 message:$("#shortcuts_save_tips"),
			 css: { 
				 top: '50%',
				 left: '50%',
				 marginLeft: '-125px', 
				 marginTop: '-80px', 
				 width: '250px',
				 cursor:"default",
				 border: 'none', 
				 textAlign: 'left',
				 padding: '0px'

			},overlayCSS: {  
				cursor:"default"
		    }
	  });
		
	},
	
	/**保存提示按钮事件**/
	saveShortcutsTipsOK:function(){
		$("#shortcuts_save_tips").hide(function(){
			$("#shortcuts_save_tips_content").html("");
		});
		//返回来源页面
		if(typeof(referrerUrl)=='undefined' || referrerUrl=='')
		   referrerUrl="/";
		location.href=referrerUrl;
	},
	
	/**保存cookie**/
	setShortcutsCookie:function(name,value,options){  
		options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); 
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain].join('');
	},
	
	/**获取cookie**/
	getShortcutsCookie:function(name){  
		var cookieValue = "";
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        
        if(typeof(cookieValue)!='undefined' && cookieValue!=""){
        	return cookieValue.split("_");
        }
        return [];
	}
	
		
};

/**
 * 加载js
 * @param path:js文件路径
 */
function m_include_js(path){       
      var sobj = document.createElement('script');   
      sobj.setAttribute("type","text/javascript");   
      sobj.setAttribute("src",path);   
      document.getElementsByTagName('head')[0].appendChild(sobj);   
} 
/**
 * 加载css
 * @param path css文档路径
 */
function m_include_css(path){       
    var fileref=document.createElement("link");  
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css") ;
    fileref.setAttribute("href", path);
    document.getElementsByTagName("head")[0].appendChild(fileref);
}













