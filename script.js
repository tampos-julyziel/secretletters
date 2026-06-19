// ================= DATA =================
const secretVault = {
    "SUNFLOWER": { name: "Churchille", message: "You always bring such bright, warm energy to everyone around you. Thank you for being such a constant, uplifting presence in my life!" },
    "STARLIGHT": { name: "Lindsay", message: "Your creativity and kindness never fail to amaze me. I am so lucky to have a friend who shines as brightly as you do." },
    "COZYMUG": { name: "Sheariah", message: "You are the human equivalent of a warm cup of tea on a rainy day. Thank you for always listening and being such a comforting, safe space." },
    "WILDFLOWER": { name: "Sophia", message: "I love your free spirit and the beautiful way you see the world. Never lose that amazing spark that makes you so unique!" },
    "CAMPFIRE": { name: "Deborah", message: "You have a heart of gold and a spirit that just brings people together. I cherish all our laughs and deep conversations." },
    "SEAGLASS": { name: "Samantha", message: "You are rare, beautiful, and incredibly strong. I appreciate your honesty and your unwavering support more than words can say." },
    "BOOKWORM": { name: "Thea", message: "Your wisdom and quiet strength inspire me constantly. Thank you for all the shared stories and for always knowing exactly what to say." },
    "COMPASS": { name: "Khaster", message: "You are always pointing people in the right direction with your solid advice and genuine heart. Thanks for being such a reliable, awesome friend!" },
    "LANTERN": {
        name: "Jefferson", message: `Some people walk into your life with an introduction.

You didn't.

You just showed up, and somehow became the person I reach for when life starts feeling heavier than my hands can carry. I don't think you'll ever fully understand how many times you've saved me.

Not in the dramatic, movie kind of way. But in the quiet way :))

The kind where I was drowning in my own thoughts, staring at my phone, and your name was the first one that came to mind. The kind where one call, one conversation, one brutally honest reality check was enough to pull me back to shore.

You've become my emergency contact without ever being assigned the role.
My first call.
My rant person.
My safe place for all the thoughts I don't know where else to put.

You're the person I run to when my mind is too loud, when my heart is too tired, when life feels like it's caving in on itself.

And somehow, every single time, you answer.

Not always with the words I want to hear. But with the words I need. Because that's who you are.

A real-talker.
A truth-teller.
Someone who cares enough to be honest when everyone else would rather stay comfortable.

It's funny. You came into my life unexpectedly. Yet somehow, you became one of the most important people in it.

One of the few people I trust with my unfiltered thoughts. One of the few people who has seen me at my lowest and chose to stay anyway.

So if I don't say it enough—thank you.
For the late-night calls.
For listening to the same problems more than once.
For showing up when I didn't know how to ask for help.
For being my one-call-away superhero more times than I can count.

Life would've looked very different without you in it. And I honestly don't like imagining that version.

I'm grateful you showed up.
Unexpectedly.
And then stayed.`, signature: `  - Lalay <33`
    },
    "ORIGAMI": { name: "Lourish", message: "You have such a beautiful, intricate mind and a kind soul. I deeply value our friendship and the completely unique perspective you bring to my life." }
};

// ================= ENVELOPE COLOR PALETTES =================
const envColors = [
    { bg: '#fde8e8', border: '#f0b8b8', seal: '#e07a5f' }, // blush
    { bg: '#daeeff', border: '#9dcce8', seal: '#5b9fc9' }, // sky
    { bg: '#d9f0d3', border: '#9ecb93', seal: '#5ba65b' }, // sage
    { bg: '#fff3b0', border: '#ddc85e', seal: '#c8972d' }, // buttercream
    { bg: '#e8daf5', border: '#b89dd4', seal: '#8e5bb0' }, // lavender
];

// ================= BUILT-IN SVG STICKERS (~25 STICKERS) =================
const STICKERS = {
    "heart-red": `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#f25f5c"/></svg>`,
    "heart-pink": `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#f48b94"/></svg>`,
    "star-gold": `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#f9c74f"/></svg>`,
    "sparkle": `<svg viewBox="0 0 24 24"><path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="#b5179e"/></svg>`,
    "flower-daisy": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#f9c74f"/><circle cx="12" cy="5" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="12" cy="19" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="5" cy="12" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="19" cy="12" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="7" cy="7" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="17" cy="17" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="7" cy="17" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/><circle cx="17" cy="7" r="3" fill="#ffffff" stroke="#e07a5f" stroke-width="1"/></svg>`,
    "flower-tulip": `<svg viewBox="0 0 24 24"><path d="M12 2a4 4 0 00-4 4v5c0 2.2 1.8 4 4 4s4-1.8 4-4V6a4 4 0 00-4-4z" fill="#f3722c"/><path d="M12 15v7" stroke="#43aa8b" stroke-width="2" stroke-linecap="round"/><path d="M12 17c-2 0-4 1.5-4 3" stroke="#43aa8b" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
    "sunflower": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#4a3728"/><path d="M12 2l1 3.5 1-3.5zm0 20l1-3.5 1 3.5zm-10-10l3.5 1-3.5 1zm20 0l-3.5 1 3.5 1zM5 5l3 3-3-3zm14 14l-3-3 3 3zM5 19l3-3-3 3zm14-14l-3 3 3-3z" stroke="#f9c74f" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    "rainbow": `<svg viewBox="0 0 24 24"><path d="M4 18a8 8 0 0 1 16 0" fill="none" stroke="#f25f5c" stroke-width="2"/><path d="M6 18a6 6 0 0 1 12 0" fill="none" stroke="#f9c74f" stroke-width="2"/><path d="M8 18a4 4 0 0 1 8 0" fill="none" stroke="#43aa8b" stroke-width="2"/></svg>`,
    "cloud-rain": `<svg viewBox="0 0 24 24"><path d="M19.36 10.04A6 6 0 0 0 8.04 7.58 4 4 0 1 0 8 15.58h11.42a3.86 3.86 0 0 0 .94-7.54z" fill="#a8dadc"/><path d="M9 18v2M12 18v2M15 18v2" stroke="#457b9d" stroke-width="2" stroke-linecap="round"/></svg>`,
    "sun": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="#f9c74f" stroke="#f3722c" stroke-width="1"/><path d="M12 2v2M12 20v2M4 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 19.66l1.42-1.42M16.24 7.76l1.42-1.42" stroke="#f3722c" stroke-width="2" stroke-linecap="round"/></svg>`,
    "moon": `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9z" fill="#f9c74f" stroke="#c9963d" stroke-width="1"/></svg>`,
    "origami-plane": `<svg viewBox="0 0 24 24"><path d="M2 21l20-9L2 3v7l15 2-15 2z" fill="#90e0ef" stroke="#48cae4" stroke-width="1" stroke-linejoin="round"/></svg>`,
    "mail-love": `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="#e8daf5" stroke="#b89dd4" stroke-width="1.5"/><path d="M2 6l10 7 10-7" fill="none" stroke="#b89dd4" stroke-width="1.5"/><path d="M12 14.5l-2.5-2 1.25-1 1.25 1.5 1.25-1.5 1.25 1z" fill="#f25f5c"/></svg>`,
    "butterfly": `<svg viewBox="0 0 24 24"><path d="M12 8c1.5-3.5 5.5-3.5 5.5 1 0 3.5-3.5 5-5.5 1C10 14 6.5 12.5 6.5 9c0-4.5 4-4.5 5.5-1z" fill="#f48b94" stroke="#e07a5f" stroke-width="1"/><path d="M12 5v14" stroke="#4a3728" stroke-width="2" stroke-linecap="round"/></svg>`,
    "clover": `<svg viewBox="0 0 24 24"><path d="M12 12c-1.5-1.5-4-1.5-4 1 0 2 2.5 2 4-1M12 12c1.5-1.5 4-1.5 4 1 0 2-2.5 2-4-1M12 12c-1.5 1.5-4 1.5-4-1 0-2 2.5-2 4 1M12 12c1.5 1.5 4 1.5 4-1 0-2-2.5-2-4 1" fill="#43aa8b"/><path d="M12 12v8" stroke="#43aa8b" stroke-width="2" stroke-linecap="round"/></svg>`,
    "cat": `<svg viewBox="0 0 24 24"><path d="M12 21c-4.5 0-8-3.5-8-8a8 8 0 0 1 2-5l2-3 2 3h4l2-3 2 3a8 8 0 0 1 2 5c0 4.5-3.5 8-8 8z" fill="#ffffff" stroke="#4a3728" stroke-width="1.5"/><circle cx="9" cy="12" r="1.5" fill="#4a3728"/><circle cx="15" cy="12" r="1.5" fill="#4a3728"/><path d="M11.5 14.5l.5.5.5-.5" fill="none" stroke="#4a3728" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    "bear": `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3" fill="#c8963d"/><circle cx="18" cy="6" r="3" fill="#c8963d"/><circle cx="12" cy="13" r="8" fill="#c8963d"/><ellipse cx="12" cy="15" rx="3.5" ry="2.5" fill="#f5ede0"/><circle cx="9.5" cy="11.5" r="1.2" fill="#4a3728"/><circle cx="14.5" cy="11.5" r="1.2" fill="#4a3728"/><circle cx="12" cy="14" r="1" fill="#4a3728"/></svg>`,
    "crown": `<svg viewBox="0 0 24 24"><path d="M2 18l2-11 5 4 3-6 3 6 5-4 2 11H2z" fill="#f9c74f" stroke="#c9963d" stroke-width="1.5"/><circle cx="2" cy="7" r="1" fill="#c9963d"/><circle cx="9" cy="11" r="1" fill="#c9963d"/><circle cx="12" cy="5" r="1" fill="#c9963d"/><circle cx="15" cy="11" r="1" fill="#c9963d"/><circle cx="22" cy="7" r="1" fill="#c9963d"/></svg>`,
    "balloon": `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="10" rx="6" ry="7" fill="#f48b94"/><path d="M12 17c0 2-2 3-2 5" stroke="#8d6e5a" stroke-width="1.5" fill="none"/><polygon points="12,17 10,19 14,19" fill="#f48b94"/></svg>`,
    "leaf": `<svg viewBox="0 0 24 24"><path d="M12 2C8 6 4 10 4 15a8 8 0 0 0 16 0c0-5-4-9-8-13z" fill="#43aa8b"/><path d="M12 2v22" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/></svg>`,
    "cherry": `<svg viewBox="0 0 24 24"><circle cx="7" cy="17" r="4.5" fill="#f25f5c"/><circle cx="17" cy="16" r="4.5" fill="#f25f5c"/><path d="M7 13c1-5 10-6 10-6" stroke="#43aa8b" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M17 12c-2-3-8-4-8-4" stroke="#43aa8b" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
    "coffee": `<svg viewBox="0 0 24 24"><rect x="5" y="8" width="12" height="12" rx="3" fill="#8d6e5a"/><path d="M17 11h2.5a2.5 2.5 0 0 1 0 5H17" fill="none" stroke="#8d6e5a" stroke-width="2.5"/><path d="M8 3c0 2-1 2-1 3M11 3c0 2-1 2-1 3M14 3c0 2-1 2-1 3" stroke="#e07a5f" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
    "music": `<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="3" fill="#b5179e"/><circle cx="16" cy="16" r="3" fill="#b5179e"/><path d="M9 18V6l10-2v12" stroke="#b5179e" stroke-width="2.5" stroke-linejoin="round" fill="none"/><path d="M9 10l10-2" stroke="#b5179e" stroke-width="2" stroke-linecap="round"/></svg>`,
    "happy-face": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff3b0" stroke="#ddc85e" stroke-width="1.5"/><circle cx="8.5" cy="9.5" r="1.5" fill="#4a3728"/><circle cx="15.5" cy="9.5" r="1.5" fill="#4a3728"/><path d="M8 14.5c2 2.5 6 2.5 8 0" fill="none" stroke="#4a3728" stroke-width="2" stroke-linecap="round"/></svg>`,
    "gift": `<svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="1" fill="#daeeff" stroke="#9dcce8" stroke-width="1.5"/><rect x="3" y="6" width="18" height="3" rx="1" fill="#fde8e8" stroke="#f0b8b8" stroke-width="1.5"/><path d="M12 6V20" stroke="#f25f5c" stroke-width="2"/><path d="M12 6c-2-2-4-2-4 0s2 2 4 0c2-2 4-2 4 0s-2 2-4 0" fill="none" stroke="#f25f5c" stroke-width="2"/></svg>`
};

// ================= EMOTIONAL INTELLIGENCE KEYWORDS =================
const MOODS = {
    love: {
        keywords: ["love", "adore", "heart", "darling", "miss", "always", "together", "crush", "sweetheart", "babe", "precious", "ily", "special"],
        emoji: "💖",
        label: "In Love/Affectionate",
        color: "#fde8e8",
        suggestion: "This feels full of affection! Try the Blush background and a heart sticker."
    },
    excited: {
        keywords: ["excited", "happy", "wait", "yay", "fun", "awesome", "great", "celebrate", "party", "amazing", "thrilled", "congrats", "cant wait"],
        emoji: "🎉",
        label: "Excited/Joyful",
        color: "#fff3b0",
        suggestion: "Such amazing energy! Try the Buttercream background and a star or balloon sticker."
    },
    mad: {
        keywords: ["mad", "angry", "annoyed", "hate", "frustrated", "upset", "pissed", "why", "stop", "rude", "done"],
        emoji: "🔥",
        label: "Passionate/Intense",
        color: "#e8daf5",
        suggestion: "Intense feelings here. Try the Lavender background or classical typewriter font."
    },
    sad: {
        keywords: ["sad", "blue", "cry", "crying", "tears", "sorry", "hurt", "lonely", "broken", "sigh", "grief", "pain"],
        emoji: "🌧️",
        label: "Melancholic",
        color: "#daeeff",
        suggestion: "A reflective mood. Try the Sky background, typewriter font, and a rain cloud."
    },
    cozy: {
        keywords: ["thank you", "thanks", "cozy", "warm", "smile", "friend", "best", "grateful", "appreciate", "laugh", "safe", "haven", "peace"],
        emoji: "☀️",
        label: "Cozy & Grateful",
        color: "#d9f0d3",
        suggestion: "So cozy! Try the Sage background, clean font, and a coffee or daisy sticker."
    }
};

// ================= DOM ELEMENTS =================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchEmpty = document.getElementById('search-empty');

const letterModal = document.getElementById('letter-modal');
const poemModal = document.getElementById('poem-modal');
const unfoldModal = document.getElementById('unfold-modal');

const modalGreeting = document.getElementById('modal-greeting');
const modalMessage = document.getElementById('modal-message');
const modalSignature = document.getElementById('modal-signature');
const passwordOverlay = document.getElementById('password-overlay');
const unlockPasscode = document.getElementById('unlock-passcode');
const unlockBtn = document.getElementById('unlock-btn');
const unlockError = document.getElementById('unlock-error');

const composeForm = document.getElementById('compose-form');
const composeRecipient = document.getElementById('compose-recipient');
const composeMessage = document.getElementById('compose-message');
const moodIndicator = document.getElementById('mood-indicator');
const moodEmoji = document.getElementById('mood-emoji');
const moodLabel = document.getElementById('mood-label');
const moodSuggestion = document.getElementById('mood-suggestion');

const bgSwatches = document.getElementById('bg-swatches');
const fontPicker = document.getElementById('font-picker');
const layoutPicker = document.getElementById('layout-picker');
const stickerPanel = document.getElementById('sticker-panel');
const selectedStickersContainer = document.getElementById('selected-stickers');

const photoInput = document.getElementById('photo-input');
const photoPreview = document.getElementById('photo-preview');
const photoThumb = document.getElementById('photo-thumb');
const removePhotoBtn = document.getElementById('remove-photo');

const recordBtn = document.getElementById('record-btn');
const recordTimer = document.getElementById('record-timer');
const voicePreview = document.getElementById('voice-preview');
const voicePlayback = document.getElementById('voice-playback');
const removeVoiceBtn = document.getElementById('remove-voice');

const sendBtn = document.getElementById('send-btn');
const flightKeyResult = document.getElementById('flight-key-result');
const flightKeyText = document.getElementById('flight-key-text');
const copyKeyBtn = document.getElementById('copy-key-btn');

const catchForm = document.getElementById('catch-form');
const flightKeyInput = document.getElementById('flight-key-input');
const catchError = document.getElementById('catch-error');
const catchExpired = document.getElementById('catch-expired');
const catchBtn = document.getElementById('catch-btn');

const caughtRecipient = document.getElementById('caught-recipient');
const caughtMessage = document.getElementById('caught-message-text');

const origamiContainer = document.getElementById('origami-container');
const footerYear = document.getElementById('footer-year');

// ================= STATE VARIABLES =================
let currentActiveCode = null;
let selectedBg = '#fdfbf7';
let selectedFont = "'Indie Flower', cursive";
let selectedLayout = 'left';
let selectedStickers = [];
let firebaseLetters = {};

// Voice Recording State
let mediaRecorder = null;
let audioChunks = [];
let voiceBlob = null;
let recordStartTime = 0;
let recordInterval = null;
const MAX_RECORD_MS = 30000;

// Photo File State
let photoFile = null;

// ================= FIREBASE SETUP =================
const firebaseConfig = {
    apiKey: "AIzaSyCb6pttQ3ww3WgoowsYBmPnT1W66Ej7W40",
    authDomain: "secret-letter-13fd4.firebaseapp.com",
    databaseURL: "https://secret-letter-13fd4-default-rtdb.firebaseio.com",
    projectId: "secret-letter-13fd4",
    storageBucket: "secret-letter-13fd4.firebasestorage.app",
    messagingSenderId: "114247089482",
    appId: "1:114247089482:web:171a6aff09a59d9c7515b3",
    measurementId: "G-DV9JYXP0BQ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

// ================= INITIALIZATION =================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Set current footer year
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // 2. Load stickers grid
    initStickerPanel();

    // 3. Setup toolkit event listeners
    initToolkitPickers();

    // 4. Sync Realtime Database mailroom letters
    db.ref('mailroom').on('value', (snapshot) => {
        firebaseLetters = snapshot.val() || {};
        triggerSearch();
        renderEnvelopeBanner();
    });

    // 5. Setup mobile nav toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // 6. Scroll Spy for active header navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 7. Initial banner render
    renderEnvelopeBanner();
});

// ================= UTILITIES =================
function generateFlightKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 5; i++) key += chars.charAt(Math.floor(Math.random() * chars.length));
    return key;
}

// ================= ENVELOPE SVG BUILDER =================
function buildEnvelopeSVG(colorSet, initial) {
    const { bg, border, seal } = colorSet;
    return `
        <svg class="env-body" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <!-- Envelope body -->
            <rect class="env-rect" x="1" y="1" width="138" height="98" rx="3"
                  fill="${bg}" stroke="${border}" stroke-width="2"/>
            <!-- Top flap -->
            <polygon class="env-flap" points="1,1 139,1 70,52"
                     fill="${border}" opacity="0.55"/>
            <!-- Bottom-left fold line -->
            <line class="env-fold" x1="1" y1="99" x2="70" y2="52"
                  stroke="${border}" stroke-width="1.2" opacity="0.6"/>
            <!-- Bottom-right fold line -->
            <line class="env-fold" x1="139" y1="99" x2="70" y2="52"
                  stroke="${border}" stroke-width="1.2" opacity="0.6"/>
            <!-- Wax seal -->
            <circle class="env-seal" cx="70" cy="70" r="14" fill="${seal}" opacity="0.82"/>
            <text class="env-seal-text" x="70" y="70"
                  fill="#fdfbf7" font-family="'Dancing Script', cursive" font-size="13"
                  text-anchor="middle" dominant-baseline="middle">${initial}</text>
        </svg>
    `;
}

// ================= SEARCH DRIVEN DISPLAY =================
searchInput.addEventListener('input', triggerSearch);

function triggerSearch() {
    const term = searchInput.value.trim().toLowerCase();

    if (!term) {
        searchResults.innerHTML = '';
        searchResults.appendChild(searchEmpty);
        searchEmpty.style.display = 'block';
        return;
    }

    // Search hardcoded vault
    const vaultMatches = Object.entries(secretVault).filter(([code, item]) => {
        return item.name.toLowerCase().includes(term);
    });

    // Search firebase (ignoring expired)
    const firebaseMatches = Object.entries(firebaseLetters).filter(([key, item]) => {
        const isMatch = item.recipient && item.recipient.toLowerCase().includes(term);
        const isExpired = Date.now() - item.createdAt > THREE_DAYS_MS;
        if (isMatch && isExpired) {
            db.ref(`mailroom/${key}`).remove();
            return false;
        }
        return isMatch && !isExpired;
    });

    searchResults.innerHTML = '';

    if (vaultMatches.length === 0 && firebaseMatches.length === 0) {
        searchEmpty.style.display = 'none';
        const noResults = document.createElement('div');
        noResults.className = 'search-empty';
        noResults.innerHTML = `🔎 No letters found for "${searchInput.value.replace(/</g, "&lt;")}". Try searching another name!`;
        searchResults.appendChild(noResults);
        return;
    }

    searchEmpty.style.display = 'none';

    let index = 0;

    // Render vault cards
    vaultMatches.forEach(([code, person]) => {
        const card = createEnvelopeCard(code, person, index++);
        searchResults.appendChild(card);
    });

    // Render firebase cards
    firebaseMatches.forEach(([key, note]) => {
        const person = {
            name: note.recipient,
            message: note.message,
            signature: note.signature || '',
            design: note.design,
            stickers: note.stickers,
            photoURL: note.photoURL,
            voiceURL: note.voiceURL,
            createdAt: note.createdAt
        };
        const card = createEnvelopeCard(key, person, index++);
        searchResults.appendChild(card);
    });
}

function createEnvelopeCard(code, person, cardIndex) {
    const card = document.createElement('div');
    card.className = 'envelope-card';

    const colorSet = envColors[cardIndex % envColors.length];
    const initial = person.name.charAt(0).toUpperCase();

    // Snippet (first 40 characters)
    const snippet = person.message.length > 40
        ? person.message.slice(0, 40) + '...'
        : person.message;

    card.innerHTML = `
        ${buildEnvelopeSVG(colorSet, initial)}
        <div class="envelope-label">To: ${person.name}</div>
        <div class="letter-peek">
            <p class="peek-snippet">"${snippet.replace(/</g, "&lt;")}"</p>
        </div>
    `;

    card.addEventListener('click', () => openLetterModal(code, person));
    return card;
}

// ================= MODALS LOGIC =================
function openLetterModal(code, person) {
    currentActiveCode = code;

    modalGreeting.textContent = `Dear ${person.name},`;
    modalMessage.textContent = person.message;
    modalMessage.className = 'modal-text blurred';

    if (person.signature) {
        modalSignature.textContent = person.signature;
        modalSignature.className = 'modal-signature blurred';
    } else {
        modalSignature.textContent = '';
        modalSignature.className = 'modal-signature';
    }

    // Apply layout custom styles
    const design = person.design || { bgColor: '#fdfbf7', font: "'Indie Flower', cursive", layout: 'left' };
    const modalContent = document.getElementById('letter-modal-inner');
    modalContent.style.backgroundColor = design.bgColor || '#fdfbf7';
    modalMessage.style.fontFamily = design.font || "'Indie Flower', cursive";
    modalMessage.style.textAlign = design.layout || 'left';
    modalSignature.style.fontFamily = design.font || "'Indie Flower', cursive";

    // Render stickers
    const modalStickersDiv = document.getElementById('modal-stickers');
    modalStickersDiv.innerHTML = '';
    if (person.stickers && person.stickers.length > 0) {
        person.stickers.forEach(stkId => {
            const svg = STICKERS[stkId];
            if (svg) {
                const div = document.createElement('div');
                div.className = 'modal-sticker-svg';
                div.innerHTML = svg;
                modalStickersDiv.appendChild(div);
            }
        });
    }

    // Render attachments (photo)
    const modalPhotoDiv = document.getElementById('modal-photo');
    const modalPhotoImg = document.getElementById('modal-photo-img');
    if (person.photoURL) {
        modalPhotoImg.src = person.photoURL;
        modalPhotoDiv.style.display = 'block';
    } else {
        modalPhotoImg.src = '';
        modalPhotoDiv.style.display = 'none';
    }

    // Render attachments (voice)
    const modalVoiceDiv = document.getElementById('modal-voice');
    const modalVoiceAudio = document.getElementById('modal-voice-audio');
    if (person.voiceURL) {
        modalVoiceAudio.src = person.voiceURL;
        modalVoiceDiv.style.display = 'flex';
    } else {
        modalVoiceAudio.src = '';
        modalVoiceDiv.style.display = 'none';
    }

    // Display timestamp
    const modalTimestampDiv = document.getElementById('modal-timestamp');
    if (person.createdAt) {
        const dateStr = new Date(person.createdAt).toLocaleString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        modalTimestampDiv.textContent = `Sent on ${dateStr}`;
        modalTimestampDiv.style.display = 'block';
    } else {
        modalTimestampDiv.style.display = 'none';
    }

    // Reset Passcode form
    passwordOverlay.style.display = 'block';
    const letterBody = document.getElementById('letter-body');
    if (letterBody) letterBody.style.display = 'none';
    unlockPasscode.value = '';
    unlockError.classList.remove('active');

    letterModal.classList.add('active');
    setTimeout(() => unlockPasscode.focus(), 120);
}

function openUnfoldModal(note) {
    const design = note.design || { bgColor: '#fdfbf7', font: "'Indie Flower', cursive", layout: 'left' };
    const unfoldInner = document.getElementById('unfold-modal-inner');
    unfoldInner.style.backgroundColor = design.bgColor || '#fdfbf7';

    caughtRecipient.textContent = `Dear ${note.recipient},`;
    caughtMessage.textContent = note.message;
    caughtMessage.style.fontFamily = design.font || "'Indie Flower', cursive";
    caughtMessage.style.textAlign = design.layout || 'left';

    // Display stickers
    const caughtStickersDiv = document.getElementById('caught-stickers');
    caughtStickersDiv.innerHTML = '';
    if (note.stickers && note.stickers.length > 0) {
        note.stickers.forEach(stkId => {
            const svg = STICKERS[stkId];
            if (svg) {
                const div = document.createElement('div');
                div.className = 'modal-sticker-svg';
                div.innerHTML = svg;
                caughtStickersDiv.appendChild(div);
            }
        });
    }

    // Display photo
    const caughtPhotoDiv = document.getElementById('caught-photo');
    const caughtPhotoImg = document.getElementById('caught-photo-img');
    if (note.photoURL) {
        caughtPhotoImg.src = note.photoURL;
        caughtPhotoDiv.style.display = 'block';
    } else {
        caughtPhotoImg.src = '';
        caughtPhotoDiv.style.display = 'none';
    }

    // Display voice
    const caughtVoiceDiv = document.getElementById('caught-voice');
    const caughtVoiceAudio = document.getElementById('caught-voice-audio');
    if (note.voiceURL) {
        caughtVoiceAudio.src = note.voiceURL;
        caughtVoiceDiv.style.display = 'flex';
    } else {
        caughtVoiceAudio.src = '';
        caughtVoiceDiv.style.display = 'none';
    }

    // Display timestamp
    const caughtTimestampDiv = document.getElementById('caught-timestamp');
    if (note.createdAt) {
        const dateStr = new Date(note.createdAt).toLocaleString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        caughtTimestampDiv.textContent = `Sent on ${dateStr}`;
        caughtTimestampDiv.style.display = 'block';
    } else {
        caughtTimestampDiv.style.display = 'none';
    }

    unfoldModal.classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    // Pause any audio playbacks on close
    const modalAudio = document.querySelector(`#${id} audio`);
    if (modalAudio) modalAudio.pause();
}

// Close modal on background overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay.id);
    });
});

document.getElementById('creator-card').addEventListener('click', () => {
    poemModal.classList.add('active');
});

// Unlock letter logic
unlockBtn.addEventListener('click', attemptUnlock);
unlockPasscode.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptUnlock();
});

function attemptUnlock() {
    const input = unlockPasscode.value.trim().toUpperCase();
    const vaultLetter = secretVault[currentActiveCode];

    if (vaultLetter) {
        if (input === currentActiveCode) {
            unlockSuccess(vaultLetter.name);
        } else {
            unlockFail();
        }
    } else {
        // Firebase letter
        if (input === currentActiveCode) {
            const fbLetter = firebaseLetters[currentActiveCode];
            unlockSuccess(fbLetter ? fbLetter.recipient : "Friend");
        } else {
            unlockFail();
        }
    }
}

function unlockSuccess(name) {
    unlockError.classList.remove('active');
    passwordOverlay.style.display = 'none';
    const letterBody = document.getElementById('letter-body');
    if (letterBody) letterBody.style.display = 'block';
    modalMessage.classList.remove('blurred');
    modalMessage.classList.add('unblurred');
    modalSignature.classList.remove('blurred');
    modalSignature.classList.add('unblurred');
    modalGreeting.textContent = `Dear ${name},`;
}

function unlockFail() {
    unlockError.classList.add('active');
    unlockPasscode.value = '';
    unlockPasscode.classList.remove('shake-it');
    void unlockPasscode.offsetWidth; // Reflow triggers re-run of CSS animation
    unlockPasscode.classList.add('shake-it');
}

// ================= STICKERS SYSTEM =================
function initStickerPanel() {
    if (!stickerPanel) return;
    stickerPanel.innerHTML = '';

    Object.entries(STICKERS).forEach(([id, svgMarkup]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sticker-item';
        btn.dataset.id = id;
        btn.innerHTML = svgMarkup;
        btn.title = id.replace('-', ' ');
        btn.addEventListener('click', () => toggleSticker(id, btn));
        stickerPanel.appendChild(btn);
    });
}

function toggleSticker(id, buttonEl) {
    const idx = selectedStickers.indexOf(id);
    if (idx > -1) {
        selectedStickers.splice(idx, 1);
        buttonEl.classList.remove('active');
    } else {
        if (selectedStickers.length >= 5) {
            alert("Scrapbooks look best with up to 5 stickers per page! ✨");
            return;
        }
        selectedStickers.push(id);
        buttonEl.classList.add('active');
    }
    updateSelectedStickersUI();
}

function updateSelectedStickersUI() {
    selectedStickersContainer.innerHTML = '';
    selectedStickers.forEach(id => {
        const badge = document.createElement('div');
        badge.className = 'selected-sticker-badge';
        badge.innerHTML = `
            <span>${id.replace('-', ' ')}</span>
            <button type="button" class="remove-badge-btn">&times;</button>
        `;
        badge.querySelector('.remove-badge-btn').addEventListener('click', () => {
            selectedStickers = selectedStickers.filter(s => s !== id);
            const btn = stickerPanel.querySelector(`.sticker-item[data-id="${id}"]`);
            if (btn) btn.classList.remove('active');
            updateSelectedStickersUI();
        });
        selectedStickersContainer.appendChild(badge);
    });
}

// ================= DESIGN TOOLKIT SYSTEM =================
function initToolkitPickers() {
    // Background Color
    bgSwatches.querySelectorAll('.swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            bgSwatches.querySelector('.swatch.active').classList.remove('active');
            swatch.classList.add('active');
            selectedBg = swatch.dataset.color;
            composeMessage.style.backgroundColor = selectedBg;
        });
    });

    // Fonts Selector
    fontPicker.querySelectorAll('.font-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            fontPicker.querySelector('.font-opt.active').classList.remove('active');
            opt.classList.add('active');
            selectedFont = opt.dataset.font;
            composeMessage.style.fontFamily = selectedFont;
        });
    });

    // Layout Selector
    layoutPicker.querySelectorAll('.layout-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            layoutPicker.querySelector('.layout-opt.active').classList.remove('active');
            opt.classList.add('active');
            selectedLayout = opt.dataset.layout;
            composeMessage.style.textAlign = selectedLayout;
        });
    });
}

// ================= EMOTIONAL INTELLIGENCE SYSTEM =================
composeMessage.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    detectAndDisplayMood(text);
});

function detectAndDisplayMood(text) {
    if (!text) {
        moodIndicator.style.display = 'none';
        return;
    }

    let detected = null;

    // Check keywords in text
    for (const [moodKey, config] of Object.entries(MOODS)) {
        const matches = config.keywords.some(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(text);
        });
        if (matches) {
            detected = config;
            break; // take first matched mood
        }
    }

    if (detected) {
        moodEmoji.textContent = detected.emoji;
        moodLabel.textContent = detected.label + ":";
        moodSuggestion.textContent = detected.suggestion;
        moodIndicator.style.display = 'flex';
        moodIndicator.style.borderColor = detected.color;
    } else {
        moodIndicator.style.display = 'none';
    }
}

// ================= RICH MEDIA ATTACHMENTS =================

// ----- Photos -----
photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    photoFile = file;
    const reader = new FileReader();
    reader.onload = (event) => {
        photoThumb.src = event.target.result;
        photoPreview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
});

removePhotoBtn.addEventListener('click', () => {
    photoFile = null;
    photoInput.value = '';
    photoPreview.style.display = 'none';
    photoThumb.src = '';
});

// Image compression before upload
function compressImage(file, maxWidth = 800) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg', 0.85);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// ----- Voice Note Recorder -----
recordBtn.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        stopRecording();
    } else {
        startRecording();
    }
});

async function startRecording() {
    audioChunks = [];
    voiceBlob = null;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            voiceBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioURL = URL.createObjectURL(voiceBlob);
            voicePlayback.src = audioURL;
            voicePreview.style.display = 'flex';

            recordBtn.textContent = '🎙️ Record Voice';
            recordBtn.classList.remove('recording');
            recordTimer.style.display = 'none';
            clearInterval(recordInterval);
        };

        mediaRecorder.start();
        recordBtn.textContent = '⏹️ Stop';
        recordBtn.classList.add('recording');
        recordTimer.style.display = 'inline';

        recordStartTime = Date.now();
        updateTimer();
        recordInterval = setInterval(updateTimer, 500);

    } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Couldn't open microphone. Please allow micro-access.");
    }
}

function updateTimer() {
    const elapsed = Date.now() - recordStartTime;
    if (elapsed >= MAX_RECORD_MS) {
        stopRecording();
        return;
    }
    const sec = Math.floor(elapsed / 1000);
    recordTimer.textContent = `0:${sec.toString().padStart(2, '0')} / 0:30`;
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}

removeVoiceBtn.addEventListener('click', () => {
    voiceBlob = null;
    voicePreview.style.display = 'none';
    voicePlayback.src = '';
});

// ================= COMPOSE FORM SUBMISSION =================
composeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const recipient = composeRecipient.value.trim();
    const message = composeMessage.value.trim();

    if (!recipient || !message) return;

    sendBtn.textContent = '✈️ Folding Plane...';
    sendBtn.disabled = true;
    flightKeyResult.style.display = 'none';

    try {
        const flightKey = generateFlightKey();

        let photoURL = '';
        let voiceURL = '';

        // 1. Upload photo if present
        if (photoFile) {
            const compressed = await compressImage(photoFile, 800);
            const photoRef = storage.ref().child(`letters/${flightKey}/photo-${Date.now()}.jpg`);
            const uploadTask = await photoRef.put(compressed);
            photoURL = await uploadTask.ref.getDownloadURL();
        }

        // 2. Upload voice if present
        if (voiceBlob) {
            const voiceRef = storage.ref().child(`letters/${flightKey}/voice-${Date.now()}.webm`);
            const uploadTask = await voiceRef.put(voiceBlob);
            voiceURL = await uploadTask.ref.getDownloadURL();
        }

        // 3. Save to Realtime Database
        await db.ref(`mailroom/${flightKey}`).set({
            recipient,
            message,
            photoURL,
            voiceURL,
            createdAt: Date.now(),
            design: {
                bgColor: selectedBg,
                font: selectedFont,
                layout: selectedLayout
            },
            stickers: selectedStickers
        });

        // 4. Play origami plane animation
        origamiContainer.classList.add('active');
        setTimeout(() => {
            origamiContainer.classList.remove('active');

            // Show result
            flightKeyText.textContent = flightKey;
            flightKeyResult.style.display = 'block';

            // Reset composer state
            composeForm.reset();
            resetComposerDesign();

            sendBtn.textContent = 'Fold & Send! ✈️';
            sendBtn.disabled = false;
        }, 3000);

    } catch (err) {
        console.error("Composer submit error:", err);
        alert("Couldn't send the letter. Please check connection and try again.");
        sendBtn.textContent = 'Fold & Send! ✈️';
        sendBtn.disabled = false;
    }
});

function resetComposerDesign() {
    // Colors
    bgSwatches.querySelector('.swatch.active').classList.remove('active');
    bgSwatches.querySelector('[data-color="#fdfbf7"]').classList.add('active');
    selectedBg = '#fdfbf7';
    composeMessage.style.backgroundColor = selectedBg;

    // Fonts
    fontPicker.querySelector('.font-opt.active').classList.remove('active');
    fontPicker.querySelector('[data-font="\'Indie Flower\', cursive"]').classList.add('active');
    selectedFont = "'Indie Flower', cursive";
    composeMessage.style.fontFamily = selectedFont;

    // Layouts
    layoutPicker.querySelector('.layout-opt.active').classList.remove('active');
    layoutPicker.querySelector('[data-layout="left"]').classList.add('active');
    selectedLayout = 'left';
    composeMessage.style.textAlign = selectedLayout;

    // Stickers
    selectedStickers = [];
    stickerPanel.querySelectorAll('.sticker-item.active').forEach(b => b.classList.remove('active'));
    updateSelectedStickersUI();

    // Attachments
    photoFile = null;
    photoPreview.style.display = 'none';
    photoThumb.src = '';

    voiceBlob = null;
    voicePreview.style.display = 'none';
    voicePlayback.src = '';

    // Mood indicators
    moodIndicator.style.display = 'none';
}

copyKeyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(flightKeyText.textContent).then(() => {
        const orig = copyKeyBtn.textContent;
        copyKeyBtn.textContent = '✓ Copied!';
        setTimeout(() => { copyKeyBtn.textContent = orig; }, 1600);
    });
});

// ================= MAILROOM (CATCH PLANES) =================
catchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = flightKeyInput.value.trim().toUpperCase();

    catchError.classList.remove('active');
    catchExpired.classList.remove('active');
    catchBtn.textContent = '🔍 Searching...';
    catchBtn.disabled = true;

    try {
        const snapshot = await db.ref(`mailroom/${key}`).get();

        if (!snapshot.exists()) {
            catchError.classList.add('active');
            catchBtn.textContent = 'Catch It! 🤝';
            catchBtn.disabled = false;
            return;
        }

        const note = snapshot.val();

        // Expiry check
        if (Date.now() - note.createdAt > THREE_DAYS_MS) {
            await db.ref(`mailroom/${key}`).remove();
            catchExpired.classList.add('active');
            catchBtn.textContent = 'Catch It! 🤝';
            catchBtn.disabled = false;
            flightKeyInput.value = '';
            return;
        }

        flightKeyInput.value = '';

        // Unfold plane animation
        origamiContainer.classList.add('active');
        setTimeout(() => {
            origamiContainer.classList.remove('active');
            catchBtn.textContent = 'Catch It! 🤝';
            catchBtn.disabled = false;
            openUnfoldModal(note);
        }, 3000);

    } catch (err) {
        console.error("Catch plane error:", err);
        alert("Oops, error catching the letter. Try again!");
        catchBtn.textContent = 'Catch It! 🤝';
        catchBtn.disabled = false;
    }
});

// ================= ENVELOPE BANNER (MARQUEE) =================
function renderEnvelopeBanner() {
    const marqueeContent = document.getElementById('marquee-content');
    if (!marqueeContent) return;

    marqueeContent.innerHTML = '';

    // Get all letters
    const allLetters = [];

    // Vault letters
    Object.values(secretVault).forEach(person => {
        allLetters.push({ name: person.name, message: person.message });
    });

    // Firebase letters
    Object.values(firebaseLetters).forEach(note => {
        const isExpired = Date.now() - note.createdAt > THREE_DAYS_MS;
        if (!isExpired) {
            allLetters.push({ name: note.recipient, message: note.message });
        }
    });

    if (allLetters.length === 0) {
        allLetters.push({ name: "Your Friend", message: "Send a cozy message to fill this space! ✨" });
    }

    // Make sure we have enough items for scrolling effect
    let list = [...allLetters];
    while (list.length < 15) {
        list = list.concat(allLetters);
    }

    // Double items for looping scroll spy
    const doubleList = list.concat(list);

    doubleList.forEach(item => {
        const miniCard = document.createElement('div');
        miniCard.className = 'mini-envelope';

        const snippet = item.message.length > 25
            ? item.message.slice(0, 25) + '...'
            : item.message;

        miniCard.innerHTML = `
            <span class="mini-icon">✉️</span>
            <div class="mini-info">
                <span class="mini-name">${item.name}</span>
                <span class="mini-snippet">"${snippet.replace(/</g, "&lt;")}"</span>
            </div>
        `;

        miniCard.addEventListener('click', () => {
            searchInput.value = item.name;
            triggerSearch();
            document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
            searchInput.focus();
        });

        marqueeContent.appendChild(miniCard);
    });
}
