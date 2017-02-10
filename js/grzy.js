$('.wdxhj>ul').mouseover(function(){
	$('.wdxhj>div').css('display','block')
})

   var num=0;
$('.wdxhj>.butz').click(function(){
	$('.wdxhj>ul').animate({
		left:"-=125px"
	})
})
$('.wdxhj>.buty').click(function(){
	$('.wdxhj>ul').animate({
		left:"+=125px"
	})
})
var cc=true;

	$('#shou').click(function(){
		if(cc){
			$('.mian-left').slideUp(500)
			cc=false;
		}
		else{
			$('.mian-left').slideDown(500)
			cc=true;
		}
})

		


