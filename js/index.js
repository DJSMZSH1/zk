var num=0;
var arr=['#de0704','#8700e1','#5A1CD7','#FE730A','#FE2C09','#F05D18'];
var t=setInterval(fuck,4000);
function fuck(){
	num++;
	if(num>5){
		num=0;
	}
	$(".banner-img>ul>li").fadeOut(2000).eq(num).fadeIn(2000);
	$('#banner').css('background',arr[num]);
	$('.but>div').css('background','rgba(0,0,0,0.7)').eq(num).css('background',"#ff6633");
		
}


   $('.but>div').click(function(){
   		$('.but>div').css('background','rgba(0,0,0,0.7)').eq($(this).index()).css('background',"#ff6633")
   		$(".banner-img>ul>li").fadeOut(1000).eq($(this).index()).fadeIn(1000);
   		$('#banner').css('background',arr[$(this).index()]);
   		num=$(this).index();
   })
	$('.but>div').mousemove(function(){
		clearInterval(t);
	})
	$('.but>div').mouseout(function(){
		t=setInterval(fuck,3000);
	})
	
	 var mun=0;
    $('.anleft').click(function(){
    	if(!$('.waptwo>ul').is(':animated')){
    		mun++;
    	if(mun==4){
    		mun=1;
    		$('.waptwo>ul').css('left','0')
    	}
    	$('.waptwo>ul').animate({
    		left:-mun*1190+'px'
    	},1000)
    	}
    	
    	
    })
	 $('.anright').click(function(){
	 	if(!$('.waptwo>ul').is(':animated')){
    		mun--;
    	if(mun==-1){
    		mun=3;
    		$('.waptwo>ul').css('left','-3570px')
    	}
    	$('.waptwo>ul').animate({
    		left:-mun*1190+'px'
    	},1000)
    	}
	    })

var unm=0;
$('.title>div').click(function(){
	unm++;
	if(unm>2){
		unm=0;
	}
	$('.zlunbo>ul').css('left',-unm*1190+'px');
})

$(".bari-top>ul>li").eq(0).mousemove(function(){
	$('.nei2').css('display','none');
	$('.nei1').css('display','block');
	$('.nei3').css('display','none');
})
$(".bari-top>ul>li").eq(1).mousemove(function(){
	$('.nei2').css('display','block');
	$('.nei1').css('display','none');
	$('.nei3').css('display','none');
})
$(".bari-top>ul>li").eq(2).mousemove(function(){
	$('.nei2').css('display','none');
	$('.nei1').css('display','none');
	$('.nei3').css('display','block');
})


$(".three>.one>li").eq(0).mousemove(function(){
	$('.tw_to1').css('display','block');
	$('.tw_to2').css('display','none');
	$('.tw_to3').css('display','none');
})
$(".one>li").eq(1).mousemove(function(){
	$('.tw_to1').css('display','none');
	$('.tw_to2').css('display','block');
	$('.tw_to3').css('display','none');
})
$(".one>li").eq(2).mousemove(function(){
	$('.tw_to1').css('display','none');
	$('.tw_to2').css('display','none');
	$('.tw_to3').css('display','block');
})

$('.louceng>.biaoti>ul>li').mousemove(function(){
	$('.louceng>.biaoti>ul>li>a').css('color','#666').eq($(this).index()).css('color','#663300');
	$('.louceng>.biaoti>ul>li>.sone').css('display','none').eq($(this).index()).css('display','block')
	$('.louceng>.biaoti>ul>li>a').css('font-weight','normal').eq($(this).index()).css('font-weight','bold')
	
})

var c=0;
setInterval(function(){
		c++;
	if(c==3){
		c=0;
	}

	$(".ycgg").each(function(i,o){
		$(this).find(".yctop ul li").fadeOut(2000).eq(c).fadeIn(2000);
	})
},4000)

$(document).scroll(function(){
	var n=$(document).scrollTop();
	if(n>1000){
		$('#tlc').css('display','block')
	}else{
		$('#tlc').css('display','none')
	}
})


$('.a-n').click(function(){
	var dq=$(this).index();
	var xy=$('.j-ie').eq(dq).offset().top;
	$('html,body').scrollTop(xy);
})

/*var k=0;

	$('#rcd>ul>li').mousemove(function(){
	$('#rcd>ul>li>div').eq(k).css('left','-140px')
})*/
$('#rcd>ul>li').eq(0).mousemove(function(){
	$('#rcd>ul>li>.cz1').css('left','-70px')
})
$('#rcd>ul>li').eq(0).mouseout(function(){
	$('#rcd>ul>li>.cz1').css('left','70px')
})

$('#rcd>ul>li').eq(1).mousemove(function(){
	$('#rcd>ul>li>.zj1').css('left','-70px')
})
$('#rcd>ul>li').eq(1).mouseout(function(){
	$('#rcd>ul>li>.zj1').css('left','70px')
})


$('#rcd>ul>li').eq(2).mousemove(function(){
	$('#rcd>ul>li>.qd1').css('left','-70px')
})
$('#rcd>ul>li').eq(2).mouseout(function(){
	$('#rcd>ul>li>.qd1').css('left','70px')
})