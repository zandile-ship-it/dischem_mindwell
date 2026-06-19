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

function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = 0;

  cart.forEach(item => {
    count += item.quantity || 1; // count quantities, not just items
  });

  document.getElementById("cartCount").innerText = count;
}

// Run on page load
updateCartBadge();

// Optional: re-run after adding to cart
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  alert(`${productName} added to cart!`);
}

// Update cart badge count
function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = 0;

  cart.forEach(item => {
    count += item.quantity || 1;
  });

  const badge = document.getElementById("cartCount");
  if (badge) badge.innerText = count;
}

// Run on page load
document.addEventListener("DOMContentLoaded", updateCartBadge);

// Add to cart function (shared)
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  alert(`${productName} added to cart!`);
}

// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart function
function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Example button usage
// <button onclick="addToCart('Wellness Supplement', 199.99)">Add to Cart</button>

// Initialize EmailJS with your public key
    (function(){
      emailjs.init("YOUR_PUBLIC_KEY"); // replace with your EmailJS public key
    })();

    document.getElementById("sessionForm").addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function() {
          document.getElementById("response").innerText = "✅ Your booking request has been sent!";
          document.getElementById("sessionForm").reset();
        }, function(error) {
          document.getElementById("response").innerText = "❌ Failed to send. Please try again.";
          console.error("EmailJS Error:", error);
        });
    });