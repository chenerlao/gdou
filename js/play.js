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
			})();