import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Abrir modal quando clickar em "Marcar como lida"
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//Abrir modal quando o botâo delete for clickado
const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();
  const text = check ? "Marcar como lida " : "Exluir ";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta`;
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()} `;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  modal.open();
}
