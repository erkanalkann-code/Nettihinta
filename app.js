const container = document.getElementById("deals")
{
title:"AirPods Pro",
store:"Gigantti",
oldPrice:299,
newPrice:199,
discount:33,
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505",
link:"#"
},
{
title:"iPhone 15",
store:"Verkkokauppa",
oldPrice:999,
newPrice:799,
discount:20,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
link:"#"
}
]

const container = document.getElementById("deals")

deals
.sort((a,b)=> b.discount-a.discount)
.forEach(deal=>{

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
