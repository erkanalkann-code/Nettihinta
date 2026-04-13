document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")
const data = window.deals || []

function render(list){
container.innerHTML = ""

list.forEach(deal=>{
container.innerHTML += `
<a href="${deal.link}" target="_blank" class="card">

<div style="position:relative">
<div class="discount">-${deal.discount}%</div>
<img src="${deal.image}">
</div>

<div class="info">
<div>${deal.title}</div>

<div class="price">
${deal.newPrice}€
<span class="old">${deal.oldPrice}€</span>
</div>

<div class="store">${deal.store}</div>
</div>

<div class="btn">Siirry kauppaan</div>

</a>
`
})

}

window.showAll = () => render(data)

window.showBig = () =>
render([...data].sort((a,b)=>b.discount-a.discount))

window.showNew = () =>
render([...data].reverse())

function setActive(el){
document
.querySelectorAll('.filters button')
.forEach(b=>b.classList.remove('active'))

el.classList.add('active')
}

window.setActive = setActive

render(data)

})
