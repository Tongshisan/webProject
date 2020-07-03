const movie = document.getElementById('movie')
const seat = document.getElementById('seat')
let selectedCount = 0
let totalPrice = 0
const seatCountNode = document.getElementById('seatCount')
const totalPriceNode = document.getElementById('totalPrice')

seatCountNode.innerHTML = selectedCount
totalPriceNode.innerHTML = totalPrice
seat.addEventListener('click', function (event) {
    let e = event || window.event
    let target = e.target || e.srcElement
    if (target.className === 'seat') {
        target.className = 'seat selected'
        selectedCount++
    } else if (target.className === 'seat selected') {
        target.className = 'seat'
        selectedCount--
    }
    totalPrice = selectedCount * movie.value
    seatCountNode.innerHTML = selectedCount
    totalPriceNode.innerHTML = totalPrice
})

function movieChange() {
    totalPrice = selectedCount * movie.value
    seatCountNode.innerHTML = selectedCount
    totalPriceNode.innerHTML = totalPrice
}
