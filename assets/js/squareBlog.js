$(window).load(function() {

	$('.category').click(function(){
		$( this ).parent().switchClass( "fullscreenNav", "miniNav", 500, "easeInOutQuad" );

	});
});	
/*
	$('.category').click(function(){
		
		$(".fullscreenNav").attr('flex-direction', 'column');
		
		$(".fullscreenNav").animate({
			left:'100px',
			height:'200px',
			width:'100px',
		
			overflow:'hidden'
		});
		$('.category').animate({
			height:'100px',
			width:'100px'
		});
	});
});
 */
