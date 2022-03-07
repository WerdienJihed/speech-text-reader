/* Selecting Elements */
const startListeningBtn = document.getElementById("startListeningBtn");
const outputTextarea = document.getElementById("outputTextarea");
const editMode = document.getElementById("editMode");
const copyBtn = document.getElementById("copyBtn");

/* Variables */
const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const clipboard = navigator.clipboard;
/* Functions */
const handleWriteResult = (e) => {
  const result = e.results[0][0].transcript;
  outputTextarea.value = result;
};

const handleStartListening = () => {
  recognition.start();
};

const handleEditMode = (e) => {
  outputTextarea.readOnly = !e.target.checked;
};

const changeCopyBtnIcon = () => {
  copyBtn.firstElementChild.className = "bi bi-check-lg";
  setTimeout(() => {
    copyBtn.firstElementChild.className =
      "bi bi-clipboard-fill text-secondary ";
  }, 1000);
};

const handleCopy = () => {
  changeCopyBtnIcon();
  clipboard.writeText(outputTextarea.value);
};

/* Event listeners */
recognition.onresult = handleWriteResult;
startListeningBtn.addEventListener("click", handleStartListening);
editMode.addEventListener("change", handleEditMode);
copyBtn.addEventListener("click", handleCopy);
