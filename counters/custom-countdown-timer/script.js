const countdownForm = document.getElementById("countdownForm"),
  inputContainer = document.getElementById("input-container"),
  dateEl = document.getElementById("date-picker"),
  countdownEl = document.getElementById("countdown"),
  countdownElTitle = document.getElementById("countdown-title"),
  countdownBtn = document.getElementById("countdown-button"),
  timeElements = document.querySelectorAll("span"),
  completeEl = document.getElementById("complete"),
  completeElInfo = document.getElementById("complete-info"),
  completeBtn = document.getElementById("complete-button");

let countdownTitle = "",
  countdownDate = "",
  countdownValue = Date,
  countdownActive,
  savedCountdown;

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// Set Date input min value (we can't set the Past timer) & target value with today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

function reset() {
  // Hide countdowns, show input form
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  // Reset values, remove localStorage item
  countdownTitle = "";
  countdownDate = "";
  localStorage.removeItem("countdown");
}

function restorePreviousCountdown() {
  // Get countdown from localStorage if available
  if (localStorage.getItem("countdown")) {
    inputContainer.hidden = true;
    savedCountdown = JSON.parse(localStorage.getItem("countdown"));
    countdownTitle = savedCountdown.title;
    countdownDate = savedCountdown.date;
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);

// On Load, check localStorage
restorePreviousCountdown();
