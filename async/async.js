const infoMessages = document.querySelector(".info-messages");
const userList = document.querySelector(".users-list");
const removeBtn = document.getElementById("btn-remove-all-cards");
const getAllUsersBtn = document.getElementById("btn-get-all-users");

const savedUsers = localStorage.getItem("users");

function renderUsers(users) {
  userList.innerHTML = "";

  if (users.length === 0) {
    infoMessages.textContent = "Список пользователей пуст";
    return;
  }

  infoMessages.textContent = "";
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
      if (updatedUsers.length > 0) {
        infoMessages.textContent = "Пользователь удалён";
      }
    });
  });
}

if (savedUsers !== null) {
  const users = JSON.parse(savedUsers);
  renderUsers(users);
  console.log(users);
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
      localStorage.setItem("totalUsersCount", data.users.length);
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
    })
    .catch((error) => {
      console.log(error);
      infoMessages.textContent = "Ошибка при загрузке данных";
    });
}

removeBtn.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));
  renderUsers([]);
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
      localStorage.setItem("totalUsersCount", data.users.length);
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
    } else if (
      userList.children.length ===
      Number(localStorage.getItem("totalUsersCount"))
    ) {
      infoMessages.textContent = "Все пользователи уже отображены";
    } else {
      loadUsers();
    }
  } else {
    loadUsers();
  }
});
