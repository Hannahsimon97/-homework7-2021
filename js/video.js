var video = document.querySelector('#player1');
var volume = document.querySelector('#volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML="100%"
	video.play();
	

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove CSS");
	video.classList.remove('oldSchool');
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log('New speed is',video.playbackRate);
	video.playbackRate *= 0.95;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('New speed is',video.playbackRate);
	video.playbackRate /= 0.95;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log('Original location',video.currentTime);
	video.currentTime += 15;
	if (video.currentTime>=video.duration){
		video.currentTime = 0
		console.log('Going back to beginning');
		video.play();
	}
	console.log('New location',video.currentTime);

	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").textContent = :"unmute"
	} else {
		video.muted = false;
		document.querySelector("#mute").textContent = "mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log('changing volume');
	console.log(this.value);
	video.volume = this.value /100;
	document.querySelector("volume").innerHTML=video.volume *100 +"%";
});