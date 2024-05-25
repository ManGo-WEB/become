"use strict";
// Award close icon
const award = document.querySelector(".award__img");

award.addEventListener("click", () => {
	document.querySelector(".award").remove();
});

// Play video
const btnClickVideo = document.getElementById("play-video");

const video = document.getElementById("active-video");
function openVideo() {
	video.play();
}

btnClickVideo.addEventListener("click", () => {
	openVideo();
});