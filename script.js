const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const whisper = document.getElementById("whisper");

let noCount = 0;
let whisperShown = false;

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
  noCount++;
  yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;
  noBtn.style.transform = `scale(${1 - noCount * 0.2})`;
  if (noCount >= 3) noBtn.style.display = "none";
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
  12: "If I was with you,\nI’d give you the softest kiss 💋",
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
