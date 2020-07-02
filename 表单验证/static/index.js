const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPsw = document.getElementById('checkPsw')
const btn = document.querySelector('button')

btn.addEventListener('click', function (event) {
    checkUsername()
    checkEmail()
    checkPassword()
    checkCheckPsw()
})

function showError(input, message) {
    const node = input.parentElement
    node.className = 'form-item error'
    const span = node.querySelector('span')
    span.innerText = message
}
function showSuccess(input) {
    const node = input.parentElement
    node.className = 'form-item success'
}
function checkUsername() {
    // 用户名太短
    if (username.value.length < username.getAttribute('minlength')) {
        showError(username, '用户名不得少于 6 位数')
    } else {
        showSuccess(username)
    }
}

function checkEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, '请输入正确的邮箱地址');
    }
}

function checkPassword() {
    if (password.value.length < password.getAttribute('minlength')) {
        showError(password, '密码不得少于 8 位数')
    } else {
        showSuccess(password)
    }
}

function checkCheckPsw() {
    if(checkPsw.value.length < checkPsw.getAttribute('minlength')) {
        showError(checkPsw, '密码不得少于 8 位数')
    } else if(checkPsw.value !== password.value) {
        showError(checkPsw, '两次密码输入不一致')
    } else {
        showSuccess(checkPsw)
    }
}