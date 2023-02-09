
console.log('cart.js')

const section=document.createElement('section')
section.id='cart'

const div = document.createElement('div')
div.classList.add('cart-item')
section.appendChild(div)

const item1 = document.createElement('div')
item1.classList.add('item-1')
div.appendChild(item1)

const h3 = document.createElement('h3')
h3.innerHTML='Items In Cart'
item1.appendChild(h3)

const hr = document.createElement('hr')
hr.style.color='black'
item1.appendChild(hr)



const item2 = document.createElement('div')
item2.classList.add('item-2')
div.appendChild(item2)

const img = document.createElement("img");
img.setAttribute("src", 'product-images/red-dress.jpg')
img.height= '180px'
img.width = '150px'
item2.appendChild(img);


const item3 = document.createElement('div')
item3.classList.add('item-3')
div.appendChild(item3)

const h4 = document.createElement('h4')
h4.innerHTML='Red Dress'
item3.appendChild(h4)

const price = document.createElement('div')
price.classList.add('item-price')
price.innerHTML = '$15'
item3.appendChild(price)

const dltBtn = document.createElement('div')
dltBtn.classList.add('delete')
item3.appendChild(dltBtn)

const imgBtn = document.createElement("button");
imgBtn.setAttribute("src", 'delete.png')
imgBtn.height= '20px'
imgBtn.width = '20px'


const item4 = document.createElement('div')
item4.classList.add('item-4')
div.appendChild(item4)

const minusBtn = document.createElement('button')
minusBtn.style.fontWeight = 'bold'
minusBtn.innerHTML = '-'
item4.appendChild( minusBtn)

const input = document.createElement('input')
input.setAttribute("type", 'text')
item4.appendChild( input)

const plusBtn = document.createElement('button')
plusBtn.style.fontWeight = 'bold'
plusBtn.innerHTML = '+'
item4.appendChild(plusBtn)


const nextGrid = document.createElement('div')
nextGrid.classList.add('next-grid')
section.appendChild(nextGrid )


const head = document.createElement('div')
head.classList.add('head')
section.appendChild(nextGrid )

const h3 = document.createElement('h3')
h4.innerHTML='Summary'
h4.style.color = 'black'
head.appendChild(h3)













document.getElementById('carts').appendChild(section)