import { defaultImageUrl } from "./../helper.js";
const modal = document.querySelector("#createNewItemModal");
const newItemText = modal.querySelector("#newItemText");
const errorMessage = modal.querySelector(".invalid-feedback");
const imageThumbnail = modal.querySelector(".img-thumbnail");
const imageFileInput = modal.querySelector("#imageFileInput");
const addBtn = modal.querySelector(".btn-success");

let myModal = new bootstrap.Modal(
  document.getElementById("createNewItemModal")
);

const handleAdd = () => {
  if (newItemText.value === "") {
    newItemText.classList.add("is-invalid");
    errorMessage.classList.remove("d-none");
    return;
  }
  const src =
    imageFileInput.files.length > 0
      ? URL.createObjectURL(imageFileInput.files[0])
      : defaultImageUrl;
  myModal.hide();
  handleClear();
};

const handleClear = () => {
  newItemText.value = "";
  newItemText.classList.remove("is-invalid");
  errorMessage.classList.add("d-none");
  imageFileInput.value = "";
  imageThumbnail.src = defaultImageUrl;
};

function handleFileUrlChanged() {
  if (this.files.length > 0) {
    imageThumbnail.src = URL.createObjectURL(imageFileInput.files[0]);
    imageThumbnail.onload = function () {
      URL.revokeObjectURL(this.src);
    };
  }
}

addBtn.addEventListener("click", handleAdd);
modal.addEventListener("hidden.bs.modal", handleClear);
imageFileInput.addEventListener("change", handleFileUrlChanged, false);
