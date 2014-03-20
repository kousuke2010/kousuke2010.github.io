// JScript 文件
var weekday=new Array(7);
weekday[0]="周日";
weekday[1]="周一";
weekday[2]="周二";
weekday[3]="周三";
weekday[4]="周四";
weekday[5]="周五";
weekday[6]="周六";


function testAjax()
{
  var xmlHttp;
  try
  {
     //firefox,opera8.0+,safari
     xmlHttp=new XMLHttpRequest();
     return xmlHttp;
     //alert("0");
  }
  catch(e)
  {
     //Internet Explorer
     try
     {
        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        return xmlHttp;
        //alert("1");
     }
     catch(e)
     {
       try
       {
          xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
          return xmlHttp;
          //alert("2");
       }
       catch(e)
       {
         //alert("你的浏览器版本过低，不支持AJAX");
         return false;
       }
     }
  }

}

function ajaxFunction(method,www,ctlId)
{
  var xmlHttp=testAjax();
   
  if(!xmlHttp)
  {
    alert("你的浏览器版本过低，不支持AJAX");
    return;
  }
  
  xmlHttp.onreadystatechange=function()
  {
     if(xmlHttp.readyState==4)
     {
        //alert(xmlHttp.responseText);
        document.getElementById(ctlId).innerHTML=xmlHttp.responseText;  
        xmlHttp=null;
     }
  
  }
  xmlHttp.open(method,www+"?p="+ Math.random()*10000000,true);
  xmlHttp.send(null);
  
}

var isFinished=true;

function ajaxFunction2(method,www) {

  
  if(!isFinished)
    return;
    
  isFinished=false;
  
  var xmlHttp=testAjax();
   
  if(!xmlHttp)
  {
    alert("你的浏览器版本过低，不支持AJAX");
    return;
  }
  
  xmlHttp.onreadystatechange=function()
  {
     if(xmlHttp.readyState==4)
     {
        //alert(xmlHttp.responseText);
        var xmlNode=xmlHttp.responseXML.documentElement;
        
	if(xmlNode!=null)
	{
	// 现价
        var price = parseFloat(xmlNode.getAttribute("ZRSP"));
        // 当前时间
        var today = date2str(new Date(),"yyyy-MM-dd hh:mm:ss");
        // 涨跌幅
        var updown = 0.00;
        var data = "abxs,"+price+","+updown+","+today+";";
        // 获取子节点集合
        var node=xmlNode.getElementsByTagName('smbol');
        for(var i=0;i<node.length;i++)
    	{
    		var nowprice=parseFloat(node[i].getAttribute("ep"));
    		updown=((nowprice-price)/price)*100;
    		data+="abxs,"+node[i].getAttribute("ep")+","+updown.toFixed(2)+"%,"+today+";";
    	}
        
        updateGlodIndexQuote(data); 
	}
 
        xmlHttp=null;
        isFinished=true;
     }
  
  }
  //20121207 ma.yijian old xmlHttp.open(method,www+"?p="+ Math.random()*10000000,true);
  xmlHttp.open(method, www , true);
  //xmlHttp.setRequestHeader('Content-Type', "text/xml"); //set request type (xml) 
  xmlHttp.send(null);
  
}

// 服务器时间
// x时间对象，y时间格式
function date2str(x,y) {
 var z = {M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
 y = y.replace(/(M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-2)});
 return y.replace(/(y+)/g,function(v) {return x.getFullYear().toString().slice(-v.length)});
}


//dataStr格式为 代码,现价,涨跌,涨跌幅;下一组
function updateGlodIndexQuote(dataStr)
 {
   var dataArr=dataStr.split(";");
   
   for(var i=0;i<dataArr.length;i++)
   {
      var subDataArr=dataArr[i].split(",");
 
      var className="AR2";
      
      if(parseFloat(subDataArr[2])>0)
         className="AR1";
       
      if(parseFloat(subDataArr[2])<0)
         className="AR2"; 

      //更新当前价格
      if(document.getElementById("quote_"+subDataArr[0]+"_lastPr"))
      {
        document.getElementById("quote_"+subDataArr[0]+"_lastPr").innerHTML=subDataArr[1];
        document.getElementById("quote_"+subDataArr[0]+"_lastPr").className=className;
      }
      else
        continue;
      //更新当前涨幅值
      if(document.getElementById("quote_"+subDataArr[0]+"_changeValue"))
      {
        document.getElementById("quote_"+subDataArr[0]+"_changeValue").innerHTML=subDataArr[2];
        document.getElementById("quote_"+subDataArr[0]+"_changeValue").className=className;
      }
      //更新当前的涨跌幅
      if(document.getElementById("quote_"+subDataArr[0]+"_changeRate"))
      {
        document.getElementById("quote_"+subDataArr[0]+"_changeRate").innerHTML=subDataArr[2];
        document.getElementById("quote_"+subDataArr[0]+"_changeRate").className=className;
      }
      
      
      //更新时间quoteTime
      if(document.getElementById("quoteTime"))
      {
          var dateStrs = subDataArr[3].split(' ');
          var temp = dateStrs[0].split('-');
          var t = new Date(temp[0], temp[1]-1, temp[2]);
          // var t = new Date(2012, dateStrs[0].split('-')[1] - 1, dateStrs[0].split('-')[2], dateStrs[1].split(':')[0], dateStrs[1].split(':')[1], dateStrs[1].split(':')[2]);
          
          document.getElementById("quoteTime").innerHTML=dateStrs[0]+" "+weekday[t.getDay()]+" "+dateStrs[1];
      }
     
   }

}