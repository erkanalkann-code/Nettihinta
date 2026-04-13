document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")
const filters = document.getElementById("filters")
const data = window.deals || []

filters.innerHTML = `
<button class="active">🔥 Kaikki</button>
<button>⚡ Uusimmat</button>
<button>📉 Suurimmat</button>
<button>🔥 Lisäalennus</button>
<button>💰 Halvimmat</button>
`

const buttons = filters.querySelectorAll("button")

function setActive(index){
buttons.forEach(b => b.classList.remove("active"))
buttons[index].classList.add("active")
}

function render(list){
container.innerHTML = ""

list.forEach(deal => {
container.innerHTML += `
<a href="${deal.link}" target="_blank" class="card">

<div class="discount">-${deal.discount}%</div>

<img src="${deal.image}">

<div class="info">
<div class="title">${deal.title}</div>

<div class="price">
${deal.newPrice}€
<span class="old">${deal.oldPrice}€</span>
</div>

<div class="store">${deal.store}</div>

<div class="btn">Siirry kauppaan</div>
</div>

</a>
`
})
}

buttons[0].onclick = () => {
setActive(0)
render(data)
}

buttons[1].onclick = () => {
setActive(1)
render([...data].reverse())
}

buttons[2].onclick = () => {
setActive(2)
render([...data].sort((a,b)=>b.discount-a.discount))
}

buttons[3].onclick = () => {
setActive(3)
render([...data]
.sort((a,b)=>b.discount-a.discount)
.slice(0,4))
}

buttons[4].onclick = () => {
setActive(4)
render([...data]
.sort((a,b)=>a.newPrice-b.newPrice))
}

render(data)

})
