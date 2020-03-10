/* 
*Description:   Theme Javascript
*Author:    toyean
*Website:   http://www.toyean.com/
*Mail:      toyean@qq.com
*Weibo: http://weibo.com/toyean
*Version:   1.3(2020-03-09)
*/
function copyright(){document.oncontextmenu=function(){return false};document.onselectstart=function(){return false};function closepage(){window.close()};if((window.console&&(console.firebug||console.table&&/firebug/i.test(console.table())))||(typeof opera=='object'&&typeof opera.postError=='function'&&console.profile.length>0)){closepage()};if(typeof console.profiles=="object"&&console.profiles.length>0){closepage()};window.onresize=function(){if((window.outerHeight-window.innerHeight)>200){closepage()}}}$(function(){var s=document.location;$(".menu a").each(function(){if(this.href==s.toString().split("#")[0]){$(this).parents("li").addClass("on").parent(".subnav").prev().addClass("on");return false}});$(".subnav a").each(function(){if(this.href==s.toString().split("#")[0]){$(this).addClass("on");return false}});var useragent=navigator.userAgent;var ismobile=useragent.match("Mobile");$('.subcate>a').click(function(){if(ismobile==null){window.location.href=$(this).attr('href')}else{$(this).parent().toggleClass("slidedown").siblings().removeClass("slidedown");return false}});$(".menu li>a").hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")});$(".menuico").on('click',function(){$(this).toggleClass("on");$(".menu,.fademask").toggleClass("on")});$(".fademask").click(function(){$(".menu,.menuico,.fademask").removeClass("on")});$(window).resize(function(){var window_width=$(window).width();if(window_width>1080){$(".menu,.fademask").removeClass("on")}else{$(".menuico").removeClass("on")}});$(".schico.statepop").click(function(){$(this).nextAll(".schbox").addClass("on");$(".schinput").focus()});$(".schclose,.schbg").click(function(){$(this).parents(".schbox").removeClass("on")});$(".schico.statefixed a").click(function(e){e.stopPropagation();if($(".menuico,.menu").hasClass("on")){$(".menuico,.menu").removeClass("on");$(".fademask").remove()}var u=navigator.userAgent;var isiOS=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(isiOS){$("html, body").animate({scrollTop:0},0)}$(this).nextAll(".schfixed").toggleClass("on");$(".schinput").focus()});$(document).click(function(e){var _con=$('.schfixed');if(!_con.is(e.target)&&_con.has(e.target).length===0){$('.schfixed').removeClass("on")}});$(document).keyup(function(event){switch(event.keyCode){case 27:$(".menu,.menuico,.schico,.schfixed").removeClass("on");return false}});$("#txaArticle").focus(function(){var cmtnum=$(".cmtform .text").length;if(cmtnum>0){$(".cmtform").slideDown()}});zbp.plugin.on("comment.post.success","tpure",function(){$(".cmts").removeAttr("data-content");$(".cmts").removeClass("nocmt")});if(tpure.backtotop){(function(){var $backToTopTxt="\u8fd4\u56de\u9876\u90e8",$backToTopEle=$('<a class="backtotop"><i></i></a>').appendTo($("body")).attr("title",$backToTopTxt).click(function(){$("html, body").animate({scrollTop:0},0)}),$backToTopFun=function(){var st=$(document).scrollTop(),winh=$(window).height();(st>500)?$backToTopEle.show():$backToTopEle.hide();if(!window.XMLHttpRequest){$backToTopEle.css("top",st+winh-166)}};$(window).bind("scroll",$backToTopFun);$backToTopFun()})()}if(tpure.fixmenu){$(window).scroll(function(){var $t=$(window).scrollTop();var $headh=$(".header").data("headh");if($t<=$headh){$(".header").removeClass("headbg")}if($t>=$headh){$(".header").addClass("headbg")}})}if(tpure.bannerdisplay){var $window=$(window);var $slide=$('.banner');var $menu=$('.menu');var windowHeight=$window.height();$('.banner').bind('display',function(event,visible){if(visible==true){$(this).addClass("display")}else{$(this).removeClass("display")}});function newPos(x,selectortop,pos,inertia){return x+"% "+(selectortop.position().top-pos)/2+"px"}function Move(){var pos=$window.scrollTop();if($slide.hasClass("display")){if(navigator.userAgent.match(/mobile/i)){$slide.css({'backgroundPosition':50%0})}else{$slide.css({'backgroundPosition':newPos(50,$menu,pos,2)})}}}Move();$window.resize(function(){Move()});$window.bind('scroll',function(){Move()})}if(tpure.lazyload){$("img").lazyload({placeholder:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",effect:"fadeIn",threshold:200})}if(tpure.ajaxpager){var $loadpagenum=tpure.loadpagenum;$.ias({thresholdMargin:-100,triggerPageThreshold:$loadpagenum,history:false,container:'.content',item:'.post',pagination:'.pagebar',next:'.pagebar .next-page a',loader:'<div class="pagination-loading">\u6570\u636e\u8f7d\u5165\u4e2d\u002e\u002e\u002e</div>',trigger:'\u4e0b\u4e00\u9875',onPageChange:function(pageNum,pageUrl,scrollOffset){window._gaq&&window._gaq.push(['_trackPageview',jQuery('<a/>').attr('href',pageUrl)[0].pathname.replace(/^[^\/]/,'/')])}})}if(tpure.singlekey){var singleprev=$(".single-prev").attr("href");var singlenext=$(".single-next").attr("href");$("body").keydown(function(event){if(event.keyCode==37&&singleprev!=undefined)location=singleprev;if(event.keyCode==39&&singlenext!=undefined)location=singlenext})}if(tpure.pagekey){var pageprev=$(".pagebar .now-page").prev().attr("href");var pagenext=$(".pagebar .next-page a").attr("href");$("body").keydown(function(event){if(event.keyCode==37&&pageprev!=undefined)location=pageprev;if(event.keyCode==39&&pagenext!=undefined)location=pagenext})}if(tpure.selectstart){copyright()}if(tpure.removep){$(".postcon p").each(function(){var $null=$(this).html();if($null==='&nbsp;'||$null==='<br>'||$null===' '){$(this).remove()}})}if(tpure.viewall){var $viewallheight=tpure.viewallheight;var $viewallstyle=tpure.viewallstyle;var a=$(".postcon").outerHeight();var arr=document.location.pathname.split("/");var arrLen=arr.length;var styleEle='<style type="text/css">'+'.postcon{ height:'+$viewallheight+'px;}'+'</style>';$("body").prepend(styleEle);var b=$(".postcon").outerHeight();var sheight=100-Math.ceil(b/a*100);if(sheight>0&&arr[arrLen-1].indexOf("_")<0){if($viewallstyle=='1'){$(".postcon").append('<div class="teles"><i>\u9605\u8bfb\u5269\u4f59\u7684'+sheight+"\u0025"+'</i></div>')}else{$(".postcon").append('<div class="telesmore"><i>\u9605\u8bfb\u66f4\u591a</i></div>')}$(".teles,.telesmore").on("click",function(){$(".postcon").animate({height:a},function(){$(".postcon").height('auto')});$(this).remove();return false})}else{$(".postcon").css("height",'auto')}}});