let docTitle = document.title;

window.addEventListener("blur", () =>{
    document.title = "Come back ☹";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
const slider = document.querySelector('.theme input')
const root = document.querySelector(':root')


function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to initialize the slider from cookie
function initializeSlider() {
  const savedColor = getCookie('sliderColor');
  if (savedColor) {
      document.getElementById('colorSlider').value = savedColor;
      // document.getElementById('text').style.color = savedColor;
      hue = slider.value
      root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`)
      root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`)
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  // const colorSlider = document.getElementById('colorSlider');
  initializeSlider();
});
slider.addEventListener('input', () => {
  let hue = slider.value
  setCookie('sliderColor', hue, Infinity);
  root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`)
  root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`)
})