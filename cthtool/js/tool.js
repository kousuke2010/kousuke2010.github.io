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
		$(".list").html("<h2>代码中包含标题：（依次排列）</h2>");
	}
	for (var i=0;i < arrtitle.length ; i++){
		arrtitle[i] = arrtitle[i].replace(/title["][:]["]/g,'');
		arrtitle[i] = arrtitle[i].replace(/["]/g,'');
		var list = $(".list").append(i+1+". "+arrtitle[i]+"<br>");
		$(".list").val(list);
	}
}
// 关闭右侧悬浮列表提示栏
$(".close").click(function(){
	$(".list").hide();
});
// 修正代码
function fixSource(){
	var source = $("#source").val();
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