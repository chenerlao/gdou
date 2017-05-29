 (function() {
				function autoPlayAudio(ele) {
					var wxTimmer=setInterval(function(){
						if (WeixinJSBridge!==undefined) {
							clearInterval(wxTimmer);
							WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				                // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
				                // alert(e.err_msg);
				                ele.play();
				            });
						}
					},200);
			    }
				//调用时传入一个原生audio元素
				autoPlayAudio(document.getElementById("autoPlayMuc"));
				var pause=true;
				document.getElementsByClassName("pauseBtn")[0].onclick=function(){
					if (pause) {
						pause=false;
						document.getElementById("autoPlayMuc").pause();
						this.style.background="url(img/play.JPG) no-repeat";
						this.style.backgroundSize="100% 100%";
					}else{
						pause=true;
						document.getElementById("autoPlayMuc").play();
						this.style.background="url(img/play.JPG) no-repeat";
						this.style.backgroundSize="100% 100%";
					}
					
				}
				
var dataForWeixin={

   appId:"xyzq",

   MsgImg:"img/pic300.jpg",

   TLImg:"img/pic300.jpg",

   url:"https://chenerlao.github.io/xyzq/",

   title:"兴业证券，感恩·有你",

   desc:"但愿人长久，千里共婵娟",

   fakeid:"",

   callback:function(){}

};

   var onBridgeReady=function(){

   WeixinJSBridge.on('menu:share:appmessage', function(argv){

      WeixinJSBridge.invoke('sendAppMessage',{

         "appid":dataForWeixin.appId,

         "img_url":dataForWeixin.MsgImg,

         "img_width":"120",

         "img_height":"120",

         "link":dataForWeixin.url,

         "desc":dataForWeixin.desc,

         "title":dataForWeixin.title

      }, function(res){(dataForWeixin.callback)();});

   });

   WeixinJSBridge.on('menu:share:timeline', function(argv){

      (dataForWeixin.callback)();

      WeixinJSBridge.invoke('shareTimeline',{

         "img_url":dataForWeixin.TLImg,

         "img_width":"120",

         "img_height":"120",

         "link":dataForWeixin.url,

         "desc":dataForWeixin.desc,

         "title":dataForWeixin.title

      }, function(res){});

   });

   WeixinJSBridge.on('menu:share:weibo', function(argv){

      WeixinJSBridge.invoke('shareWeibo',{

         "content":dataForWeixin.title,

         "url":dataForWeixin.url

      }, function(res){(dataForWeixin.callback)();});

   });

   WeixinJSBridge.on('menu:share:facebook', function(argv){

      (dataForWeixin.callback)();

      WeixinJSBridge.invoke('shareFB',{

         "img_url":dataForWeixin.TLImg,

         "img_width":"120",

         "img_height":"120",

         "link":dataForWeixin.url,

         "desc":dataForWeixin.desc,

         "title":dataForWeixin.title

      }, function(res){});

   });

};

if(document.addEventListener){

   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);

}else if(document.attachEvent){

   document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);

   document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);

}

			})();