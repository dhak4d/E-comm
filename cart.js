
console.log('cart.js')
function show_ui() {
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

const item2 = document.createElement('div')
item2.classList.add('item-2')
item2.id='items'
div.appendChild(item2)


const nextGrid = document.createElement('div')
nextGrid.classList.add('next-grid')
section.appendChild(nextGrid )


const head = document.createElement('div')
head.classList.add('head')
nextGrid.appendChild(head )

const h3n = document.createElement('h3')
h3n.innerHTML='Summary'
h3n.style.color = 'black'
head.appendChild(h3n)

const gridCol = document.createElement('div')
gridCol.classList.add('grid-col-1')
gridCol.innerHTML='Cost'
nextGrid.appendChild(gridCol)


const col2 = document.createElement('div')
col2.classList.add('grid-col-2')
col2.innerHTML='Shipping'
gridCol.appendChild(col2)

const col5 = document.createElement('div')
col5.classList.add('grid-col-5')
col5.innerHTML='$15'
col5.id='cost'
nextGrid.appendChild(col5)

const col2$ = document.createElement('div')
col2$.classList.add('grid-col-2')
col2$.innerText='$5'
col5.appendChild(col2$)


const col3 = document.createElement('div')
col3.classList.add('grid-col-3')

const hr = document.createElement('hr');
col3.appendChild(hr);

col3.innerHTML='Total'
col3.style.fontWeight = 'bold'
nextGrid.appendChild(col3)

const col5$ = document.createElement('div')
col5$.classList.add('grid-col-5')
col5$.innerHTML='$20'
col5$.id='total'
nextGrid.appendChild(col5$)

const nextGridBtn = document.createElement('div')
nextGridBtn.classList.add('next-grid-btn')
nextGrid.appendChild(nextGridBtn)

const checkout= document.createElement('button')
checkout.innerHTML='Checkout'
nextGridBtn.appendChild(checkout)

document.getElementById('carts').appendChild(section)
}

function add_item(product, items_id) {
	const { id, title, price, image, qnt } = product;
	const items = document.createElement('div');
	items.className = 'items';

	const itemsimages = document.createElement('div');
	itemsimages.className = 'items-images';
	items.appendChild(itemsimages);

	const img = document.createElement('img');
	itemsimages.appendChild(img);
	img.src = image;

	const itemsdetails = document.createElement('div');
	itemsdetails.className = 'item-detail';
	items.appendChild(itemsdetails);

	const itemsdetailsTitle = document.createElement('div');
	itemsdetailsTitle.innerText = title;
	itemsdetails.appendChild(itemsdetailsTitle);

	const itemsdetailsPrice = document.createElement('div');
	itemsdetailsPrice.innerText = `$${price}`;
	itemsdetails.appendChild(itemsdetailsPrice);

	const itemsdetailsDelete = document.createElement('div');
	itemsdetails.appendChild(itemsdetailsDelete);

	const itemsdetailsDeleteButton = document.createElement('button');
	itemsdetailsDeleteButton.textContent = 'Delete';
	itemsdetailsDeleteButton.setAttribute('onclick', `deleteProduct(${id})`);
	itemsdetailsDelete.appendChild(itemsdetailsDeleteButton);

	const itemQty = document.createElement('div');
	itemQty.className = 'item-qty';

	const itemQtyMinusButton = document.createElement('button');
	itemQtyMinusButton.innerText = '-';
	itemQtyMinusButton.setAttribute('onclick', `decreaseProduct(${id})`);
	itemQty.appendChild(itemQtyMinusButton);

	const itemQtyInput = document.createElement('input');
	itemQtyInput.type = 'text';
	itemQtyInput.value = qnt;
	itemQtyInput.id = id;
	itemQtyInput.disabled = true;
	itemQty.appendChild(itemQtyInput);

	const itemQtyPlusButton = document.createElement('button');
	itemQtyPlusButton.innerText = '+';
	itemQtyPlusButton.setAttribute('onclick', `increaseProduct(${id})`);
	itemQty.appendChild(itemQtyPlusButton);
	items.appendChild(itemQty);

	document.getElementById(items_id).appendChild(items);
}

show_ui();
onload_data();
function onload_data() {
	document.getElementById('items').innerHTML = '';
	let get_product = localStorage.getItem('products');
	get_product = JSON.parse(get_product);

	let price = 0;
	// console.log(get_product);
	for (let i in get_product) {
		price = price + parseFloat(get_product[i]['price']) * Number(get_product[i]['qnt']);
		add_item(get_product[i], 'items');
	}
	document.getElementById('cost').innerHTML = `$${price}`;
	document.getElementById('total').innerHTML = `$${price + 5}`;
}

function deleteProduct(id) {
	console.log(id);
	let get_product = localStorage.getItem('products');
	get_product = JSON.parse(get_product);

	delete get_product[id];
	console.log(get_product);
	localStorage.setItem('products', JSON.stringify(get_product));
	onload_data();
}

function increaseProduct(id) {
	let get_product = localStorage.getItem('products');
	get_product = JSON.parse(get_product);
	let inc = Number(document.getElementById(id).value);
	inc++;
	get_product[id]['qnt'] = inc;
	localStorage.setItem('products', JSON.stringify(get_product));
	onload_data();
}

function decreaseProduct(id) {
	let get_product = localStorage.getItem('products');
	get_product = JSON.parse(get_product);
	let inc = Number(document.getElementById(id).value);
	if (inc <= 1) {
		alert('Stoped');
		return;
	}
	inc--;
	get_product[id]['qnt'] = inc;
	localStorage.setItem('products', JSON.stringify(get_product));
	onload_data();
}
