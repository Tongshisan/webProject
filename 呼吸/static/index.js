const text = document.getElementById('text')

updateText()

function updateText() {
    text.innerHTML = '吸'
    setTimeout(() => {
        text.innerHTML = '呼'
    }, 4000)
}

setInterval(updateText, 8000)