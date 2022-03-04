import { speak } from "../helper.js";

/* Selecting Elements */
const modal = document.querySelector("#readTextModal");
const textAreaElement = modal.querySelector("#readTextTextarea");
const readBtn = document.querySelector("#readTextBtn");

/* Functions */
const handleRead = () => {
  speak(textAreaElement.value);
};
const handleClear = () => {
  readTextTextarea.value = "";
};

readBtn.addEventListener("click", handleRead);
modal.addEventListener("hidden.bs.modal", handleClear);
