$(document).ready(function(){

	$.stellar({

		horizontalScrolling: false,
  	responsive: true

  });

	/*tiles = $(".project").fadeTo(0,0); //this makes it transparent when the page loads

	$(window).scroll(function() {

		a = $(window).scrollTop();
		b = $(".textcontainer").offset().top + $(".textcontainer").height();
		
		if(a > b) {
			$(".navbar").css({
				background: "linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0))"
			})	
		} else {
			$(".navbar").css({
				background: "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,0))"
			})
		};
		
    tiles.each(function() {

        a = $(this).offset().top + $(this).height()/3;
        b = $(window).scrollTop() + $(window).heigPht();
        if (a < b) $(this).fadeTo(700,1);
    
    });
	});*/

});