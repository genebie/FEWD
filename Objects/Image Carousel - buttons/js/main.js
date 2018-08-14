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

var currentIndex = 0;

$('#next').on('click', function () {
	console.log(currentIndex);
	if (currentIndex === images.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}
	$("#image-to-vote-on").attr("src", images[currentIndex].src);
});

$('#prev').on('click', function () {
	console.log(currentIndex);
	if (currentIndex === 0) {
		currentIndex = images.length - 1;
	} else {
		currentIndex -= 1;
	}

	$("#image-to-vote-on").attr("src", images[currentIndex].src);
});



