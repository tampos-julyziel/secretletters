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
// Mirrors CSS :nth-child(5n+X) assignment — same cycling pattern
const envColors = [
    { bg: '#fde8e8', border: '#f0b8b8', seal: '#e07a5f' }, // blush
    { bg: '#daeeff', border: '#9dcce8', seal: '#5b9fc9' }, // sky
    { bg: '#d9f0d3', border: '#9ecb93', seal: '#5ba65b' }, // sage
    { bg: '#fff3b0', border: '#ddc85e', seal: '#c8972d' }, // buttercream
    { bg: '#e8daf5', border: '#b89dd4', seal: '#8e5bb0' }, // lavender
];

// ================= DOM =================
const letterGrid = document.getElementById('letter-grid');
const searchInput = document.getElementById('search-input');

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

const passNoteForm = document.getElementById('pass-note-form');
const noteRecipient = document.getElementById('note-recipient');
const noteMessage = document.getElementById('note-message');
const flightKeyResult = document.getElementById('flight-key-result');
const flightKeyText = document.getElementById('flight-key-text');
const copyKeyBtn = document.getElementById('copy-key-btn');

const catchForm = document.getElementById('catch-form');
const flightKeyInput = document.getElementById('flight-key-input');
const catchError = document.getElementById('catch-error');
const caughtRecipient = document.getElementById('caught-recipient');
const caughtMessage = document.getElementById('caught-message-text');

const catchBtn = document.getElementById('catch-btn');
const catchExpired = document.getElementById('catch-expired');

const origamiContainer = document.getElementById('origami-container');

// State
let currentActiveCode = null;

// ================= FIREBASE SETUP =================
// ⚠️  PASTE YOUR FIREBASE CONFIG HERE (see setup guide)
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
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

// ================= UTILS =================

/** Masks a name: first letter + asterisks for the rest, e.g. "Sophia" → "S*****" */
function maskName(name) {
    if (!name || name.length <= 1) return name;
    return name.charAt(0) + '*'.repeat(name.length - 1);
}

/** Returns "Dear S*****," format */
function maskedGreeting(name) {
    return `Dear ${maskName(name)},`;
}

function generateFlightKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 5; i++) key += chars.charAt(Math.floor(Math.random() * chars.length));
    return key;
}

// ================= ENVELOPE SVG BUILDER =================
/**
 * Builds an SVG envelope shape.
 *   viewBox="0 0 140 100"
 *   Envelope body: full rect
 *   Flap: triangle from top
 *   Fold lines: V shape from bottom corners to center
 *   Wax seal: circle in the center
 */
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
                  fill="#fdfbf7" font-family="Dancing Script, cursive" font-size="13"
                  text-anchor="middle" dominant-baseline="middle">${initial}</text>
        </svg>
    `;
}

// ================= GRID RENDERER =================
function renderGrid() {
    letterGrid.innerHTML = '';

    Object.entries(secretVault).forEach(([code, person], index) => {
        const card = document.createElement('div');
        card.className = 'envelope-card';
        card.dataset.name = person.name.toLowerCase();
        card.dataset.code = code;

        const colorSet = envColors[index % envColors.length];
        const initial = person.name.charAt(0).toUpperCase();

        card.innerHTML = `
            ${buildEnvelopeSVG(colorSet, initial)}
            <div class="masked-name">${maskName(person.name)}</div>
        `;

        card.addEventListener('click', () => openLetterModal(code, person));
        letterGrid.appendChild(card);
    });
}

renderGrid();

// ================= SEARCH =================
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    letterGrid.querySelectorAll('.envelope-card').forEach(card => {
        card.style.display = card.dataset.name.includes(term) ? '' : 'none';
    });
});

// ================= MODAL LOGIC =================
function openLetterModal(code, person) {
    currentActiveCode = code;

    // Show "Dear S*****," — ALWAYS masked until unlocked
    modalGreeting.textContent = maskedGreeting(person.name);
    modalMessage.textContent = person.message;

    // Set signature if present (blurred along with message)
    if (person.signature) {
        modalSignature.textContent = person.signature;
        modalSignature.className = 'modal-signature blurred';
    } else {
        modalSignature.textContent = '';
        modalSignature.className = 'modal-signature';
    }

    // Reset state
    modalMessage.className = 'modal-text blurred';
    passwordOverlay.style.display = 'block';
    unlockPasscode.value = '';
    unlockError.classList.remove('active');

    letterModal.classList.add('active');
    setTimeout(() => unlockPasscode.focus(), 120);
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay.id);
    });
});

// Creator card → poem modal
document.getElementById('creator-card').addEventListener('click', () => {
    poemModal.classList.add('active');
});

// Unlock logic
unlockBtn.addEventListener('click', attemptUnlock);
unlockPasscode.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptUnlock();
});

function attemptUnlock() {
    const input = unlockPasscode.value.trim().toUpperCase();
    if (input === currentActiveCode) {
        unlockError.classList.remove('active');
        passwordOverlay.style.display = 'none';
        modalMessage.classList.remove('blurred');
        modalMessage.classList.add('unblurred');
        // Reveal signature if present
        modalSignature.classList.remove('blurred');
        modalSignature.classList.add('unblurred');
        // Reveal real name in greeting once unlocked
        const { name } = secretVault[currentActiveCode];
        modalGreeting.textContent = `Dear ${name},`;
    } else {
        unlockError.classList.add('active');
        unlockPasscode.value = '';
        // Shake animation
        unlockPasscode.style.animation = 'none';
        unlockPasscode.offsetHeight; // reflow
        unlockPasscode.style.animation = 'shake 0.4s ease';
    }
}

// ================= MAILROOM =================

// ================= MAILROOM (FIREBASE) =================

// --- Send a Note ---
passNoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const recipient = noteRecipient.value.trim();
    const msg = noteMessage.value.trim();
    if (!msg || !recipient) return;

    const sendBtn = passNoteForm.querySelector('button[type="submit"]');
    sendBtn.textContent = '✈️ Folding...';
    sendBtn.disabled = true;
    flightKeyResult.style.display = 'none';

    try {
        const newKey = generateFlightKey();

        // Save to Firebase (works across all devices!)
        await db.ref(`mailroom/${newKey}`).set({
            recipient,
            message: msg,
            createdAt: Date.now()
        });

        // Play origami animation, then reveal key
        origamiContainer.classList.add('active');
        setTimeout(() => {
            origamiContainer.classList.remove('active');
            flightKeyText.textContent = newKey;
            flightKeyResult.style.display = 'block';
            sendBtn.textContent = 'Fold & Send! ✈️';
            sendBtn.disabled = false;
            passNoteForm.reset();
        }, 3000);

    } catch (err) {
        console.error('Firebase write error:', err);
        sendBtn.textContent = 'Error — try again';
        sendBtn.disabled = false;
    }
});

// --- Copy Key ---
copyKeyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(flightKeyText.textContent).then(() => {
        const orig = copyKeyBtn.textContent;
        copyKeyBtn.textContent = '✓ Copied!';
        setTimeout(() => { copyKeyBtn.textContent = orig; }, 1600);
    });
});

// --- Catch a Plane ---
catchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = flightKeyInput.value.trim().toUpperCase();

    // Reset feedback
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

        // Check 3-day expiry
        if (Date.now() - note.createdAt > THREE_DAYS_MS) {
            await db.ref(`mailroom/${key}`).remove();
            catchExpired.classList.add('active');
            catchBtn.textContent = 'Catch It! 🤝';
            catchBtn.disabled = false;
            flightKeyInput.value = '';
            return;
        }

        // Valid note — show it!
        flightKeyInput.value = '';
        caughtRecipient.textContent = `To: ${note.recipient}`;
        caughtMessage.textContent = note.message;

        origamiContainer.classList.add('active');
        setTimeout(() => {
            origamiContainer.classList.remove('active');
            catchBtn.textContent = 'Catch It! 🤝';
            catchBtn.disabled = false;
            unfoldModal.classList.add('active');
        }, 3000);

    } catch (err) {
        console.error('Firebase read error:', err);
        catchBtn.textContent = 'Error — try again';
        catchBtn.disabled = false;
    }
});
