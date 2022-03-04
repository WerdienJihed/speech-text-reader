import { speak } from "../helper.js";
const modal = document.querySelector("#readTextModal");
const textAreaElement = modal.querySelector("#readTextTextarea");
const readBtn = document.querySelector("#readTextBtn");

const handleRead = () => {
  speak(textAreaElement.value);
};
const handleClear = () => {
  readTextTextarea.value = "";
};

readBtn.addEventListener("click", handleRead);
modal.addEventListener("hidden.bs.modal", handleClear);
