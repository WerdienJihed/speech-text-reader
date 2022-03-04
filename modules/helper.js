import { generateCard } from "./card.js";
import { selectedVoice } from "./modals/change-voice-modal.js";

const cardsContainer = document.querySelector("#cards-container");
const defaultImageUrl = "./../images/default.png";

const appendColumn = (card, isEditMode) => {
  const placeholder = document.createElement("div");
  const generatedCard = generateCard(card.title, card.imgUrl);
  if (isEditMode)
    generatedCard.querySelector(".card-footer").classList.add("show");

  const html = `<div class="col-md-6 col-lg-3"></div>`;
  placeholder.innerHTML = html;
  const column = placeholder.firstElementChild;
  column.appendChild(generatedCard);
  cardsContainer.querySelector(".row").appendChild(column);
};

const speak = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
};

export { appendColumn, speak, defaultImageUrl };
