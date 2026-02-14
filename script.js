const wishes = [
    "আমার জীবনের সবচেয়ে সুন্দর উপহার তুমি। তোমার ভালোবাসায় আমার প্রতিটি দিন উৎসবের মতো মনে হয়।",
    "তুমি শুধু আমার ভালোবাসাই নও, তুমি আমার সবচেয়ে ভালো বন্ধু এবং আমার পুরো পৃথিবী। এভাবেই পাশে থেকো।",
    "হাজারো মানুষের ভিড়েও আমার চোখ শুধু তোমাকেই খোঁজে। তুমি আমার জীবনের শ্রেষ্ঠ প্রাপ্তি।",
    "তোমার হাসিতেই আমার শান্তি, তোমার কথাতেই আমার সুখ। তোমাকে ছাড়া জীবন ভাবাই অসম্ভব।",
    "প্রতিটি মুহূর্তে তোমায় নতুন করে অনুভব করি। আজীবন তোমার হয়েই থাকতে চাই, প্রিয়তমা।"
];

let currentIdx = -1;
const btn = document.getElementById('nextBtn');
const btnText = document.getElementById('btnText');
const initialMsg = document.getElementById('initial-msg');
const wrapper = document.getElementById('wishes-wrapper');
const heartsContainer = document.getElementById('hearts-container');

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const symbols = ['❤️', '💖', '💕', '🌹'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    const startX = Math.random() * 100;
    const size = Math.random() * (25 - 12) + 12;
    const duration = Math.random() * (6 - 3) + 3;

    heart.style.left = startX + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = duration + 's';

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 400);

// Click Logic
btn.addEventListener('click', () => {
    currentIdx++;

    // Explosion effect
    for (let i = 0; i < 20; i++) setTimeout(createHeart, i * 50);

    // Change UI
    initialMsg.style.display = 'none';
    btnText.innerText = "আরো দেখতে ক্লিক করো...";

    if (currentIdx >= wishes.length) {
        // Final State
        wrapper.innerHTML = `
            <div class="glass p-10 wish-card active border-2 border-pink-500/50">
                <h2 class="text-4xl handwritten text-pink-400 mb-4">I Love You!</h2>
                <p class="text-white text-lg">সারা জীবন তোমার হাতটি ধরে পাশে থাকতে চাই।</p>
            </div>
        `;
        btn.style.display = 'none';
        return;
    }

    // Show Wish
    wrapper.innerHTML = `
        <div class="glass p-10 wish-card active">
            <p class="text-white text-xl leading-relaxed font-medium">
                "${wishes[currentIdx]}"
            </p>
        </div>
    `;
});
