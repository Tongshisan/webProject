const showNavBtn = document.getElementById('showNavBtn')
const nav = document.querySelector('nav')
const loginBtn = document.getElementById('loginBtn')
const loginPage = document.getElementById('loginPage')
const closeLoginPage = document.getElementById('closeLoginPage')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPsw = document.getElementById('checkPsw')

showNavBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
})

loginBtn.addEventListener('click', () => {
    loginPage.classList.add('show-login-page')
})

closeLoginPage.addEventListener('click', () => {
    loginPage.classList.remove('show-login-page')
})