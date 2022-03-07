/* Selecting Elements */
const startListeningBtn = document.getElementById("startListeningBtn");
const outputTextarea = document.getElementById("outputTextarea");
const editMode = document.getElementById("editMode");

/* Variables */
const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

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

/* Event listeners */
recognition.onresult = handleWriteResult;
startListeningBtn.addEventListener("click", handleStartListening);
editMode.addEventListener("change", handleEditMode);
