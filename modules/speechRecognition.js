const startListeningBtn = document.getElementById("startListeningBtn");
const outputTextarea = document.getElementById("outputTextarea");

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const handleStartListening = () => {
  recognition.start();
};

recognition.onresult = function (event) {
  const result = event.results[0][0].transcript;
  outputTextarea.value = result;
};

startListeningBtn.addEventListener("click", handleStartListening);
