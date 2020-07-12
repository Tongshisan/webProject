const nextYear = document.getElementById('nextYear')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

nextYear.innerHTML = new Date().getFullYear() + 1

function getCountdown() {
    let start = new Date()
    let end = new Date(`January 01 ${start.getFullYear() + 1} 00:00:00`)
    // 秒
    let timeLen = Math.floor((+end - +start) / 1000)
    seconds.innerHTML = timeLen % 60 < 10 ? `0${timeLen % 60}` : timeLen % 60
    minutes.innerHTML = Math.floor(timeLen / 60) % 60 < 10 ? `0${Math.floor(timeLen / 60) % 60}` : Math.floor(timeLen / 60) % 60
    hours.innerHTML = Math.floor((timeLen / 60 / 60)) % 24 < 10 ? `0${Math.floor((timeLen / 60 / 60)) % 24}` : Math.floor((timeLen / 60 / 60)) % 24
    days.innerHTML = Math.floor(timeLen / 60 / 60 / 24) < 10 ? `0${Math.floor(timeLen / 60 / 60 / 24)}` : Math.floor(timeLen / 60 / 60 / 24)
    setTimeout(getCountdown, 1000)
}
getCountdown()

setTimeout(getCountdown, 1000)