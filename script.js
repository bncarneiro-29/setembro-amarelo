const messages = [
  "Você não precisa resolver tudo hoje. Um passo de cada vez.",
  "Se permita descansar. Cuidar de você também é importante.",
  "Seus sentimentos merecem ser acolhidos.",
  "Pedir ajuda é uma forma de cuidado, não de fraqueza.",
  "Respire. Este momento também vai passar.",
  "Você merece ser tratado com gentileza, inclusive por você mesmo."
];

const messageBtn = document.getElementById("messageBtn");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

messageBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);

  messageText.textContent = messages[randomIndex];
  messageBox.classList.add("show");
});


// -----------------------------
// RESPIRAÇÃO GUIADA
// -----------------------------

const breathingBtn = document.getElementById("breathingBtn");
const breathingCircle = document.getElementById("breathingCircle");
const breathingText = document.getElementById("breathingText");
const timerText = document.getElementById("timerText");

let running = false;
let timeout;

function breathingCycle() {
  if (!running) return;

  breathingCircle.classList.add("active");
  breathingText.textContent = "Inspire";
  timerText.textContent = "Inspire lentamente...";

  timeout = setTimeout(() => {
    if (!running) return;

    breathingText.textContent = "Segure";
    timerText.textContent = "Segure o ar por alguns segundos.";

    timeout = setTimeout(() => {
      if (!running) return;

      breathingCircle.classList.remove("active");
      breathingText.textContent = "Expire";
      timerText.textContent = "Expire devagar...";

      timeout = setTimeout(() => {
        breathingCycle();
      }, 4000);

    }, 2000);

  }, 4000);
}

breathingBtn.addEventListener("click", () => {
  if (running) {
    running = false;
    clearTimeout(timeout);

    breathingCircle.classList.remove("active");
    breathingText.textContent = "Pronto?";
    timerText.textContent = "Exercício encerrado.";

    breathingBtn.textContent = "Iniciar novamente";
    return;
  }

  running = true;
  breathingBtn.textContent = "Parar exercício";

  breathingCycle();
});