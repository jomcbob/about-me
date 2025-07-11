const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
const theme = document.querySelector('.theme')
theme.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme")
    theme.src = theme.src.includes('moon.png') ? './assets/sun.png' : './assets/moon.png';
})