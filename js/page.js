$(function(){
	var ul = $('.paginationList');
	var lis = $('.paginationList li');
	var previous = $('.t_page .previous');
	var next = $('.t_page .next');
	var maxcount = next.prev().children('a').html();
	var current = $('.paginationList .active');
	var gos = $('<li class=\"go\"><a href=\"javascript:void(0);\">下一页</a></li>');
	var list = $("<li class='list'><a>共"+maxcount+"页</a></li>");
	var eachpages = 5;
	var middle = 3;
	var barcount = 3;
	var lilist = new Array(eachpages-1);
	
	if( $(window).width() < 768 ){
		middle = 3;
		eachpages = 5;
	}
	
	if( maxcount != next.children('a').html() ){
		var gos = $("<li class='go'><a href='"+current.next().children('a').attr('href')+"'>下一页</a></li>");
	}
	
	if( lis.length > eachpages+barcount ){
		
		if( current.children('a').html() <= middle ){
			for( var i=1 ; i <= eachpages ; i++ ){
				lilist[i-1] = lis[i];
			}
			addElem(ul, previous, eachpages, lilist, next, gos, list);
		}else if( current.children('a').html() >= maxcount-middle+1 ){
			for( var i=1 ; i <= eachpages ; i++ ){
				lilist[i-1] = lis[maxcount-eachpages+i];
			}
			addElem(ul, previous, eachpages, lilist, next, gos, list);
		}else{
			var o = current.children('a').html();
			for( var i=1 ; i <= eachpages ; i++ ){
				lilist[i-1] = lis[o-middle+i];
			}
			addElem(ul, previous, eachpages, lilist, next, gos, list);
		}
	}
	
	if($('.t_page').html()){
		$('.t_page .active a').attr('href','javascript:void(0);');
	}
	if( current.children('a').html() == 1 ){
		$('.t_page .previous').children('a').attr('href','javascript:void(0);');
	}

	if( current.children('a').html() == maxcount ){
		$('.t_page .next').children('a').attr('href','javascript:void(0);');
		$('.t_page .go').children('a').attr('href','javascript:void(0);');
	}
		
})


function addElem(ul, previous, eachpages, lilist, next, gos, list){
	ul.empty();
	ul.append(previous);
	for( var i=1 ; i <= eachpages ; i++ ){
		ul.append(lilist[i-1]);
	}
	ul.append(next);
	ul.append(gos);
	ul.append(list);
}












