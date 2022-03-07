import { appendColumn } from "./modules/helper.js";
import { populateVoiceList } from "./modules/modals/change-voice-modal.js";
import "./modules/modals/create-modal.js";
import "./modules/modals/edit-modal.js";
import "./modules/modals/text-reader-modal.js";
import "./modules/modals/confirmation-modal.js";
/* Variables */
const cards = [
  {
    title: "I am hungry",
    imgUrl: "/images/hungry.jpg",
  },
  {
    title: "I am thirsty",
    imgUrl: "/images/thirsty.png",
  },
  {
    title: "I am tired",
    imgUrl: "/images/tired.jpg",
  },
  {
    title: "I am scared",
    imgUrl: "/images/scared.jpg",
  },
];

/* Functions */
const init = () => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  cards.forEach((card) => {
    appendColumn(card, false);
  });
};

//App
init();
