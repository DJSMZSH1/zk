var cc=true;

	$('#shou').click(function(){
		if (cc) {
				$('.mian-left').slideUp(500)
				cc=false;

		} else{
				$('.mian-left').slideDown(500)
				cc=true;
		}

})
