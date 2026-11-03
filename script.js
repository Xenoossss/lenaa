
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  letter.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Replace with your WhatsApp number.
// Indonesian format: 62 followed by your number.
// No + sign, spaces, or dashes.

const YOUR_WHATSAPP_NUMBER = "6289516868639";

/**
 * @param {string} answer
 */
function sendAnswer(answer) {

  const message =
`hiii!! here's my answer hehe
My answer is: ${answer}

`;

  const whatsappURL =
    "https://wa.me/" +
    YOUR_WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

// YES BUTTON
document.getElementById("yesBtn").addEventListener("click", () => {
  sendAnswer("YES, I'D LOVE TO ♡ (u can add a little message here if u want hhehe)");
});

// TALK BUTTON
document.getElementById("talkBtn").addEventListener("click", () => {
  sendAnswer("can we talk about it first?");
});
