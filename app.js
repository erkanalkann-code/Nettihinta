document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("deals")

function render(data){
container.innerHTML = ""

data.forEach(deal=>{
container.innerHTML += `
<div class="card">
<div class="discount" style="background:${getColor(deal.discount)}">
-${deal.discount}%
</div>

<img src="${deal.image}">

<div class="info">
<div>${deal.title}</div>

<div class="price">
${deal.newPrice}€
<span class="old">${deal.oldPrice}€</span>
</div>

<div class="store">
${deal.logo ? `<img class="logo" src="${deal.logo}">` : ""}
${deal.store}
</div>

<a href="${deal.link}" target="_blank">
<div class="btn">Siirry kauppaan</div>
</a>

</div>
</div>
`
})
}

render(window.deals)

window.showAll = function(){
render(window.deals)
}

window.showBig = function(){
render([...window.deals].sort((a,b)=>b.discount-a.discount))
}

window.showNew = function(){
render([...window.deals].reverse())
}

function getColor(percent){
if(percent >= 50) return "#ff0000"
if(percent >= 30) return "#ff3b30"
if(percent >= 20) return "#ff6b00"
return "#999"
}

})
