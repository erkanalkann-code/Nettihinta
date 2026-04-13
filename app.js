document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")
const data = window.deals || []

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

window.showBig = () =>
render([...data].sort((a,b)=>b.discount-a.discount))

window.showNew = () =>
render([...data].reverse())

window.showExtra = () =>
render([...data]
.sort((a,b)=>b.discount-a.discount)
.slice(0,4))

render(data)

})
