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

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.about-content,.contact form")
.forEach(el=>observer.observe(el));