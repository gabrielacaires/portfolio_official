$(document).ready(function(){


	function hovertext(elem) {
		$(elem).css({
			/*backgroundColor: "#4d79ff"*/
			backgroundColor: "#99173C"
		})
	}

	function afterhover(elem) {
		$(elem).css({
			backgroundColor: "#cccccc"
		})
	}

	$(".text1").on("mouseenter", function () {
		hovertext(".text1");
	});

	$(".text1").on("mouseleave", function () {
		afterhover(".text1");
	});

	$(".text2").on("mouseenter", function () {
		hovertext(".text2");
	});

	$(".text2").on("mouseleave", function () {
		afterhover(".text2");
	});

	$(".text3").on("mouseenter", function () {
		hovertext(".text3");
	});

	$(".text3").on("mouseleave", function () {
		afterhover(".text3");
	});

	$(".text4").on("mouseenter", function () {
		hovertext(".text4");
	});

	$(".text4").on("mouseleave", function () {
		afterhover(".text4");
	});
	
});

