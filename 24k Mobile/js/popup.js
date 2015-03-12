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
};