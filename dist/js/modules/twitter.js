CNVS.Twitter=function(){function u(t){var t=new Date(t),e=new Date,t=parseInt((e.getTime()-t)/1e3);return(t+=60*e.getTimezoneOffset())<60?"less than a minute ago":t<120?"about a minute ago":t<3600?parseInt(t/60).toString()+" minutes ago":t<7200?"about an hour ago":t<86400?"about "+parseInt(t/3600).toString()+" hours ago":t<172800?"1 day ago":parseInt(t/86400).toString()+" days ago"}var e=SEMICOLON.Core,r=SEMICOLON.Modules;return{init:function(t){return e.getSelector(t,!1,!1).length<1||(e.initFunction({class:"has-plugin-twitter",event:"pluginTwitterFeedReady"}),(t=e.getSelector(t,!1,!1)).length<1)||void t.forEach(function(l){var o=l.getAttribute("data-username")||"twitter",c=l.getAttribute("data-count")||3,t=l.getAttribute("data-loader")||"include/twitter/tweets.php",e=l.getAttribute("data-fetch-message")||"Fetching Tweets from Twitter...",a=l.querySelector(".twitter-widget-alert");a||((a=document.createElement("div")).classList.add("alert","alert-warning","twitter-widget-alert","text-center"),l.prepend(a),a.innerHTML='<div class="spinner-grow spinner-grow-sm me-2" role="status"><span class="visually-hidden">Loading...</span></div> '+e),fetch(t+"?username="+o).then(function(t){return t.json()}).then(function(t){if("object"==typeof t&&!t.isArray())return!1;a.remove();var e,i=0;t?.some(function(t){var e,a,r,n,s;i!=Number(c)&&(t=t,a=o,n=(e=l).getAttribute("data-font-class")||"font-body",s=t.text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(t){return'<a href="'+t+'" target="_blank">'+t+"</a>"}).replace(/\B@([_a-z0-9]+)/gi,function(t){return t.charAt(0)+'<a href="https://twitter.com/'+t.substring(1)+'" target="_blank">'+t.substring(1)+"</a>"}),e.classList.contains("fslider")?((r=document.createElement("div")).classList.add("slide"),r.innerHTML+='<p class="mb-3 '+n+'">'+s+'</p><small class="d-block"><a href="https://twitter.com/'+a+"/statuses/"+t.id_str+'" target="_blank">'+u(t.created_at)+"</a></small>",e.querySelector(".slider-wrap").append(r)):e.innerHTML+='<li><i class="fa-brands fa-x-twitter"></i><div><span>'+s+'</span><small><a href="https://twitter.com/'+a+"/statuses/"+t.id_str+'" target="_blank">'+u(t.created_at)+"</a></small></div></li>",i++)}),l.classList.contains("fslider")&&(e=setInterval(function(){1<l.querySelectorAll(".slide").length&&(l.classList.remove("customjs"),setTimeout(function(){r.flexSlider(),jQuery(l).find(".flexslider .slide").resize()},500),clearInterval(e))},1e3))}).catch(function(t){console.log(t),a.classList.remove("alert-warning"),a.classList.add("alert-danger"),a.innerHTML="Could not fetch Tweets from Twitter API. Please try again later."})})}}}();