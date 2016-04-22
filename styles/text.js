$(document).ready(function(){

	function mouseenteralign(section){
		$(section).css({
				backgroundColor: "rgba(0,0,0,0.7)",
				color: "white",
				width: "100%",
				paddingLeft: "10%"
			});
	};

	function mouseleavealign(section){
		$(section).css({
				backgroundColor: "transparent",
				width: "200px",
				paddingLeft: "0%"
			});
	}

	/*function selectRegion(num) {
		var nameofsec = [,,,];
		sections = 4;

		for (var i = 0; i < sections; i++) {
			if(num != (i+1) ) {
				nameofsec[i] = [".section" + (i+1)];
			}	
		};

		return nameofsec;
	};*/

	$(".section1").on("mouseenter", function(){
		$(this).css({
			backgroundColor: "rgba(0,0,0,0.7)",
			color: "white",
			width: "100%",
			paddingLeft: "10%"
		});

		$(".section2").hide();
		$(".section3").hide();
		$(".section4").hide();

		$(".title").show();
		$(".content1").show();
	});

	$(".section1").on("mouseleave", function(){
		$(this).css({
			backgroundColor: "transparent",
			width: "200px",
			paddingLeft: "25%"
		});

		$(".section2").show();
		$(".section3").show();
		$(".section4").show();

		$(".title").hide();
		$(".content1").hide();
	});

/*	$(".section2").on("mouseenter", function(){
		mouseenteralign(".section2");

	var nameofboxes = selectRegion(2);
	for(i = 0; i < nameofboxes.length; i++){
		$(nameofboxes[i]).hide();
	}

		$(".title").show();
		$(".content2").show();
	});

	$(".section2").on("mouseleave", function(){
		mouseleavealign(".section2");
		
		$(".section1").show();
		$(".section3").show();
		$(".section4").show();

		$(".title").hide();
		$(".content2").hide();
	});*/

	$(".section2").on("mouseenter", function(){
		mouseenteralign(".section2");

		$(".section1").hide();
		$(".section3").hide();
		$(".section4").hide();

		$(".title").show();
		$(".content2").show();
	});

	$(".section2").on("mouseleave", function(){
		mouseleavealign(".section2");
		
		$(".section1").show();
		$(".section3").show();
		$(".section4").show();

		$(".title").hide();
		$(".content2").hide();
	});

	$(".section3").on("mouseenter", function(){
		mouseenteralign(".section3");

		$(".section1").hide();
		$(".section2").hide();
		$(".section4").hide();

		$(".title").show();
		$(".content3").show();
	});

	$(".section3").on("mouseleave", function(){
		mouseleavealign(".section3");

		$(".section1").show();
		$(".section2").show();
		$(".section4").show();

		$(".title").hide();
		$(".content3").hide();
	});

	$(".section4").on("mouseenter", function(){
		mouseenteralign(".section4");

		$(".section1").hide();
		$(".section2").hide();
		$(".section3").hide();

		$(".title").show();
		$(".content4").show();
	});

	$(".section4").on("mouseleave", function(){
		mouseleavealign(".section4");
		
		$(".section1").show();
		$(".section2").show();
		$(".section3").show();

		$(".title").hide();
		$(".content4").hide();
	});

});