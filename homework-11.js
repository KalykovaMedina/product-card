const form = document.querySelector(".subscription-form");
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

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
}

closeBtn.addEventListener("click", function () {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

const registrationForm = document.querySelector(".registration-form");

const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const dateBirth = document.querySelector("#date-birth");
const login = document.querySelector("#login");
let user;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  repeatPassword.setCustomValidity("");
  if (registrationForm.checkValidity()) {
    if (password.value !== repeatPassword.value) {
      console.log("Регистрация отклонена");
      repeatPassword.setCustomValidity("Пароли не совпадают");
      registrationForm.reportValidity();
    } else {
      const nameValue = name.value;
      const surnameValue = surname.value;
      const dateBirthValue = dateBirth.value;
      const loginValue = login.value;
      user = {
        name: nameValue,
        surname: surnameValue,
        dateBirth: dateBirthValue,
        login: loginValue,
        createdOn: new Date(),
      };
      closeModal();
    }
  } else {
    registrationForm.reportValidity();
    console.log("Регистрация отклонена");
  }
});
