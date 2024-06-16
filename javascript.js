let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Come back ☹";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
const slider = document.querySelector('.theme input')
const root = document.querySelector(':root')

slider.addEventListener('input', () => {
  const hue = slider.value

  root.style.setProperty('--primary-color', `oklch(45.12% 0.267 ${hue})`)
  root.style.setProperty('--secondary-color', `oklch(94.45% 0.03 ${hue})`)
})

