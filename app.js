document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")
const filters = document.getElementById("filters")
const data = window.deals || []

filters.innerHTML = `
<button onclick="showAll()" class="active">🔥 Kaikki</button>
<button onclick="showNew()">⚡ Uusimmat</button>
<button onclick="showBig()">📉 Suurimmat</button>
<button onclick="showExtra()">🔥 Lisäalennus</button>
<button onclick="showCheap()">💰 Halvimmat</button>
`

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

window.showAll = () => render(data)

window.showNew = () =>
render([...data].reverse())

window.showBig = () =>
render([...data].sort((a,b)=>b.discount-a.discount))

window.showExtra = () =>
render([...data]
.sort((a,b)=>b.discount-a.discount)
.slice(0,4))

window.showCheap = () =>
render([...data]
.sort((a,b)=>a.newPrice-b.newPrice))

render(data)

})
