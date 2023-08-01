"use strict";

const username = document.getElementById("username");
const password = document.getElementById("password");
const signinBtn = document.querySelector(".signin-button");

let users = [];
let currentAccount = undefined;

const loadUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (storedUsers) {
    users = storedUsers;
  }
};

loadUsers();

signinBtn.addEventListener("click", (e) => {
  currentAccount = users.find((user) => user.username === username.value);

  if (!currentAccount) {
    console.log("there is no account like this");
    e.preventDefault();
    return;
  }

  if (currentAccount.password !== password.value) {
    e.preventDefault();
    return;
  }

  document.cookie = `username=${currentAccount.username}; path=/`;

  username.value = "";
  password.value = "";
});
