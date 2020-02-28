var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

// function increaseSpeed() {

function increaseSpeed() { 
	video.playbackRate *= 1.2;
  	console.log("Speed is "+ video.playbackRate);
} 

// 	console.log("Speed is "+ );
// } 

// function skipAhead() {

function skipAhead() {
	let time = video.currentTime
	let future = video.currentTime + 60
	video.currentTime = future

	if(video.ended){
		video.currentTime = 0
		video.playbackRate = 1
	}

	console.log("Current location is "+ video.currentTime);

}

// 	console.log("Current location is "+ );
// } 

function mute() { 
	if (video.muted){
		console.log("Changing to Unmuted")
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";

	}
	else{
		console.log("Changing to Muted")
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";

	}

  	

}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volumeSlider.value /100;
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
	console.log("Volume is ");


}
// function changeVolume() {
// ;	console.log("Volume is ");
// }
       

// function gray() { 


// 	console.log("In grayscale")
// }
function gray() {
	video.classList.add("grayscale")
console.log("In grayscale")


}

// function color() {

function color() {
	video.classList.remove("grayscale")
console.log("In color")


}

// 	console.log("In color") 
// }
