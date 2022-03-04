import { speak } from "./helper.js";

const generateCard = (text, imgUrl) => {
  const placeholder = document.createElement("div");
  const html = `<div class="card h-100 shadow ">
            <img src="${imgUrl}" class="card-img-top"/>
            <div class="card-body d-flex align-items-end">
              <p class="card-text w-100 text-center">${text}</p>
            </div>
            <div class="card-footer text-center collapse settings">
              <div class="btn-group" role="group">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmationModal"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#editItemModal"
                >
                  <i class="bi bi-pencil-fill"></i>
                </button>
              </div>
            </div>
          </div>`;
  placeholder.innerHTML = html;
  const card = placeholder.firstElementChild;

  card.addEventListener("click", handleCardClicked);
  card.querySelector(".card-footer").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  return card;
};

const handleCardClicked = (e) => {
  const card = e.target.closest(".card");
  const text = card.querySelector(".card-text").textContent;
  speak(text);
};

export { generateCard };
