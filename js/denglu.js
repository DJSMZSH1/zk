$('.form>.smdl>a>span').click(function(){
	$('.form>.zhdl-two').css({display:'none'});
	$('.form>.smdl-two').css({display:'block'});
	$('.form>.smdl>a>span').css({color:'#f90',"border-bottom":'1px solid #f90'});
	$('.form>.zhdl>a>span').css({color:'#333',"border-bottom":'none'});
	
})
$('.form>.zhdl>a>span').click(function(){
	$('.form>.zhdl-two').css({display:'block'});
	$('.form>.smdl-two').css({display:'none'});
	$('.form>.smdl>a>span').css({color:'#333',"border-bottom":'none'});
	$('.form>.zhdl>a>span').css({color:'#f90',"border-bottom":'1px solid #f90'});
	
})