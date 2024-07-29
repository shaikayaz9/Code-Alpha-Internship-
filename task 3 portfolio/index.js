let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}
const dates = document.getElementById("demo")
const d = new Date();
let year = d.getFullYear();

dates.innerHTML = year;