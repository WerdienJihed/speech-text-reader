const modal = document.querySelector("#confirmationModal");
const deleteBtn = modal.querySelector(".btn-danger");

let columnToDelete = null;

modal.addEventListener("show.bs.modal", function (e) {
  columnToDelete = e.relatedTarget.closest(".card").parentElement;
});
deleteBtn.addEventListener("click", () => {
  columnToDelete.remove();
});
