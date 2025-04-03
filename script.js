// Selecting Elements
const chantInput = document.getElementById("chantInput");
const chantButton = document.getElementById("chantButton");
const counterDisplay = document.getElementById("counterDisplay");
const nameSelect = document.getElementById("nameSelect");
const counterSelect = document.getElementById("counterSelect");
const progressBar = document.getElementById("progress-bar");
const congratsMessage = document.getElementById("congratsMessage");
const darkModeToggle = document.getElementById("darkModeToggle");

let count = parseInt(counterSelect.value);

// Update count on selection change
counterSelect.addEventListener("change", () => {
  count = parseInt(counterSelect.value);
  counterDisplay.textContent = count;
  congratsMessage.style.display = "none";
  chantInput.disabled = false;
  chantButton.disabled = false;
  progressBar.style.width = "0%";
});

// Update Progress Bar
function updateProgressBar() {
  let completed = ((parseInt(counterSelect.value) - count) / parseInt(counterSelect.value)) * 100;
  progressBar.style.width = completed + "%";
}

// Chanting Functionality with Submit Button
chantButton.addEventListener("click", () => {
  if (chantInput.value.toLowerCase().trim() === nameSelect.value.toLowerCase()) {
    if (count > 0) {
      count--;
      counterDisplay.textContent = count;
      updateProgressBar();
    }
    chantInput.value = "";

    if (count === 0) {
      chantInput.disabled = true;
      chantButton.disabled = true;
      congratsMessage.style.display = "block";
    }
  }
});

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
