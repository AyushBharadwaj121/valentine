const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noPrompt = document.getElementById("noPrompt");
const whisper = document.getElementById("whisper");
const heartsContainer = document.getElementById("hearts");

let noCount = 0;
let whisperShown = false;

const prompts = [
  "Are you sure? 🥺",
  "Just asking gently… 🤍",
  "This button is getting shy 🙈",
  "Okay… I’ll stop now 🙈"
];

yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");

  if (!whisperShown) {
    whisper.classList.add("show");
    whisperShown = true;
  }

  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  setTimeout(() => page2.classList.add("active"), 900);
});

noBtn.addEventListener("click", () => {
  if (noCount < prompts.length) {
    noPrompt.innerText = prompts[noCount];
  }

  noCount++;
  yesBtn.style.transform = `scale(${1 + noCount * 0.22})`;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount === 4) noBtn.style.display = "none";
});

/* MODAL */
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

const messages = {
  7: "If I was with you right now,\nI’d give you a rose and watch you smile 🌹",
  8: "If I was with you,\nI’d hold your hand and tell you I choose you 💍",
  9: "If I was with you today,\nwe’d share chocolate and laugh over nothing 🍫",
  10: "If I was with you,\nI’d hug you tight 🧸",
  11: "If I was with you,\nI’d promise to be there 🤝",
  12: "If I was with you,\na forehead kiss that says ‘it’s okay now’ 🤍",
  13: "If I was with you,\nI’d hug you a little longer 🤗",
  14: "It’s not just Valentine’s Day…\nIt’s a day I’m glad it’s you  ❤️"
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    modalText.innerText = messages[card.dataset.day];
    modal.style.display = "flex";
  });
});

function closeModal() {
  modal.style.display = "none";
}

/* LETTER */
const letter = document.getElementById("letter");
const letterWhisper = document.getElementById("letterWhisper");
let opened = false;

document.getElementById("openLetter").addEventListener("click", () => {
  letter.style.display = "block";
  letterWhisper.style.display = "none";
  opened = true;
});

setTimeout(() => {
  if (!opened) letterWhisper.style.display = "block";
}, 8000);
