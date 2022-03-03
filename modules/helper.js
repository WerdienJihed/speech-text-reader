import { selectedVoice } from "./modals/change-voice-modal.js";

const defaultImageUrl = "./../images/default.png";

const speak = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
};

export { speak, defaultImageUrl };
