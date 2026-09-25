const form = document.querySelector(".subscription-form"); //ошибка
const inputEmail = document.querySelector("#email");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = inputEmail.value;
  const getEmail = {
    email: email,
  };
  console.log(getEmail);
});

const registrationBtn = document.querySelector(".registration-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal button");

registrationBtn.addEventListener("click", function () {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

overlay.addEventListener("click", function () {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

const registrationForm = document.querySelector(".registration-form");

const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
let user;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (registrationForm.checkValidity()) {
    if (password.value !== repeatPassword.value) {
      console.log("Регистрация отклонена");
    } else {
      const nameValue = document.querySelector("#name").value;
      const surnameValue = document.querySelector("#surname").value;
      const dateBirthValue = document.querySelector("#date-birth").value;
      const loginValue = document.querySelector("#login").value;
      const passwordValue = document.querySelector("#password").value;
      const repeatPasswordValue =
        document.querySelector("#repeat-password").value;
      user = {
        name: nameValue,
        surname: surnameValue,
        dateBirth: dateBirthValue,
        login: loginValue,
        password: passwordValue,
        repeatPassword: repeatPasswordValue,
        createdOn: new Date(),
      };
      modal.classList.remove("modal-showed");
      overlay.classList.remove("overlay-showed");
      console.log(user);
    }
  } else {
    console.log("Регистрация отклонена");
  }
});
