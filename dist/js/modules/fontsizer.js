CNVS.FontSizer=function(){var t=SEMICOLON.Core;return{init:function(e){return t.getSelector(e,!1,!1).length<1||(t.initFunction({class:"has-plugin-fontsizer",event:"pluginFontSizerReady"}),(e=t.getSelector(e,!1)).length<1)||void e.forEach(function(e){var t=e.getAttribute("data-target"),n=document.querySelector(t),t=e.getAttribute("data-step")||10,u=e.getAttribute("data-min")||12,o=e.getAttribute("data-max")||24,i=Number(document.defaultView.getComputedStyle(n).getPropertyValue("font-size").split("px")[0]),r=i*Number(t)*.01,t=e.querySelector(".font-size-default"),l=e.querySelector(".font-size-minus"),c=e.querySelector(".font-size-plus");t&&(t.onclick=function(e){e.preventDefault(),n.style.fontSize=i+"px"}),l&&(e.querySelector(".font-size-minus").onclick=function(e){e.preventDefault();e=Number(document.defaultView.getComputedStyle(n).getPropertyValue("font-size").split("px")[0])-r;u<=e&&(n.style.fontSize=e+"px")}),c&&(e.querySelector(".font-size-plus").onclick=function(e){e.preventDefault();e=Number(document.defaultView.getComputedStyle(n).getPropertyValue("font-size").split("px")[0])+r;e<=o&&(n.style.fontSize=e+"px")})})}}}();