$("#box2").on("click", function(){
	$(".box").addClass("fun");
	$("h1").addClass("crazy");
	$("#box3").slideToggle();
});

$(".box").on("click", function(){
	$("h1").text("jQuery Ninja");
});

$("#box1").on("click", function(){
	$("img").attr("src", "images/moto.jpg");
});

$("#dropdownMenu").hide();

$("#dropdownButton").on("click", function(){
	$("#dropdownMenu").slideToggle();
});

$("#answer2").hide();;

$("#question2").on("click", function(){
	$("#answer2").slideDown();
	$("#answer1").slideUp();
	$("li").removeClass("active");
	$("#question2").addClass("active"); 
});

$("#question1").on("click", function(){
	$("#answer1").slideDown();
	$("#answer2").slideUp();
	$("li").removeClass("active");
	$("#question1").addClass("active");
});

$("#showYellowCircles").on("click", function(){
	$(".yellow").show();
	$(".blue").hide();
});

$("#showBlueCircles").on("click", function(){
	$(".blue").show();
	$(".yellow").hide();
});
