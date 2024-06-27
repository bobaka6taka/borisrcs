window.addEventListener("blur", () => {
  document.title = "Come back ☹";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})

let docTitle = document.title;

const slider = document.querySelector('.theme input');
const root = document.querySelector(':root');

function initializeSlider() {
  const savedColor = localStorage.getItem('sliderColor');
  if (savedColor) {
    document.getElementById('colorSlider').value = savedColor;
    let hue = savedColor;
    root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`);
    root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`);
  } else {
    let hue = 131.5; // default dark green
    root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`);
    root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSlider();
});

slider.addEventListener('input', () => {
  let hue = slider.value;
  localStorage.setItem("sliderColor", hue); // save forever
  root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`);
  root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`);
});