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
		$(".list").html("<h2>标题：<span>（依次排列,请在右侧框输入完整新标题,不输入则不更改）</span></h2>");
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
	var list = $(".list").val();
	var replaceold = $("#replaceold").val();
	var replaceoldrude = "/"+replaceold+"/g";
	//var arrMactches = source.match(eval(replaceoldrude));
	var replacenew = $("#replacenew").val();
	//if(eval(replaceoldrude).test(source)){}
	// for (var i=0;i < arrMactches.length ; i++){
	// 	var fixed = source.replace(eval(replaceoldrude),replacenew);
	// 	$("#fixed").val(fixed);
	// }
	var fixed = source.replace(eval(replaceoldrude),replacenew);
	$("#fixed").val(fixed);
}