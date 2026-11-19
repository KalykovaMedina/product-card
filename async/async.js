const infoMessages = document.querySelector(".info-messages");
const userList = document.querySelector(".users-list");
const removeBtn = document.getElementById("btn-remove-all-cards");
const getAllUsersBtn = document.getElementById("btn-get-all-users");

const savedUsers = localStorage.getItem("users");

function renderUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    const userInfo = document.createElement("p");
    userInfo.textContent = `${user.name}, ${user.surname}`;
    card.append(userInfo);
    card.append(deleteBtn);
    userList.append(card);

    deleteBtn.addEventListener("click", () => {
      const updatedUsers = users.filter((item) => {
        return item.id !== user.id;
      });
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      renderUsers(updatedUsers);
      infoMessages.textContent = "Пользователь удалён";
    });
  });
}

if (savedUsers) {
  const users = JSON.parse(savedUsers);
  renderUsers(users);
  console.log(users);
  infoMessages.textContent = "";
} else {
  infoMessages.textContent = "Данные загружаются";
  fetch("./users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      return response.json();
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("users", JSON.stringify(data.users));
      renderUsers(data.users);
      infoMessages.textContent = "";
    })
    .catch((error) => {
      console.log(error);
      infoMessages.textContent = "Ошибка при загрузке данных";
    });
}

removeBtn.addEventListener("click", () => {
  userList.innerHTML = "";
  localStorage.setItem("users", JSON.stringify([]));
});

function loadUsers() {
  fetch("./users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("users", JSON.stringify(data.users));
      renderUsers(data.users);
      infoMessages.textContent = "";
    })
    .catch((error) => {
      console.log(error);
      infoMessages.textContent = "Ошибка при загрузке данных";
    });
}

getAllUsersBtn.addEventListener("click", () => {
  const getUsers = localStorage.getItem("users");
  if (getUsers !== null) {
    const users = JSON.parse(getUsers);
    if (users.length === 0) {
      loadUsers();
    } else if (userList.children.length === 5) {
      infoMessages.textContent = "Все пользователи уже отображены";
    } else {
      loadUsers();
    }
  } else {
    loadUsers();
  }
});
