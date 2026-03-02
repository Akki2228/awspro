// 1. Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Counter Logic
let count = 0;
const countDisplay = document.getElementById('count');

function increaseCount() {
    count++;
    countDisplay.innerText = count;
    
    // Add a little animation effect
    countDisplay.style.transform = "scale(1.2)";
    setTimeout(() => {
        countDisplay.style.transform = "scale(1)";
    }, 200);
}

function resetCount() {
    count = 0;
    countDisplay.innerText = count;
}

// 3. Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = "1rem 10%";
        nav.style.background = "rgba(15, 23, 42, 0.9)";
    } else {
        nav.style.padding = "1.5rem 10%";
        nav.style.background = "rgba(15, 23, 42, 0.7)";
    }
});

// 4. Console message to confirm JS is working
console.log("Aura website loaded successfully!");