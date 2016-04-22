$(document).ready(function(){

	function underborder(element) {

		$(element).on("mouseenter", function(){
			$(this).css({
				borderBottom: "2px solid #ff0000"
			});
		});

		$(element).on("mouseleave", function(){
			$(this).css({
				border: "none"
			});
		});	
	};

	underborder(".home");
	underborder(".about");
	underborder(".projects");
	underborder(".academics");
	underborder(".contact");
});