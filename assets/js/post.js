(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{49:function(t,e,n){t.exports=n(50)},50:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),o=(n(6),n(21)),a=n(4),r=n(5),c=n.n(r);i()(document).ready(function(){c()(".js-post-content");var t=i()(".js-aos-wrapper"),e=i()(".js-progress"),n=i()(".js-scrolltop"),s=i()(".js-load-comments"),r=i()(".js-comments-iframe"),l=i()(".js-recommended-articles"),d=window.pageYOffset,u=0,f=0,m=0,p=!1;function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(t,")")).matches}function w(){p||requestAnimationFrame(b),p=!0}function b(){var t=f-u,n=Math.ceil(d/t*100);n<=100&&function(t){if(t<=100){var n=m-t/100*m;e[0].style.strokeDashoffset=n}}(1.5*n),p=!1}function v(){u=window.innerHeight,f=i()(document).height()}function g(){var t=e.parent().width()/2,n=h()?2:3;e.attr("stroke-width",n),e.attr("r",t-(n-1)),e.attr("cx",t),e.attr("cy",t),m=2*t*Math.PI,e[0].style.strokeDasharray="".concat(m," ").concat(m),e[0].style.strokeDashoffset=m}function k(e){h("1024px")?(i()("body").addClass("share-menu-displayed"),setTimeout(function(){t.removeAttr("data-aos")},e)):(Object(o.a)(".js-sticky",{stickyBitStickyOffset:100}),i()("body").removeClass("share-menu-displayed"))}!function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),e=0,n=t.length;e<n;e++){var s=t[e].closest(".kg-gallery-image"),i=t[e].attributes.width.value/t[e].attributes.height.value;s.style.flex="".concat(i," 1 0%")}}(),k(1e3),l.length>0?(l.on("init",function(){v(),g(),b()}),l.slick({arrows:!0,infinite:!0,prevArrow:'<button class="m-icon-button filled in-recommended-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',nextArrow:'<button class="m-icon-button filled in-recommended-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',mobileFirst:!0,responsive:[{breakpoint:720,settings:{slidesToShow:2}},{breakpoint:1023,settings:{arrows:!1,slidesToShow:3}}]})):(v(),g(),b()),n.click(function(){i()("html, body").animate({scrollTop:0},500)}),s.click(function(){s.parent().hide(),r.fadeIn("slow")}),i()(".js-post-content").find("img").each(function(){i()(this).addClass("js-zoomable");var t=i()(this).parent().find("figcaption");t?i()(this).attr("alt",t.text()):$this.attr("alt","")}),Object(a.a)(".js-zoomable"),window.addEventListener("scroll",function(){d=window.pageYOffset,w()},{passive:!0}),window.addEventListener("resize",function(){v(),k(100),setTimeout(function(){g(),w()},200)},{passive:!0})})}},[[49,0,1]]]);