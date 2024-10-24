const cardsContainer = document.querySelector(".cards-container");
const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const userDescription = document.getElementById("user-description");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");
const lightbox = document.querySelector(".lightbox");
const newProfileCard = document.querySelector(".new-profile-card");

confirmBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  const newCard = document.createElement("div");
  newCard.innerHTML = `
    <img src="${userImg.value}" alt="${userName.value}-picture">
    <hr>
    <h3>${userName.value}</h3>
    <p>${userDescription.value.length > 100 ? userDescription.value.substring(0, 100) + '...' : userDescription.value}</p>
    `
  newCard.classList.add("profile-card")
  cardsContainer.insertBefore(newCard, newProfileCard);
})

cancelBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  userImg.value = "";
  userName.value = "";
  userDescription.value = "";
})

newProfileCard.addEventListener('click', () => {
  lightbox.style.display = "flex";
})