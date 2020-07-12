const card = document.getElementsByClassName('card')
const cards = document.getElementById('cards')
const addCardBtn = document.getElementById('addCardBtn')
const addCardDiv = document.getElementById('addCardDiv')
const cardIndexSpan = document.getElementById('cardIndexSpan')
const cardCountSpan = document.getElementById('cardCountSpan')
const next = document.getElementById('next')
const pre = document.getElementById('pre')
const cancelBtn = document.getElementById('cancelBtn')
const confirmBtn = document.getElementById('confirmBtn')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
let index = 1
let cardCount = 2
next.addEventListener('click', function () {
    if (index < cardCount) {
        index++
        card[index - 2].className = 'card left'
        card[index-1].className = 'card active'
        updatePages()
    }
})
pre.addEventListener('click', function () {
    if (index > 1) {
        index--
        card[index-1].className = 'card active'
        card[index].className = 'card right'
        updatePages()
    }
})

function updatePages() {
    cardIndexSpan.innerHTML = index
    cardCountSpan.innerHTML = cardCount
}

updatePages()

addCardBtn.addEventListener('click', () => {
    addCardDiv.classList.add('show-add-card-div')
})

cancelBtn.addEventListener('click', () => {
    addCardDiv.classList.remove('show-add-card-div')
    init()
})

confirmBtn.addEventListener('click', () => {
    if(question.value === '') {
        alert('请输入问题')
    } else if(answer.value === '') {
        alert('请输入答案')
    } else {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `<div class="card-front">${question.value}</div>
                                            <div class="card-back">${answer.value}</div>`
        cards.appendChild(div)
        cardCount++
        updatePages()
        addCardDiv.classList.remove('show-add-card-div')
        init()
    }
})

function init() {
    question.value = ''
    answer.value = ''
}

