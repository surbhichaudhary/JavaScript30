function myFunction(current) {
	var audio = new Audio("sounds/a1.mp3");
	audio.play();

	setTimeout(function () {
		audio.pause();
	}, 2000);
}
