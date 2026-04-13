document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")

const data = window.deals || []

function render(list){
container.innerHTML = ""

list.forEach(deal=>{
container.innerHTML += `
<a href="${deal.link}" target="_blank" class="card">
<div class="discount">-${deal.discount}%</div>
<img src="${deal.image}">
<div class="info">

<div>${deal.title}</div>

<div class="price">
${deal.newPrice}€
<span class="old">${deal.oldPrice}€</span>
</div>

<div class="store">${deal.store}</div>

<a href="${deal.link}" target="_blank">
<div class="btn">Siirry kauppaan</div>
</a>

</div>
</div>
`
})
}

render(data)

window.showAll = () => render(data)

window.showBig = () =>
render([...data].sort((a,b)=>b.discount-a.discount))

window.showNew = () =>
render([...data].reverse())

})
window.showStore = function(store){
render(window.deals.filter(d => d.store === store))
}
function setActive(el){
document
.querySelectorAll('.filters button')
.forEach(b=>b.classList.remove('active'))

el.classList.add('active')
}
