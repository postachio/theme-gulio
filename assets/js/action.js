$(window).load(function() {

/* Variables
*/

	//Top navbar and it's height
	var elem = $('div .navbar-fixed-top');
	var headerHeight = elem.height();

	

/* pathname= '/contact'
*/
	if($(location).attr('pathname') == "/contact") {
		var contactOffset = $('#contact').offset().top;
		var contactHeight = contactOffset

		$('html, body').animate({
			scrollTop : contactHeight
		}, 1000)
	}

/* All Paths
*/

	// Scroll Listener to toggle navbar style
	$(window).on('scroll', function() {
		var scrollPos = window.pageYOffset;

		if(scrollPos > 150) {
			elem.addClass("scroll-fixed-navbar");
		}
		else{
			elem.removeClass("scroll-fixed-navbar");
		}
	});


/* pathname= '/blog'
	

	// Scroll Listener to toggle Blog Topic navbar style
	$(window).scroll(function(e) {
		var testset = ($(window).height() * .20);
		var windowTop = $(window).scrollTop();
		var topicNavHeight = $('#topicNavAnchor').offset().top;
			if(windowTop + testset > topicNavHeight) {
				$('#topicNav').addClass('col-sm-1');
				$('#topicNav').addClass('fixed');
				$('#topicNavAnchor').height($('#topicNav').height());				
			}
			else{
				$('#topicNav').removeClass('col-sm-1');
				$('#topicNav').removeClass('fixed');
				$('#topicNavAnchor').height(0);	
			}	
	
	});
	*/	
});
