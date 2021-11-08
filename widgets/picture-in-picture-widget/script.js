const videoElement = document.getElementById("video"),
  button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;

  // Start Picture in Picture
  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

selectMediaStream();
