const currencyOne = document.getElementById('currencyOne')
const currencyTwo = document.getElementById('currencyTwo')
const currencyCount = document.getElementById('currencyCount')
const currencyPrice = document.getElementById('currencyPrice')
const currencyOneSpan = document.getElementById('currencyOneSpan')
const currencyTwoSpan = document.getElementById('currencyTwoSpan')
const rate = document.getElementById('rate')
const swap = document.getElementById('swap')
// 基于货币1 的所有货币转换率
let rates = {}
rate.innerHTML = 1
currencyOneSpan.innerHTML = currencyOne.value
currencyTwoSpan.innerHTML = currencyTwo.value
currencyPrice.value = currencyCount.value * rate.innerHTML



currencyCount.addEventListener('change', () => {
    currencyPrice.value = currencyCount.value * rate.innerHTML
})

// 货币1 变换
currencyOne.addEventListener('change', currencyOneChange())

// 货币1交换函数
function currencyOneChange() {
    let url = `https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`
    getRate(url).then(response => {
        rates = response.rates
        currencyOneSpan.innerHTML = currencyOne.value
        currencyTwoSpan.innerHTML = currencyTwo.value
        rate.innerHTML = rates[currencyTwo.value]
        currencyPrice.value = currencyCount.value * rate.innerHTML

    }).catch(error => {
        console.error(error)
    })
}
// 货币2 变换
currencyTwo.addEventListener('change', () => {
    currencyTwoSpan.innerHTML = currencyTwo.value
    rate.innerHTML = rates[currencyTwo.value]
    currencyPrice.value = currencyCount.value * rate.innerHTML
})

// 获取基于货币1的所有货币转换率
function getRate(url) {
    return new Promise((resolve, reject) => {
        const handle = function () {
            if (this.readyState !== 4) return
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        const xhr = new XMLHttpRequest();
        xhr.open('get', url)
        xhr.onreadystatechange = handle
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send()
    })
}

// 交换货币1 和 货币 2
swap.addEventListener('click', () => {
    [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value]
    currencyOneChange()
})

function active() {
    let url = `https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`
    getRate(url).then(response => {
        rates = response.rates
    }).catch(error => {
        console.error(error)
    })
}
active()