import "./modules/modals/create-modal.js";
import { populateVoiceList } from "./modules/modals/change-voice-modal.js";

const init = () => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
};

//App
init();
