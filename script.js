// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Form
document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    this.reset();

});

// Menu Redirection 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .about-content, .contact form")
    .forEach(el => observer.observe(el));

// Cart 
let cart = [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    updateCart();

}

function updateCart(){

    const cartItems =
        document.getElementById("cart-items");

    const total =
        document.getElementById("total");

    const count =
        document.getElementById("cart-count");

    cartItems.innerHTML="";

    let totalPrice=0;

    cart.forEach(item=>{

        totalPrice += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₱${item.price.toFixed(2)}</span>
            </div>
        `;

    });

    total.innerText =
        totalPrice.toFixed(2);

    count.innerText = cart.length;

}

function checkout(){

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    alert("Thank you for ordering from Bite Co!");

    cart=[];

    updateCart();

}