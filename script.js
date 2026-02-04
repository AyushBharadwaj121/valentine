const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const whisper = document.getElementById("whisper");
const noPrompt = document.getElementById("noPrompt");

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

  setTimeout(() => {
    page2.classList.add("active");
  }, 800);
});

noBtn.addEventListener("click", () => {
  if (noCount < prompts.length) {
    noPrompt.innerText = prompts[noCount];
  }

  noCount++;

  // YES grows gently
  yesBtn.style.transform = `scale(${1 + noCount * 0.22})`;

  // NO jumps to random positions
  const x = Math.random() * 200 - 100; // left/right
  const y = Math.random() * 150 - 75;  // up/down
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount === 4) {
    noBtn.style.display = "none";
  }
});


/* DATE MODAL */
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

const messages = {
  7: "If I was with you right now,\nI’d give you a rose and watch you smile 🌹",
  8: "If I was with you,\nI’d hold your hand and tell you I choose you 💍",
  9: "If I was with you today,\nwe’d share chocolate and laugh over nothing 🍫",
  10: "If I was with you,\nI’d hug you tight 🧸",
  11: "If I was with you,\nI’d promise to be there 🤝",
  12: "If I was with you right now,\na forehead kiss that says ‘it’s okay now’ 🤍",
  13: "If I was with you,\nI’d hug you a little longer 🤗",
  14: "It’s not just Valentine’s Day…\nIt’s a day I’m glad it’s you ❤️ ❤️"
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
let letterOpened = false;
const letter = document.getElementById("letter");
const letterWhisper = document.getElementById("letterWhisper");

document.getElementById("openLetter").addEventListener("click", () => {
  letter.style.display = "block";
  letterOpened = true;
  letterWhisper.style.display = "none";
});

setTimeout(() => {
  if (!letterOpened) {
    letterWhisper.style.display = "block";
  }
}, 8000);

setTimeout(() => {
  document.getElementById("finalLine").innerText =
    "Take your time. This letter will wait for you 🤍";
}, 12000);
