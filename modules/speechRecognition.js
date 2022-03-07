/* Selecting Elements */
const startListeningBtn = document.getElementById("startListeningBtn");
const outputTextarea = document.getElementById("outputTextarea");
const editMode = document.getElementById("editMode");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

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

const handleDownload = () => {
  const text = outputTextarea.value;
  var blob = new Blob([text], { type: "text/plain" });
  const href = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), {
    href,
    style: "display:none",
    download: "test.txt",
  });
  a.click();
  URL.revokeObjectURL(href);
  a.remove();
};

/* Event listeners */
recognition.onresult = handleWriteResult;
startListeningBtn.addEventListener("click", handleStartListening);
editMode.addEventListener("change", handleEditMode);
copyBtn.addEventListener("click", handleCopy);
downloadBtn.addEventListener("click", handleDownload);
