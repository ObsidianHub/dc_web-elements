// CONSTANTS
const activeToolEl = document.getElementById('active-tool'),
  brushColorBtn = document.getElementById('brush-color'),
  brushIcon = document.getElementById('brush'),
  brushSize = document.getElementById('brush-size'),
  brushSlider = document.getElementById('brush-slider'),
  bucketColorBtn = document.getElementById('bucket-color'),
  eraser = document.getElementById('eraser'),
  clearCanvasBtn = document.getElementById('clear-canvas'),
  saveStorageBtn = document.getElementById('save-storage'),
  loadStorageBtn = document.getElementById('load-storage'),
  clearStorageBtn = document.getElementById('clear-storage'),
  downloadBtn = document.getElementById('download');
const { body } = document;

// canvas
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const context = canvas.getContext('2d');

// let variables
let currentSize = 10,
  bucketColor = '#FFFFFF',
  currentColor = '#A51DAB',
  isEraser = false,
  isMouseDown = false,
  drawnArray = [];

brushSlider.addEventListener('change', () => {
  currentSize = brushSlider.value;
  displayBrushSize();
});

brushColorBtn.addEventListener('change', () => {
  isEraser = false;
  currentColor = `#${brushColorBtn.value}`;
});

function displayBrushSize() {
  if (brushSlider.value < 10) {
    brushSize.textContent = `0${brushSlider.value}`;
  } else {
    brushSize.textContent = brushSlider.value;
  }
}
