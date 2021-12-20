const img = document.querySelector('img'),
  title = document.getElementById('title'),
  artist = document.getElementById('artist'),
  music = document.querySelector('audio'),
  currentTimeEl = document.getElementById('current-time'),
  durationEl = document.getElementById('duration'),
  progress = document.getElementById('progress'),
  progressContainer = document.getElementById('progress-container'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  playBtn = document.getElementById('play');

const songs = [
  {
    name: 'imagine-dragons-whatever-it-takes',
    displayName: 'Whatever It Takes',
    artist: 'Imagine Dragons',
  },
  {
    name: 'one-republic-all-the-right-moves',
    displayName: 'All the right moves',
    artist: 'One Republic',
  },
  {
    name: 'twenty-one-pilots-stressed-out',
    displayName: 'Stressed Out',
    artist: 'Twenty One Pilots',
  },
];

let isPlaying = false;
let songIndex = 0;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
