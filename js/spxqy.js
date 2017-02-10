$('.subnav>a,#erjic').hover(function(){

	$('#erjic').css('display','block');
},function(){
	$('#erjic').css('display','none');
})


+(function(){	

$('.cont-two>.left>div').mousemove(function(){
	$('#smoll').css('display','block');
	$('#big').css('display','block');
})
$('.cont-two>.left>div').mouseout(function(){
	$('#smoll').css('display','none');
	$('#big').css('display','none');
})
$('.cont-two>.left>div').mousemove(function(ev){
	var ev=ev||event;
	var x=ev.pageX-$('.cont-two>.left>div').offset().left-$('#smoll').width()/2;
	var y=ev.pageY-$('.cont-two>.left>div').offset().top-$('#big').height()/8;

	if(x<0){
		x=0;
	}
	/*if(x>=$('.cont-two>.left>div').width().left-$('#smoll').width()){
		x=$('.cont-two>.left>div').width().left-$('#smoll').width();
	}*/
	if(x>=$('.fdj').width()-$('#smoll').width()+40){
		x=$('.fdj').width()-$('#smoll').width()+40;
	}
	if(y<0){
		y=0;
	}
	if(y>=$('.fdj').height()-$('#smoll').height()+20){
		y=$('.fdj').height()-$('#smoll').height()+20;
	}
	
	$('#smoll').css({
		'left':x+'px',
		'top':y+'px',
	})
	var blX=-x/$("#big").width()*$("#big>img").width()+"px";
	var blY=-y/$("#big").height()*$("#big>img").height()+"px";
	
	console.log(blX);
	$('#big img').css({
		'left':blX,
		'top':blY
		});
	
	

})
	
		
   
})()