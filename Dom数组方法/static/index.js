const addUser = document.getElementById('addUser')
const doubleMoney = document.getElementById('doubleMoney')
const sortByMoneyDesc = document.getElementById('sortByMoneyDesc')
const calculationTotalMoney = document.getElementById('calculationTotalMoney')
const superMoney = document.getElementById('superMoney')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const totalMoney = document.getElementById('totalMoney')
const sortByMoneyAsc = document.getElementById('sortByMoneyAsc')
let users = []
let total_money = 0

addUser.addEventListener('click', getRandomUser)
doubleMoney.addEventListener('click', doubleUserMoney)
sortByMoneyDesc.addEventListener('click', sortMoneyDesc)
calculationTotalMoney.addEventListener('click', showTotalMoney)
superMoney.addEventListener('click', filterMoney)
sortByMoneyAsc.addEventListener('click', sortMoneyAsc)


// 排序 升序
function sortMoneyAsc() {
    users.sort((a, b) => a.money - b.money)
    updateDOM()
}
// 筛选百万富翁
function filterMoney() {
    users = users.filter((item) => item.money >= 1000000)
    updateDOM()
}

// 是否显示总金额
function showTotalMoney() {
    if (footer.className === 'footer-hide') {
        footer.className = 'footer-show'
        getTotalMoney()
    } else {
        footer.className = 'footer-hide'
    }
}

// 计算总金额
function getTotalMoney() {
    total_money = 0
    users.map((item) => {
        total_money += item.money
    })
    totalMoney.innerHTML = `￥ ${total_money}`
}
// 按金额排序 (降序)
function sortMoneyDesc() {
    users.sort((a, b) => b.money - a.money)
    updateDOM()
}

// 财富翻倍
function doubleUserMoney() {
    users.map((item) => {
        item.money = item.money * 2
    })
    updateDOM()
}

// 获取随机用户信息
async function getRandomUser() {
    let res = await fetch('https://randomuser.me/api')
    let data = await res.json()
    let user = data.results[0]
    users.push({ name: `${user.name.last} ${user.name.first}`, money: Math.floor(Math.random() * 1000000) })
    if (footer.className === 'footer-show') {
        getTotalMoney()
    }
    updateDOM()
}

function updateDOM() {
    // 清除 main
    main.innerHTML = ''
    let fragment = document.createDocumentFragment()
    users.map((item) => {
        let node = document.createElement('div')
        node.classList.add('person')
        node.innerHTML = `<strong>${item.name}</strong> ￥ ${item.money}`
        fragment.appendChild(node)
    })

    main.appendChild(fragment)
}