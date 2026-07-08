const products = [

{
id:1,
name:"Fresh Apples",
price:120,
description:"Fresh organic apples.",
image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500"
},

{
id:2,
name:"Milk",
price:60,
description:"Fresh dairy milk.",
image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500"
},

{
id:3,
name:"Rice Bag",
price:850,
description:"25kg Premium Rice.",
image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
},

{
id:4,
name:"Cooking Oil",
price:180,
description:"1L Sunflower Oil.",
image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
},


{
id:6,
name:"Bread",
price:45,
description:"Soft Bakery Bread.",
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"
}

];

let cart=[];

const productList=document.getElementById("product-list");
const cartItems=document.getElementById("cart-items");
const total=document.getElementById("total");
const cartCount=document.getElementById("cart-count");

function displayProducts(){

productList.innerHTML="";

products.forEach(product=>{

productList.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">₹${product.price}</div>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`;

});

}

function addToCart(id){

const product=products.find(item=>item.id===id);

cart.push(product);

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

let sum=0;

cart.forEach((item,index)=>{

sum+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<h4>${item.name}</h4>

₹${item.price}

</div>

<button class="remove"
onclick="removeItem(${index})">
Remove
</button>

</div>

`;

});

total.innerText=sum;

cartCount.innerText=cart.length;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

displayProducts();