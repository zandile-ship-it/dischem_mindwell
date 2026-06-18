let total = 0;

function addToCart(product, price){

const cartItems = document.getElementById("cart-items");

const li = document.createElement("li");

li.textContent = `${product} - R${price}`;

cartItems.appendChild(li);

total += price;

document.getElementById("total").textContent = total;
}
document
.getElementById("searchInput")
.addEventListener("keyup", function(){

let searchValue =
this.value.toLowerCase();

let products =
document.querySelectorAll(".card");

products.forEach(product => {

let text =
product.innerText.toLowerCase();

product.style.display =
text.includes(searchValue)
? "block"
: "none";

});
});
function removeItem(button){

button.parentElement.parentElement.remove();

calculateTotal();

}

let cart = [];
let total = 0;

function addToCart(product, price){

    cart.push({
        name: product,
        price: price
    });

    total += price;

    document.getElementById("cartCount").innerHTML = cart.length;

    document.getElementById("cartTotal").innerHTML =
        "R" + total;

    alert(product + " added to cart!");
}

function shopWellness(){

    document
    .getElementById("products")
    .scrollIntoView({
        behavior: "smooth"
    });

}

function bookSession(){

    document
    .getElementById("booking")
    .scrollIntoView({
        behavior: "smooth"
    });

}

document
.getElementById("bookingForm")
.addEventListener("submit", function(event){

event.preventDefault();

alert(
"Thank you! Your counselling session has been booked."
);

});

function viewCart(){

    document
    .getElementById("cart")
    .scrollIntoView({
        behavior:"smooth"
    });

}

function calculateTotal(){

    total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById("cartTotal").innerHTML = "R" + total;
}


