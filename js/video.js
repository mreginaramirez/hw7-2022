window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// *** SETUP
	var video = document.getElementById("player1");
	video.load();
	video.autoplay = false;
	video.loop = false;

	// *** PLAY
	var play = document.getElementById("play");
	play.addEventListener("click", playFunc);

	// *** PAUSE
	var pause = document.querySelector("#pause");
	pause.addEventListener("click", pauseFunc);

	// *** MUTE
	var mute = document.querySelector("#mute");
	mute.addEventListener("click", muteFunc);

	// *** VOLUME
	var slider = document.querySelector("#slider");
	slider.addEventListener("change", volumeFunc);

	// *** STYLE
	var oldStyle = document.getElementById("vintage");
	oldStyle.addEventListener("click", oldStyleFunc);

	var origStyle = document.getElementById("orig");
	origStyle.addEventListener("click", origStyleFunc);

	// *** SLOW DOWN
	var slow = document.getElementById("slower");
	slow.addEventListener("click", slowFunc);

	// *** SPEED UP
	var speed = document.getElementById("faster");
	speed.addEventListener("click", speedFunc);

	// *** SKIP AHEAD
	var skip = document.getElementById("skip");
	skip.addEventListener("click", skipFunc);
});

function playFunc() {
	var video = document.getElementById("player1");
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
}

function pauseFunc() {
	var video = document.getElementById("player1");
	console.log("Pause Video");
	video.pause();
}

function muteFunc() {
	var video = document.getElementById("player1");

	// check state of mute
	if (video.muted == false) {
		// not muted -> mute, change text to unmute
		console.log("Mute Video");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else {
		// already muted -> unmute, change text to mute
		console.log("Unmute Video");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
}

function volumeFunc() {
	console.log("Slider changing");

	var video = document.getElementById("player1");
	var slider = document.querySelector("#slider");
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100)+ "%";
}

function oldStyleFunc() {
	console.log("Change to old style");

	var video = document.getElementById("player1");
	video.classList.add("oldSchool");

	// var video = document.getElementById("player1");
	// video.style.filter = "grayscale(100%)";
	// video.style.width = "75%";
	// video.style.border = "5px double grey";
	// video.style.borderRadius = "20px";
}

function origStyleFunc() {
	console.log("Change to original style");

	var video = document.getElementById("player1");
	video.classList.remove("oldSchool");

	// var video = document.getElementById("player1");
	// video.style.filter = "none";
	// video.style.width = "90%";
	// video.style.border = "2px solid black";
	// video.style.borderRadius = "0px";
}

function slowFunc() {
	console.log("Slow down")

	var video = document.getElementById("player1");
	video.playbackRate = video.playbackRate * 0.90;

	console.log("New speed: " + video.playbackRate);
}

function speedFunc() {
	console.log("Speed up");

	var video = document.getElementById("player1");
	video.playbackRate = video.playbackRate + video.playbackRate * 0.10;

	console.log("New speed: " + video.playbackRate);
}

function skipFunc() {
	console.log("Skip ahead 10 seconds");

	var video = document.getElementById("player1");
	var newTime = video.currentTime + 10;

	if (newTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}

	console.log("New video location: " + video.currentTime);
}