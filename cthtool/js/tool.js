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
// 关闭右侧悬浮列表提示栏
$(".close").click(function(){
	$(".list").hide();
});
// 修正代码
function fixList(){
	var source = $("#source").val();
	var spanlength = $(".list span").length;
	for (var i=0;i < spanlength ; i++){
		var replaceold = $(".replaceold"+i).html();
		//var replaceoldrude = "/"+replaceold+"/g";
		var replacenew = $(".replacenew"+i).val();
		if(replacenew !== ""){
			//var fixed = source.replace(eval(replaceoldrude),replacenew);
			var fixed = source.replace(replaceold,replacenew);
		}
	}
	$("#fixed").val(fixed);
}
// 读取文件
$(function(){
	$.ajax({
		type: "POST",//请求方式
		url: "test.txt",//地址，就是action请求路径
		data: "text",//数据类型text xml json  script  jsonp
		success: function(msg){//返回的参数就是 action里面所有的有get和set方法的参数
			$("#source").val(msg);
		}
	});
});