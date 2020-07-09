const balance = document.getElementById('balance')
const income = document.getElementById('income')
const expense = document.getElementById('expense')
const ul = document.getElementById('ul')
const addDesc = document.getElementById('addDesc')
const addMoney = document.getElementById('addMoney')
const addTransactionBtn = document.getElementById('addTransactionBtn')
let delBtns = document.getElementsByClassName('delete-button')
let totalIncome = 0
let totalExpense = 0
let totalBalance = totalIncome - totalExpense

function setInnerHtml() {
    balance.innerHTML = totalBalance
    income.innerHTML = totalIncome
    expense.innerHTML = totalExpense
}

addTransactionBtn.addEventListener('click', () => {
    if(addDesc.value === '') {
        alert('请输入交易说明')
    }else if(addMoney.value === '') {
        alert('请输入交易金额')
    }else {
        let li = document.createElement('li')
        if(addMoney.value >= 0) {
            li.className = 'plus'
            li.innerHTML = `${addDesc.value}<span>+${addMoney.value}</span><button class="delete-button" onclick="remove(event)">X</button>`
            totalIncome += Number(addMoney.value)
            totalBalance = totalIncome + totalExpense
            // income.innerHTML = totalIncome
            // balance.innerHTML = totalBalance
            setInnerHtml()
        } else {
            li.className = 'less'
            li.innerHTML = `${addDesc.value}<span>${addMoney.value}</span><button class="delete-button" onclick="remove(event)">X</button>`
            totalExpense += Number(addMoney.value)
            totalBalance = totalIncome + totalExpense
            // expense.innerHTML = totalExpense
            // balance.innerHTML = totalBalance
            setInnerHtml()
        }
        ul.appendChild(li)
        addMoney.value = ''
        addDesc.value = ''
    }
})

function remove(event) {
    let e = event || window.event
    let target = e.target || e.srcElement
    let li = target.parentNode
    let span = li.querySelector('span')
    if(li.className === 'plus') {
        totalIncome -= Number(span.innerHTML)
    } else {
        totalExpense -= Number(span.innerHTML)
    }
    totalBalance = totalIncome + totalExpense
    setInnerHtml()
    let ul = li.parentNode
    ul.removeChild(li)
}
setInnerHtml()