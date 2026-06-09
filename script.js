// Character sets
const charSets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:,.<>?/`~"
};

// Track active options
let activeOptions = {
  upper: true,
  lower: true,
  numbers: true,
  symbols: true
};

// Update length display + slider gradient + live password
function updateLength(val) {
  document.getElementById("lengthVal").textContent = val;

  const slider = document.getElementById("lengthSlider");
  const percent = ((val - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, var(--purple) ${percent}%, rgba(255,255,255,0.1) ${percent}%)`;

  // Auto-generate password when slider moves
  generatePassword();
}

// Toggle option buttons
function toggleOption(btn, type) {
  activeOptions[type] = !activeOptions[type];
  btn.classList.toggle("active");

  const checkbox = document.getElementById(`check-${type}`);
  checkbox.style.background = activeOptions[type] ? "var(--purple)" : "transparent";
  checkbox.style.borderColor = activeOptions[type] ? "var(--purple)" : "rgba(255,255,255,0.3)";

  // Auto-generate password when options change
  generatePassword();
}

// Generate password
function generatePassword() {
  const length = parseInt(document.getElementById("lengthSlider").value);
  let chars = "";

  // Build character pool
  for (let type in activeOptions) {
    if (activeOptions[type]) chars += charSets[type];
  }

  if (!chars) {
    document.getElementById("passwordOutput").value = "⚠ Select options!";
    return;
  }

  // Generate random password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    password += chars[randIndex];
  }

  document.getElementById("passwordOutput").value = password;
}
