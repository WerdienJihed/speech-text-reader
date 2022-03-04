/* Selecting Elements */
const modal = document.querySelector("#editItemModal");
const textElement = modal.querySelector("#editItemText");
const errorMessage = modal.querySelector(".invalid-feedback");
const imageFileInput = modal.querySelector("#imageFileInput");
const imageThumbnail = modal.querySelector(".img-thumbnail");
const saveBtn = modal.querySelector(".btn-success");

/* Variables */
var myModal = new bootstrap.Modal(document.getElementById("editItemModal"));

let cardToEdit = null;
const setValues = (text, src) => {
  textElement.value = text;
  imageThumbnail.src = src;
  imageThumbnail.onload = function () {
    URL.revokeObjectURL(this.src);
  };
};

const handleSave = () => {
  if (textElement.value === "") {
    textElement.classList.add("is-invalid");
    errorMessage.classList.remove("d-none");
    return;
  }

  cardToEdit.querySelector(".card-text").textContent = textElement.value;
  if (imageFileInput.files.length > 0) {
    const imageUrl = URL.createObjectURL(imageFileInput.files[0]);
    cardToEdit.querySelector(".card-img-top").src = imageUrl;
  }
  textElement.classList.remove("is-invalid");
  errorMessage.classList.add("d-none");
  myModal.hide();
};

function handleFileUrlChanged() {
  if (this.files.length > 0) {
    imageThumbnail.src = URL.createObjectURL(imageFileInput.files[0]);
    imageThumbnail.onload = function () {
      URL.revokeObjectURL(this.src);
    };
  }
}

/* Event listeners */
saveBtn.addEventListener("click", handleSave);
imageFileInput.addEventListener("change", handleFileUrlChanged, false);
modal.addEventListener("show.bs.modal", function (e) {
  cardToEdit = e.relatedTarget.closest(".card");
});

export { setValues };
