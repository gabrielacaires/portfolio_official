$(".section1").on("mouseenter", function(){
	$(this).css({
		backgroundColor: "gray",
		color: "white",
		width: "100%"
	});
	$(".content1").show();
});

$(".section1").on("mouseleave", function(){
	$(this).css({
		backgroundColor: "#ccb3ff",
		color: "black",
		width: "900px"
	});

	$(".content1").hide();
});

$(".section2").on("mouseenter", function(){
	$(this).css({
		backgroundColor: "gray",
		color: "white",
		width: "100%"
	});

	$(".content2").show();
});

$(".section2").on("mouseleave", function(){
	$(this).css({
		backgroundColor: "#ce99ff",
		color: "black",
		width: "900px"
	});

	$(".content2").hide();
});

$(".section3").on("mouseenter", function(){
	$(this).css({
		backgroundColor: "gray",
		color: "white",
		width: "100%"
	});

	$(".content3").show();
});

$(".section3").on("mouseleave", function(){
	$(this).css({
		backgroundColor: "#b366ff",
		color: "black",
		width: "900px"
	});

	$(".content3").hide();
});

$(".section4").on("mouseenter", function(){
	$(this).css({
		backgroundColor: "gray",
		color: "white",
		width: "100%"
	});

	$(".content4").show();
});

$(".section4").on("mouseleave", function(){
	$(this).css({
		backgroundColor: "#8000ff",
		color: "black",
		width: "900px"
	});

	$(".content4").hide();
});

