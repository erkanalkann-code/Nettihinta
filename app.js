document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")
const filters = document.getElementById("filters")
const data = window.deals || []

filters.innerHTML = `
<button onclick="showAll(this)" class="active">🔥 Kaikki</button>
<button onclick="showNew(this)">⚡ Uusimmat</button>
<button onclick="showBig(this)">📉 Suurimmat</button>
<button onclick="showExtra(this)">🔥 Lisäalennus</button>
<button onclick="showCheap(this)">💰 Halvimmat</button>
`

function setActive(btn){
document.querySelectorAll(".filters button")
.forEach(b => b.classList.remove("active"))

btn.classList.add("active")
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

window.showAll = (btn) => {
setActive(btn)
render(data)
}

window.showNew = (btn) => {
setActive(btn)
render([...data].reverse())
}

window.showBig = (btn) => {
setActive(btn)
render([...data].sort((a,b)=>b.discount-a.discount))
}

window.showExtra = (btn) => {
setActive(btn)
render([...data]
.sort((a,b)=>b.discount-a.discount)
.slice(0,4))
}

window.showCheap = (btn) => {
setActive(btn)
render([...data]
.sort((a,b)=>a.newPrice-b.newPrice))
}

render(data)

})
