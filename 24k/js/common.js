HTTP/1.1 200 OK
Server: Play! Framework;1.2.4;prod
Cache-Control: max-age=3600
Last-Modified: Fri, 10 May 2013 10:55:49 GMT
ETag: "1368183349000-501695572"
Content-Length: 1016
Content-Type: application/javascript

/**
 * @author tina
 * Time:   2013.04.07
 * 透明的弹窗口：验证的提示信息
 **/
function setTitle(e,text){
	var popup = document.createElement("div");
	document.body.appendChild(popup);
	var $pp = $(popup);
	$pp.css({opacity:0,width:'220px',position:'fixed',borderRadius:'2px 2px 2px 2px',fontSize:"90%",color:'#fff',background:"#000",padding:"10px",textAlign:"center",boxShadow:"0px 0px 5px #000"});
	
	/*居中显示*/
	var _top = window.innerHeight/2 -30 //screen.availHeight/2-30;
	var _left =window.innerWidth/2 -110 // screen.availWidth/2-110;
	popup.innerHTML = text;
	
	$pp.css({left:_left+"px",top:_top+"px"});
	$pp.animate({opacity:0.7},300,function(){		
		/*提示5秒后关闭*/
		var sttimp = setTimeout(function(){
			$pp.animate({opacity:0},300,function(){
				document.body.removeChild(popup);
				if(e)e.focus();
			});
		},2000);
		$pp.click(function(event){
			clearTimeout(sttimp);
			document.body.removeChild(popup);
				if(e)e.focus();
		});
	});
};$(function(){
	//从开户成功页面跳转平台下载页面   add by Tina 2013.04.24   start
	var plat = $("#plat").val();
	if(plat == 1){
		$("#plat1").addClass("nav-click");
		$("#plat2").removeClass("nav-click").addClass("nav");
		$("#platP1").show();
		$("#platP2").hide();
	}else{
		$("#plat2").addClass("nav-click");
		$("#plat1").removeClass("nav-click").addClass("nav");
		$("#platP2").show();
		$("#platP1").hide();
	}
	//从开户成功页面跳转平台下载页面   add by Tina 2013.04.24   start
	$(".w3 a").click(function(){
		var cont=$(".w3 a").index(this);
		$(this).addClass("nav-click").siblings().removeClass("nav-click").addClass("nav");
		$("#down-con .download-info").hide().eq(cont).show();
	})	
	
	
	/*-------------页面的浮动小图标：返回顶部  add by Tina 2013.05.29-----------start--*/
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#float-top").fadeIn(1500);
        }
        else
        {
            $("#float-top").fadeOut(1500);
        }
    });
	//当点击跳转链接后，回到页面顶部位置 
    $("#float-top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
	/*-------------页面的浮动小图标：返回顶部  add by Tina 2013.05.29-----------end-------*/
    
	
	
})

/**
 * 时间格式函数 add by Tina 2013.05.03 
 */
Date.prototype.format = function(format){
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("("+ k +")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
		}
	}
	
	return format; 
}

function showhideTab(x)	{
	$(x).find('a').each(function(index, element) {
		$(this).css('cursor', 'pointer');
		var tar = $(this).attr('rel');
		$('#'+tar).hide();
		$(this).click(function(e) {
			$('#'+tar).toggle();
			$(this).toggleClass('bold');
		});
	});
}

function changeLang(x)	{
	var url=location.href;
	var newurl = url;
	
	if(url=="http://m.24k.hk/")	{
		newurl = 'http://m.24k.hk/index-'+x+'.html';
	}	else	{
		if(url.indexOf('index')>1)	{
			newurl = url.replace(url.substr(url.lastIndexOf('/')+1), 'index-'+x+'.html');
		}	else	{
			var oriLang = '/tw/';
		
			if(url.indexOf('/en/')>-1)	{
				oriLang = '/en/';
			}
			if(url.indexOf('/zh/')>-1)	{
				oriLang = '/zh/';
			}
			newurl = url.replace(oriLang, '/'+x+'/');
		}
	}
	window.location = newurl;
}


function genPaging(x)	{
	var url = self.location.toString();
	var filename = returnDocument(url);
	var fileext = url.substr(url.lastIndexOf('.'));
	
	var p = 1;
	if(filename.lastIndexOf('-')>-1)	{
		p = parseInt(filename.substr(filename.lastIndexOf('-')+1));
		filename = filename.substr(0,filename.lastIndexOf('-'));
	}
	
	var bar = 9;
	var thisLink;
	
	var obj;
	if(p>1)	{
		var y = p-1;
		var firstLink = filename+'-'+y+fileext;
		$('.paging').append('<a href="'+firstLink+'" >&lt;</a> ');
	}
	
	var start = (p-bar)>0?p-bar:1;
	var end = (p+bar)>x?x:p+bar;
	
	for(var i=start; i<=end; i++)	{
		thisLink = i==1?filename+fileext:filename+'-'+i+fileext;
		if(i==p)	{
			$('.paging').append('<a href="'+thisLink+'" class="on">'+i+'</a>');
		}	else	{
			$('.paging').append('<a href="'+thisLink+'" >'+i+'</a>');
		}
		if(i!=end)	{
			$('.paging').append(' | ');
		}
	}
	
	if(p<x)	{
		var y = p+1;
		var lastLink = filename+'-'+y+fileext;
		$('.paging').append(' <a href="'+lastLink+'" >&gt;</a>');
	}
	
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function returnDocument(file_name) {
	//var file_name = document.location.href;
	var end = (file_name.lastIndexOf(".") == -1) ? file_name.length : file_name.lastIndexOf(".");
	return file_name.substring(file_name.lastIndexOf("/")+1, end);
}



//首页财经日历的“查看全部” add by Tina 2013.04.23  start
function playAllFinance(){
	var lastData = $("#lastData").val();
	$.ajax({
      type: 'POST', 
      url: _oaRootPath + '/' + _lang + '/finance_all.html', 
      data: {'lastData':lastData, 'lang' : _lang}, 
      dataType:'json',
      success:function(json){
          var tr = ""; 
          $.each(json,function(i,item){ //遍历json数据列 
          	if(i%2 == 0){
                 tr += "<tr class='bg-jtd'><td class='t-left'><p><span class='hui'>" + item.fdTime + " " + item.fdCountry + "</span><br />" + item.fdTitle  + "</p></td><td class='t-right'>" + item.prediction +"</td><td class='t-right'>" + item.actual +"</td></tr>"; 
          	}else{
                 tr += "<tr><td class='t-left'><p><span class='hui'>" + item.fdTime + " " + item.fdCountry + "</span><br />" + item.fdTitle  + "</p></td><td class='t-right'>" + item.prediction +"</td><td class='t-right'>" + item.actual +"</td></tr>";  
          	}
          }); 
          $("#financeAll").append(tr);
          $("#lastFinance").css("display","none");
      },
      error:function(){
  		setTitle('',"暂时没数据了!");
      }
	})
}
//首页财经日历的“查看全部” add by Tina 2013.04.23   end

//首页最新视频的滑动轮播  add by Tina 2013.04.23
var slider = new Swipe(document.getElementById('slider'), {
	startSlide: 0,
	speed: 400,
	auto: 3000,
  callback: function (e, pos) {
      var i = bullets.length;
      while (i--) {
          bullets[i].className = ' ';
      }
      bullets[pos].className = 'p-click';
  }
}),
bullets = $("#position > span");
//首页金道图库的滑动轮播  add by Tina 2013.05.09
var slider2 = new Swipe(document.getElementById('slider2'), {
	startSlide: 0,
	speed: 400,
	auto: 3000,
  callback: function (e, pos) {
      var i = bullets2.length;
      while (i--) {
          bullets2[i].className = ' ';
      }
      bullets2[pos].className = 'p-click';
  }
}),
bullets2 =$("#position2 > span");
//首页广告图轮播
var slider3 = new Swipe(document.getElementById('slider3'), {
	startSlide: 0,
	speed: 400,
	auto: 3000,
  callback: function (e, pos) {
      var i = bullets3.length;
      while (i--) {
          bullets3[i].className = ' ';
      }
      bullets3[pos].className = 'p-click';
  }
}),
bullets3 =$("#position3 > span");

//"金道优势--金道奖项"点击显示或者折叠 add by Tina 2013.04.25  begin
function displayOrNo(obj){
	var clickAgain = $("#h" + obj).is(".news-hfont-on");//是否再次点击
	//收起全部
	$("#h1, #h2, #h3, #h4").addClass("news-hfont").removeClass("news-hfont-on");
	$("#s1,#s2,#s3,#s4").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
	$("#award1,#award2,#award3,#award4").css("display","none");
	if(!clickAgain){ //不是再次点击展开
		$("#h" + obj).addClass("news-hfont-on").removeClass("news-hfont");
		$("#s" + obj).addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
		$("#award" + obj).css("display","block");
	}
//	if(obj == 1){
//		$("#h1").addClass("news-hfont-on").removeClass("news-hfont");
//		$("#h3, #h2, #h4").addClass("news-hfont").removeClass("news-hfont-on");
//		$("#s1").addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
//		$("#s3,#s2,#s4").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
//		$("#award1").css("display","block");
//		$("#award3,#award2,#award4").css("display","none");	
//	}else if(obj == 2){
//		$("#h" + obj).addClass("news-hfont-on").removeClass("news-hfont");
//		$("#h1, #h2, #h3, #h4").addClass("news-hfont").removeClass("news-hfont-on");
//		$("#s1,#s2,#s3,#s4").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
//		$("#s" + obj).addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
//		$("#award1,#award2,#award3,#award4").css("display","none");
//		$("#award" + obj).css("display","block");
//	}else if(obj == 3){
//		$("#h3").addClass("news-hfont-on").removeClass("news-hfont");
//		$("#h1, #h2, #h4").addClass("news-hfont").removeClass("news-hfont-on");
//		$("#s3").addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
//		$("#s1,#s2,#s4").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
//		$("#award3").css("display","block");
//		$("#award1,#award2,#award4").css("display","none");
//	}else if(obj == 4){
//		$("#h4").addClass("news-hfont-on").removeClass("news-hfont");
//		$("#h1, #h2, #h3").addClass("news-hfont").removeClass("news-hfont-on");
//		$("#s4").addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
//		$("#s1,#s2,#s3").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
//		$("#award4").css("display","block");
//		$("#award1,#award2,#award3").css("display","none");
//	}
}
//"金道优势--金道奖项"点击显示或者折叠  add by Tina 2013.04.25 end 

//“财经资讯”点击显示或者折叠 add by Tina 2013.04.26  beagin
function messageDisplayOrNo(obj){
	var me = $("#message" + obj).css("display");
	if(me == 'block'){
		$("#message" + obj).css("display","none");
		$("#h" + obj).addClass("news-hfont").removeClass("news-hfont-on");
		$("#s" + obj).addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
	}else{
		$("#message" + obj).css("display","block");
		$("#h" + obj).addClass("news-hfont-on").removeClass("news-hfont");
		$("#s" + obj).addClass("sd-tipbox-hide").removeClass("sd-tipbox-show");
	}
	if(obj == 1){
		$("#h3, #h2, #h4,#h5, #h6, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s3,#s2,#s4,#s5, #s6,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message3,#message2,#message4,#message5,#message6,#message7,#message8,#message9").css("display","none");	
	}else if(obj == 2){
		$("#h1, #h3, #h4,#h5, #h6, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s3,#s4,#s5, #s6,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message3,#message4,#message5,#message6,#message7,#message8,#message9").css("display","none");
	}else if(obj == 3){
		$("#h1, #h2, #h4,#h5, #h6, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s4,#s5, #s6,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message4,#message5,#message6,#message7,#message8,#message9").css("display","none");
	}else if(obj == 4){
		$("#h1, #h2, #h3,#h5, #h6, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s5, #s6,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message5,#message6,#message7,#message8,#message9").css("display","none");
	}else if(obj == 5){
		$("#h1, #h2, #h3,#h4, #h6, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s4, #s6,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message4,#message6,#message7,#message8,#message9").css("display","none");
	}else if(obj == 6){
		$("#h1, #h2, #h3,#h5, #h4, #h7,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s5, #s4,#s7,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message5,#message4,#message7,#message8,#message9").css("display","none");
	}else if(obj == 7){
		$("#h1, #h2, #h3,#h5, #h4, #h6,#h8, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s5, #s4,#s6,#s8, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message5,#message4,#message6,#message8,#message9").css("display","none");
	}else if(obj == 8){
		$("#h1, #h2, #h3,#h5, #h4, #h7,#h6, #h9").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s5, #s4,#s7,#s6, #s9").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message5,#message4,#message7,#message6,#message9").css("display","none");
	}else if(obj == 9){
		$("#h1, #h2, #h3,#h5, #h4, #h7,#h8, #h6").addClass("news-hfont").removeClass("news-hfont-on");
		$("#s1,#s2,#s3,#s5, #s4,#s7,#s8, #s6").addClass("sd-tipbox-show").removeClass("sd-tipbox-hide");
		$("#message1,#message2,#message3,#message5,#message4,#message7,#message8,#message6").css("display","none");
	}
}
//“财经资讯”点击显示或者折叠 add by Tina 2013.04.26  end

//财经资讯--财经新闻的“查看更多”  add by Tina 2013.04.26  start
function loadMoreNewInfos(){
	var newsId = $("#newsId").val();
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreNewInfos.html', 
	      data: {'newsId':newsId, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = ""; 
	          $.each(json,function(i,item){ //遍历json数据列 
	              tr += "<dd><a href='" + _oaRootPath + "/" + _lang + "/news/"+item[0] +".html'>" + item[1] + "</a></dd>"; 
	              $("#newsId").val(item[2]);
	          }); 
	          $("#newsAll").append(tr);
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--财经新闻的“查看更多”  add by Tina 2013.04.26  end

//财经资讯--产业快讯的“查看更多”  add by Tina 2013.04.26  start
function loadMoreFastInfos(){
	var page = $("#fastPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#fastPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreFastInfos.html', 
	      data: {'page':page,'type': 4,'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#fastAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreFast").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--产业快讯的“查看更多”  add by Tina 2013.04.26  end

//财经资讯--交易场动态的“查看更多”  add by Tina 2013.04.26  start
function loadMoreDynamicInfos(){
	var page = $("#dynamicPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#dynamicPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreFastInfos.html', 
	      data: {'page':page,'type': 2, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#dynamicAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreDynamic").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//财经资讯--交易场动态的“查看更多”  add by Tina 2013.04.26  end
//财经资讯--每日金评的“查看更多”  add by Tina 2013.04.26  start
function loadMoreCommentInfos(){
	var page = $("#commentPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#commentPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreCommentInfos.html', 
	      data: {'page':page, 'type': 0, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/comment/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#commentAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreComment").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--每日金评的“查看更多”  add by Tina 2013.04.26  end
//财经资讯--交易策略的“查看更多”  add by Tina 2013.04.26  start
function loadMoreStratInfos(){
	var page = $("#stratPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#stratPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreCommentInfos.html', 
	      data: {'page':page, 'type': 5,'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/comment/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#stratAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreStrat").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--交易策略的“查看更多”  add by Tina 2013.04.26  end
//财经资讯--金道专栏的“查看更多”  add by Tina 2013.04.26  start
function loadMoreSpecInfos(){
	var page = $("#specPage").val();
	if(page == 0){
	  	page = 2;
	}else{
	  	page++;
	}
	$("#specPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreCommentInfos.html', 
	      data: {'page':page, 'type': 1, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/comment/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#specAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreSpec").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//财经资讯--金道专栏的“查看更多”  add by Tina 2013.04.26  end
//财经资讯--黄金头条的“查看更多”  add by Tina 2013.06.04  start
function loadMoreGoldInfos(){
	var page = $("#goldPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#goldPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreFastInfos.html', 
	      data: {'page':page,'type': 1, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#goldAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreGold").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})	
}
//财经资讯--黄金头条的“查看更多”  add by Tina 2013.06.04  end
//财经资讯--即市评论的“查看更多”  add by Tina 2013.06.04  start
function loadMoreJSCommentInfos(){
	var page = $("#jcommentPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#jcommentPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreCommentInfos.html', 
	      data: {'page':page, 'type': 3, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/comment/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#commentJSAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreJSComment").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--即市评论的“查看更多”  add by Tina 2013.06.04  end
//财经资讯--金道周评的“查看更多”  add by Tina 2013.06.04  start
function loadMoreZPCommentInfos(){
	var page = $("#zpcommentPage").val();
    if(page == 0){
    	page = 2;
    }else{
    	page++;
    }
	$("#zpcommentPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreCommentInfos.html', 
	      data: {'page':page, 'type': 4, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<dd><a href= '"+ _oaRootPath + "/" + _lang + "/comment/"+item.no + "_" + item.type +".html'>" + item.title + "</a></dd>";
		          });
		          $("#commentZPAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreZPComment").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
		})
}
//财经资讯--金道周评的“查看更多”  add by Tina 2013.06.04  end

//多媒体中心--策略视频的“查看更多”  add by Tina 2013.04.27  start
function loadMoreStrate(){
	var page = $("#stratePage").val();
	if(page == 0){
	  	page = 2;
	}else{
	  	page++;
	}
	$("#stratePage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreVideoInfos.html', 
	      data: {'page':page, 'type': 1, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<li class='clearfix'><a class='fl' href='#'><img src='" + _oaRootPath + "/upload/channel/" + item.pic2 + "' width='125' height='79'/><span class='mjiao-title fr'>" + item.url +"</span></a></li>";
		          });
		          $("#strateAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreStrate").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//多媒体中心--策略视频的“查看更多”  add by Tina 2013.04.27  end

//多媒体中心--投资视频的“查看更多”  add by Tina 2013.04.27  start
function loadMoreInvest(){
	var page = $("#investPage").val();
	if(page == 0){
	  	page = 2;
	}else{
	  	page++;
	}
	$("#investPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreVideoInfos.html', 
	      data: {'page':page, 'type': 2, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<li class='clearfix'><a class='fl' href='#'><img src='" + _oaRootPath + "/upload/channel/" + item.pic2 + "' width='125' height='79'/><span class='mjiao-title fr'>" + item.url +"</span></a></li>";
		          });
		          $("#investAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreInvest").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//多媒体中心--投资视频的“查看更多”  add by Tina 2013.04.27  end

//多媒体中心--活动视频的“查看更多”  add by Tina 2013.04.27  start
function loadMoreAct(){
	var page = $("#actPage").val();
	if(page == 0){
	  	page = 2;
	}else{
	  	page++;
	}
	$("#actPage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreVideoInfos.html', 
	      data: {'page':page, 'type': 3, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += "<li class='clearfix'><a class='fl' href='#'><img src='" + _oaRootPath + "/upload/channel/" + item.pic2 + "' width='125' height='79'/><span class='mjiao-title fr'>" + item.url +"</span></a></li>";
		          });
		          $("#actAll").append(tr);
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreAct").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//多媒体中心--活动视频的“查看更多”  add by Tina 2013.04.27  end

//多媒体中心--金道图库的“查看更多”  add by Tina 2013.04.27  start
function loadMoreImage(){
	var page = $("#imagePage").val();
	if(page == 0){
	  	page = 2;
	}else{
	  	page++;
	}
	$("#imagePage").val(page);
	$.ajax({
	      type: 'POST', 
	      url: _oaRootPath + '/' + _lang + '/loadMoreImageInfos.html', 
	      data: {'page':page, 'lang' : _lang}, 
	      dataType:'json',
	      success:function(json){
	          var tr = "";
	          if(json != null){
		          $.each(json,function(i,item){ //遍历json数据列 
		              tr += '<li><a href="' + _oaRootPath + item.image750 + '" class="swipebox" title="' + item.cnname + '"><img src="' + _oaRootPath + item.image120 + '" width="138" height="138" /><span class="n-sp">' + item.cnname + '</span></a></li>';
		          });
		      	  $("#imageAll").append(tr);
		      	  $(".swipebox").swipebox();
	          }else{
	        	  setTitle('',"暂时没数据了!");
	        	  $("#moreImage").css("display","none");
	          }
	      },
	      error:function(){
	  		setTitle('',"暂时没数据了!");
	      }
	})
}
//多媒体中心--金道图库的“查看更多”  add by Tina 2013.04.27  end

//交易指南--常见问题点击标题js控制伸展  add  by Tina  2013.04.26
function dlClose(){
	$(".about-jind dd").hide();	
	$(".question-list>a").click(function(e){
			var dis = $(this).next().css("display");
			$(this).next().slideToggle();
			if(dis == 'none'){
				$(this).children("dt").addClass("dt-cor");
			}else{
				$(this).children("dt").removeClass("dt-cor");
			}
		}
	);
	
}
//交易指南--常见问题点击标题js控制伸展-附属js   add by tina 2013.05.17
function openOrClose(){
	if(_n==0){
		_n = 1;
		$(".about-jind dd").slideDown();
		$(".hs-btn").html("<i class='add-jian fr'>-</i>全部收起");	
		$(".question-list>a>dt").addClass("dt-cor");	
	}else{
		_n = 0;
		$(".about-jind dd").slideUp();
		if(_lang == 'zh'){
			$(".hs-btn").html("<i class='add-jian fr'>+</i>全部展开");
			$(".question-list>a>dt").removeClass("dt-cor");
		}else{
			$(".hs-btn").html("<i class='add-jian fr'>+</i>全部展開");
			$(".question-list>a>dt").removeClass("dt-cor");
		}
	}
}

//金道图库：点击小图看大图  add by Tina 2013.05.04
function showBigImgs(obj){
	$("#showBig