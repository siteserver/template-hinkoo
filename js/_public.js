$(function () {
	if(document.documentElement.clientWidth > 767){
		init(),
		scroll()
	}else{
		var p = $(".nav-btn-go"),
		u = $(".nav-list"),
		r = function (e, n) {
			$(e.target).hasClass("nav-btn-go") && !n || (u.removeClass("in"), p.removeClass("col-xs-0"))
		};
		u.css("height", document.documentElement.clientHeight + "px")
		p.on("click", function(){
			var a = $(this);
			a.addClass("col-xs-0"),
			u.addClass("in")
		}),
		$(document).off("click", r).on("click", r);
	}
})

var h1, h2, t, p,
	c = "nav-hidden",
	i = ["bounceInTop"]

function init(){
	h1 = $("#header-1"),
	h2 = $("#header-2"),
	t = document.documentElement.clientHeight || document.body.clientHeight;
}

function scroll() {
	window.onscroll = function () {
		var a = document.documentElement.scrollTop || document.body.scrollTop;
		if(a >= 80){
			h1.hasClass(c) || h1.addClass(c),
			h2.hasClass("in") || h2.addClass("in")
		}else{
			h1.hasClass(c) && h1.removeClass(c),
			h2.hasClass("in") && h2.removeClass("in")
		}
	}
}