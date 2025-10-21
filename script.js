// ============================================
// 📝 EDIT YOUR QUOTES HERE - Easy to change!
// ============================================
const quotes = {
  1: "Today we celebrate the amazing soul that lights up every room she enters.",
  2: "The world is infinitely more beautiful with you in it.",
  3: "Your laughter is the melody that makes life worth dancing to.",
  4: "Every moment with you is a treasure we hold forever.",
  5: "You have a special way of making your opinions crystal clear – one finger at a time! 😂",
  6: "Absolutely stunning, inside and out – you're turning heads and warming hearts.",
  7: "You inspire us to be better, to love deeper, to live fuller.",
  8: "That look says it all – always ten steps ahead and twice as clever!",
  9: "Your presence is a gift that keeps on giving, today and always.",
  10: "Here's to you, Diva – may your year ahead be as wonderful as you are! 🎉✨"
};

// ============================================
// Load quotes into the page
// ============================================
function loadQuotes() {
    for (let i = 1; i <= 10; i++) {
        const quoteElement = document.getElementById(`quote-${i}`);
        if (quoteElement && quotes[i]) {
            quoteElement.textContent = quotes[i];
        }
    }
}

// ============================================
// Fancy Scroll Effect - Slide transitions
// ============================================
let currentSlide = 1;
const totalSlides = 10;

function updateSlides() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const currentSlideIndex = Math.round(scrollPosition / windowHeight) + 1;
    
    if (currentSlideIndex !== currentSlide && currentSlideIndex >= 1 && currentSlideIndex <= totalSlides) {
        currentSlide = currentSlideIndex;
    }
    
    document.querySelectorAll('.slide').forEach((slide, index) => {
        const slideNumber = index + 1;
        const slideTop = slide.offsetTop;
        const slideBottom = slideTop + windowHeight;
        const viewportCenter = scrollPosition + (windowHeight / 2);
        
        // Remove all classes first
        slide.classList.remove('active', 'passed');
        
        // Active slide (currently in view)
        if (viewportCenter >= slideTop && viewportCenter < slideBottom) {
            slide.classList.add('active');
        }
        // Passed slides (above current view)
        else if (viewportCenter > slideBottom) {
            slide.classList.add('passed');
        }
    });
}

// ============================================
// Confetti effect
// ============================================
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b9d', '#c06bff', '#6bb5ff', '#ffd56b', '#ff9a6b'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// ============================================
// Sparkle effect on mouse move
// ============================================
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.background = '#ffd56b';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    }
});

// ============================================
// Initialize everything on page load
// ============================================
window.addEventListener('load', () => {
    loadQuotes();
    updateSlides();
    createConfetti();
    
    // Repeat confetti every 10 seconds
    setInterval(createConfetti, 10000);
});

// Update slides on scroll
window.addEventListener('scroll', updateSlides);

// Sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
