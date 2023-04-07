const welcome = document.getElementById("welcome-message");
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.menu-sidebar');
const sideMenuCloseBtn = document.querySelector('#close-btn');
const callToActionBtn = document.querySelector('.action-button');
const col2 = document.querySelector('.col-2');

welcome.addEventListener('click', () => {
    welcome.textContent = "Have a Good Time!";
})

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'flex';
})

sideMenuCloseBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

callToActionBtn.addEventListener('click', () => {
    col2.style.display = 'flex';
})