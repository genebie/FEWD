var images = [
	{
		src: "images/image_1.jpg"
	},
	{
		src: "images/image_2.jpg"
	},
	{
		src: "images/image_3.jpg"
	},
	{
		src: "images/image_4.jpg"
	},
	{
		src: "images/image_5.jpg"
	},
	{
		src: "images/image_6.jpg"
	}
];

var currentPosition = 0;

setInterval(function(){
	if (currentPosition<5){
		[currentPosition+=1];
	}
	else
	currentPosition=0;
	$("#image-to-vote-on").attr("src", images[currentPosition].src);

}, 3000);
