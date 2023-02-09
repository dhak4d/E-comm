console.log('Headers.js')

// ...........header section.............................
let header1 = document.createElement('div')
header1.classList.add('header1')

let logo = document.createElement('div')
logo.classList.add('logo')
logo.innerHTML= 'Ecommerce'

let search = document.createElement('div')
search.classList.add('search-container')

let input = document.createElement('input')
input.type = 'search';
input.name = 'search';
input.id = 'search';
input.placeholder = 'Product name, Category name. etc';

let button = document.createElement('button')
button.classList.add('header_btn')
button.innerHTML = 'Search'

search.appendChild(input);
search.appendChild(button)

let login = document.createElement('div')
login.classList.add('login')

let a1= document.createElement('a')
a1.href="login.html"
a1.classList.add('header_btn')
a1.innerHTML = 'login'
login.appendChild(a1)
 
let a2 = document.createElement('a')
a2.href="cart.html"
a2.classList.add('header_btn')
a2.innerHTML = 'Bucket'
login.appendChild(a2)

header1.appendChild(logo)
header1.appendChild(search)
header1.appendChild(login)

document.getElementById('header').appendChild(header1)

// ...........navbar section..........................
let navbar = document.createElement('div')
navbar.classList.add('navbar')

let home = document.createElement('a')
home.href="#home"
home.innerHTML = 'Home'
navbar.appendChild(home)

let all_product = document.createElement('a')
all_product.href="#products_page"
all_product.innerHTML = 'All Products'
navbar.appendChild(all_product)


// ..........................................................
let dropDown = document.createElement('div')
dropDown.classList.add('dropdown')
navbar.appendChild(dropDown)

let dropBtn = document.createElement('div')
dropBtn.classList.add('dropbtn')
dropBtn.innerHTML = 'Women'
dropDown.appendChild(dropBtn)

let dropDownContent = document.createElement('div')
dropDownContent.classList.add('dropdown-content')
dropDown.appendChild(dropDownContent)

let aAllPrdct= document.createElement('a')

aAllPrdct.innerHTML = 'All Products'
dropDownContent.appendChild(aAllPrdct)
 
let dresses = document.createElement('a')
dresses.innerHTML = 'Dresses'
dropDownContent.appendChild(dresses)

let pants = document.createElement('a')
pants.innerHTML = 'Pants'
dropDownContent.appendChild(pants)

let skirts = document.createElement('a')
skirts.innerHTML = 'Skirts'
dropDownContent.appendChild(skirts)
// ..........................................................



let dropDown2 = document.createElement('div')
dropDown2.classList.add('dropdown')
navbar.appendChild(dropDown2)

let dropBtn2 = document.createElement('div')
dropBtn2.classList.add('dropbtn')
dropBtn2.innerHTML = 'Men'
dropDown2.appendChild(dropBtn2)

let dropDownContent2 = document.createElement('div')
dropDownContent2.classList.add('dropdown-content')
dropDown2.appendChild(dropDownContent2)

let aAllPrdct1= document.createElement('a')
aAllPrdct1.innerHTML = 'All Products'
dropDownContent2.appendChild(aAllPrdct1)
 
let shirts = document.createElement('a')
shirts.innerHTML = 'Shirts'
dropDownContent2.appendChild(shirts)

let pants1 = document.createElement('a')
pants1.innerHTML = 'Pants'
dropDownContent2.appendChild(pants1)

let hoodies = document.createElement('a')
hoodies.innerHTML = 'Hoodies'
dropDownContent2.appendChild(hoodies)
// ..........................................................


let kid = document.createElement('a')
kid.innerHTML = 'Kids'
navbar.appendChild(kid)

let contact = document.createElement('a')
contact.href="#contact"
contact.innerHTML = 'Contact'
navbar.appendChild(contact)

document.getElementById('header').appendChild(navbar)
