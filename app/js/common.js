$(document).ready(function() {
	
	function heightDetect() {
		$(".main_header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	




});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(600).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 