const card = document.querySelector(".card");
const showBtn = document.querySelector("#show-card-btn");
const closeBtn = document.querySelector("#close-card-btn");

const closeCard = () => {
  card.classList.add("hidden");
};

const showCard = () => {
  card.classList.remove("hidden");
};

showBtn.addEventListener("click", showCard);
closeBtn.addEventListener("click", closeCard);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !card.classList.contains("hidden")) {
    closeCard();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && card.classList.contains("hidden")) {
    showCard();
  }
})
