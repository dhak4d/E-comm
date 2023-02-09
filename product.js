
console.log('product.js')

const products = [
    {
        id:1,
        title:"Red dress",
        desc:"Red solid fit & flare dress V-neck Three-quarter, puff sleeve Above knee length in flared hem Georgette fabric  Zip closure",
        image:"product-images/red-dress.jpg",
        price:999,
        quantity:1
    },

    {
        id:2,
        title:"T-shirt",
        desc:"White Tshirt for women Other solid Regular length Round neck Short, regular sleeves Knitted cotton fabric with solid material",
        image:"product-images/T-shirt.jpg",
        price:499,
        quantity:1
    },

    {
        id:3,
        title:"Black Pant",
        desc:"Black woven formal Regular fit Mid-rise Length: regular Pattern: solid Flat-front, with no pleats design Feature: plain 2 pocket",
        image:"product-images/black-pant.jpg",
        price:799,
        quantity:1
    },
    
    {
        id:4,
        title:"Pink Dress",
        desc:"floral solid fit & flare dress Round neck Three-quarter, regular sleeves length in flared fabric Button closure",
        image:"product-images/pink dress.jpg",
        price:1099,
        quantity:1
    },

    {
        id:5,
        title:"Blue Jeans",
        desc:"Blue jeans formal Regular fit Mid-rise Length: regular Pattern: solid Flat-front, with no pleats design Feature: plain 2 pocket",
        image:"product-images/bluee jeans.jpg",
        price:999,
        quantity:1
    }

]

const section = document.createElement('section');
section.id = 'product-page';

let h1 = document.createElement('h1')
h1.classList.add('heading')
h1.innerHTML = "All Products"
section.appendChild(h1);

const divProductItems = document.createElement("div");
divProductItems.setAttribute("class", "product-items");
section.appendChild(divProductItems);

for(i=0; i<products.length; i++)
{
const {id, title, image, desc}=products[i]

const divItem = document.createElement("div");
divItem.setAttribute("class", "item");


const divImgAlign = document.createElement("div");
divImgAlign.setAttribute("class", "img-align");
divItem.appendChild(divImgAlign);

const img = document.createElement("img");
img.setAttribute("src", image);
img.setAttribute("class", "product-img");
divImgAlign.appendChild(img);

const divH3 = document.createElement("div");
divItem.appendChild(divH3);

const h3 = document.createElement("h3");
h3.style.textAlign = "center";
h3.innerHTML = title;
divH3.appendChild(h3);

const divProductP = document.createElement("div");
divProductP.setAttribute("class", "product-p");
divItem.appendChild(divProductP);

const p = document.createElement("p");
p.style.color = "rgb(53, 50, 50)";
p.innerHTML = desc;
divProductP.appendChild(p);

const divBtn = document.createElement("div");
divBtn.style.textAlign = "center";
divItem.appendChild(divBtn);

const buttonCart = document.createElement("button");
buttonCart.setAttribute("type", "button");
buttonCart.setAttribute("class", "product-btn");
divBtn.appendChild(buttonCart);

const aAddtoCart = document.createElement("a");
aAddtoCart .setAttribute("href", "cart.html");
aAddtoCart .innerHTML = "Add To Bucket";
buttonCart.appendChild(aAddtoCart);

divProductItems.appendChild(divItem);
}

document.getElementById('products_page').appendChild(section)

















