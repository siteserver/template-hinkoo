$(document).ready(function () {
	$(".navbar-toggle").click(function (){
		if($(".in").is(":visible")==true){
			$(".in").hide();
		}else{
			$(".in").show();
		}
	 });
	var url = window.location.href;
	$(".home-tab-box a").each(function(index){
		var url_str = $(this).attr("href");
		url_str = url_str.replace(/(^\s*)|(\s*$)/g, "");
		url_str = url_str.replace(/\s/g,"");
		var url_sz1 = url_str.split("/");
		var url_sz2 = url.split("/");
		console.log(url_sz1[4], url_sz2[4])
		if(url_sz1[4] == url_sz2[4]){
			$(this).addClass("active");
		}  
	 }); 
	 
	$(".header ul li").each(function(index){

		var url_str = $(this).children("a").attr("href");
		url_str = url_str.replace(/(^\s*)|(\s*$)/g, "");
		url_str = url_str.replace(/\s/g,"");
		var url_sz1 = url_str.split("/");
		var url_sz2 = url.split("/");
		if(url_sz1[3] == url_sz2[3]){
			$(this).children("a").addClass("active");
		}  
	 });

});
