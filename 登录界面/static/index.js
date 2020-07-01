const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPsw = document.getElementById('checkPsw')
const btn = document.querySelector('button')

btn.addEventListener('click', function (event) {
    checkUsername()
})

function showErr(input, message) {
    const node = input.parentElement
    
    const span  = node.querySelector('span')
    span.innerText = message
}
function checkUsername() {
    // 用户名太短
    if (username.value.length < username.getAttribute('minlength')) {
        showErr(username, '用户名不得少于6个字')
    } else {

    }
}