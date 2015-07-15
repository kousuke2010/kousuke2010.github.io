// 复制到剪切板
$(function(){
	$(".copy1").zclip({
		path: "ZeroClipboard.swf",
		copy: function(){
			return $("#source").val();
		}
	});
	$(".copy2").zclip({
		path: "ZeroClipboard.swf",
		copy: function(){
			return $("#fixed").val();
		}
	});
});//copy: $("#fixed").val()
// 处理采集插件导出的代码以适用当前模板
$("#ini").change(function(){
	var ini = $("#ini").val();
	ini = ini.replace(/[\[\]]/g,"");
	ini = ini.replace(/yh\_price/ig,"c_price");
	ini = ini.replace(/num\_iid/ig,"item_id");
	ini = ini.replace(/sid/ig,"sellerId");
	ini = ini.replace(/picurl/ig,"img");
	ini = ini.replace(/["]zkType["][:]["][^"]*["][,]/ig,"");
	ini = ini.replace(/["]commissionRatePercent["][:][^:]*[,]/ig,"");
	ini = ini.replace(/\}\,\{/g,"}{");
	// ini = ini.replace(//g,"");
	//var source = $("#source").val();
	$("#source").val(ini);
});
// 列出标题
function listTitle(){
	$(".list").html("").show();
	var source = $("#source").val();
	var titlerule =/title["][:]["][^"]*["]/g;
	var arrtitle = source.match(titlerule);
	if(arrtitle == undefined){
		$(".list").html("<div class='tips'>该串代码不包含标题。</div>");
		return false;
	}else{
		$(".list").html("<h2>标题：<b>（依次排列,请在右侧框输入完整新标题,不输入则不更改）</b></h2>");
	}
	for (var i=0;i < arrtitle.length ; i++){
		arrtitle[i] = arrtitle[i].replace(/title["][:]["]/g,'');
		arrtitle[i] = arrtitle[i].replace(/["]/g,'');
		var list = $(".list").append(i+". "+"<span class='replaceold"+i+"'>"+arrtitle[i]+"</span><input type='text' cols='80' class='replacenew"+i+"'/><br>");
		$(".list").val(list);
	}
}
//列出图片
function listPic(){
	$(".list").html("").show();
	var source = $("#source").val();
	var picrule =/["]img["][:]["][^"]*["]/g;
	var arrpic = source.match(picrule);
	if(arrpic == undefined){
		$(".list").html("<div class='tips'>该串代码不包含标题。</div>");
		return false;
	}else{
		$(".list").html("<h2>图片：<b>（依次排列,请在右侧框输入完整新标题,不输入则不更改）</b></h2>");
	}
	for (var i=0;i < arrpic.length ; i++){
		arrpic[i] = arrpic[i].replace(/["]img["][:]["]/g,'');
		arrpic[i] = arrpic[i].replace(/["]/g,'');
		var list = $(".list").append(i+". <img src='"+arrpic[i]+"' alt='' />"+"<span class='replaceold"+i+"'>"+arrpic[i]+"</span><input type='text' cols='80' class='replacenew"+i+"'/><br>");
		$(".list").val(list);
	}
}
// 关闭右侧悬浮列表提示栏
$(".close").click(function(){
	$(".list").hide();
});
// 修正执行代码
function fixList(){
	var source = $("#source").val();
	var spanlength = $(".list span").length;
	for (var i=0;i < spanlength ; i++){
		var replaceold = $(".replaceold"+i).html();
		// 规范正则特殊符号
		replaceold = replaceold.replace(/[\:]/g,'\\:');
		replaceold = replaceold.replace(/[\/]/g,'\\/');
		replaceold = replaceold.replace(/[\_]/g,'\\_');
		replaceold = replaceold.replace(/[\-]/g,'\\-');
		replaceold = replaceold.replace(/[\!]/g,'\\!');
		replaceold = replaceold.replace(/[\.]/g,'\\.');
		replaceold = replaceold.replace(/[\+]/g,'\\+');
		var replaceoldrude = "/"+replaceold+"/g";
		var replacenew = $(".replacenew"+i).val();
		if(replacenew !== ""){
			var fixed = source.replace(eval(replaceoldrude),replacenew);
			var source = fixed;
			// var fixed = source.replace(replaceold,replacenew);
		}
	}
	if(source == ""){
		$("#fixed").val("请先输入采集工具导出的代码。");
	}else{
		if(fixed == undefined){
			$("#fixed").val(source);
		}else{
			$("#fixed").val(fixed);
		}
	}
}