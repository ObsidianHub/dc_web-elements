const musicContainer = document.getElementById("music-container"),
  progressContainer = document.getElementById("progress-container"),
  audio = document.getElementById("audio"),
  progress = document.getElementById("progress"),
  title = document.getElementById("title"),
  cover = document.getElementById("cover"),
  playBtn = document.getElementById("play"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");

const songs = [
  "imagine-dragons-whatever-it-takes",
  "one-republic-all-the-right-moves",
  "twenty-one-pilots-stressed-out",
];
let songNames = songs.map((el) => {
  return el.split("-").join(" ");
});
console.log(songNames);
let songIndex = 0;

loadSong(songs[songIndex], songNames[songIndex]);

function loadSong(song, songName) {
  title.innerText = songName;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex], songNames[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex], songNames[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("ended", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
