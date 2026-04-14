function setActive(btn){
document.querySelectorAll(".filters button")
.forEach(b=>b.classList.remove("active"))
btn.classList.add("active")
}

function showAll(){
setActive(event.target)
render(deals)
}

function showNew(){
setActive(event.target)
render([...deals].reverse())
}

function showBig(){
setActive(event.target)
render([...deals].sort((a,b)=>b.discount-a.discount))
}

function showExtra(){
setActive(event.target)
render(
[...deals].filter(d=>d.discount>=30)
)
}

function showCheap(){
setActive(event.target)
render([...deals].sort((a,b)=>a.price-b.price))
}

function render(list){
const el=document.getElementById("deals")
el.innerHTML=""

list.forEach(d=>{
el.innerHTML+=`
<a class="card" href="${d.link}" target="_blank">

<div class="discount">-${d.discount}%</div>

<img src="${d.image}">

<div class="info">
<div class="title">${d.title}</div>

<div class="price">
${d.price}€
<span class="old">${d.old}€</span>
</div>

<div class="store">${d.store}</div>

<div class="btn">Siirry kauppaan</div>
</div>

</a>
`
})
}

render(deals)
