const browserMode = document.querySelector(".browser");
const popUp = document.querySelector(".popupFormDiv");
const windows = document.querySelector(".windows");
const usernameButton = document.querySelector("#usernameBtn");
const inputForm = document.querySelector('.popupForm input[type = "text"]');

browserMode.addEventListener("click", (e) => {
  popUp.classList.toggle("show");
  browserMode.classList.add("hide");
  windows.classList.add("hide");
});

usernameButton.addEventListener("click", (e) => {
  if (inputForm.value === "") {
    alert("Comrade, fill this shii.");
  }
});

/* Scroll reveal */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 200,
});

sr.reveal(`.inviteDiv`);
sr.reveal(`.colorBg`);

/* Hamburger */
const hamMenu = document.querySelector(".hamburgerMenu");
const offScreen = document.querySelector(".offScreen");
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreen.classList.toggle("active");
  backdrop.classList.toggle('show');
  body.classList.toggle('hidflow');
});
