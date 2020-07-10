const test = document.getElementsByClassName('card')
const btn = document.getElementById('addCardBtn')
const cardIndexSpan = document.getElementById('cardIndexSpan')
const cardCountSpan = document.getElementById('cardCountSpan')
const next = document.getElementById('next')
const pre = document.getElementById('pre')
let index = 1
let cardCount = 2
next.addEventListener('click', function () {
    if (index < cardCount) {
        index++
        test[index - 2].className = 'card left'
        test[index-1].className = 'card active'
        updatePages()
    }
})
pre.addEventListener('click', function () {
    if (index > 1) {
        index--
        test[index-1].className = 'card active'
        test[index].className = 'card right'
        updatePages()
    }
})

function updatePages() {
    cardIndexSpan.innerHTML = index
    cardCountSpan.innerHTML = cardCount
}

updatePages()