const container = document.getElementById("deals")

function render(data){
container.innerHTML = ""

data.forEach(deal=>{
container.innerHTML += `
<div class="card">
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

render(window.deals)

function showAll(){
render(window.deals)
}

function showBig(){
render([...window.deals].sort((a,b)=>b.discount-a.discount))
}

function showNew(){
render([...window.deals].reverse())
}
