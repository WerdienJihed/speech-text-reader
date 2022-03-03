import { populateVoiceList } from "./modules/modals/change-voice-modal.js";
import "./modules/modals/create-modal.js";
import "./modules/modals/read-text-modal.js";

const init = () => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
};

//App
init();
