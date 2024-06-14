const navItems = document.querySelectorAll(".nav-item a");
navItems.forEach(item => {
    console.log(item);
    item.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})



document.addEventListener('DOMContentLoaded', () => {
    const wordsWrapper = document.querySelector('.cd-words-wrapper');
    const words = Array.from(wordsWrapper.querySelectorAll('.cd-word')).map(word => word.textContent);
    let wordIndex = 0;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeAndDelete() {
        while (true) {
            const fullText = words[wordIndex];

            // Typing
            for (let charIndex = 0; charIndex <= fullText.length; charIndex++) {
                const currentWord = fullText.slice(0, charIndex);
                wordsWrapper.innerHTML = `<span class="cd-word active text-wrap">a${currentWord}|</span>`;
                await sleep(50);
            }

            // Delay before deleting
            await sleep(2000);

            // Deleting
            for (let charIndex = fullText.length; charIndex >= 0; charIndex--) {
                const currentWord = fullText.slice(0, charIndex);
                wordsWrapper.innerHTML = `<span class="cd-word active text-wrap">a${currentWord}|</span>`;
                await sleep(50);
            }

            // Move to the next word
            wordIndex = (wordIndex + 1) % words.length;

            // Delay before typing the next word
            await sleep(50);
        }
    }

    typeAndDelete();
});


const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const navItemsOverlay = document.querySelectorAll('#overlay a');

const showOverlay = () => {
    overlay.classList.add('show');
};

const hideOverlay = () => {
    overlay.classList.remove('show');
};

// Show overlay when menu button is clicked or hovered
menuBtn.addEventListener('click', showOverlay);

// Hide overlay when close button is clicked
closeBtn.addEventListener('click', hideOverlay);

// Hide overlay when any nav item is clicked
navItemsOverlay.forEach(item => {
    item.addEventListener('click', hideOverlay);
});