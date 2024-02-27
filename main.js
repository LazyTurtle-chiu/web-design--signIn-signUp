const signInBtn = document.querySelector("#signin-btn");
const registerBtn = document.querySelector("#register-btn");
const container = document.querySelector(".container");
const signInBtn2 = document.querySelector("#signin-btn2");
const registerBtn2 = document.querySelector("#register-btn2");

registerBtn.addEventListener("click", () => {
  container.classList.add("register-mode");
});
signInBtn.addEventListener("click", () => {
  container.classList.remove("register-mode");
});
registerBtn2.addEventListener("click", () => {
  container.classList.add("register-mode2");
});
signInBtn2.addEventListener("click", () => {
  container.classList.remove("register-mode2");
});
