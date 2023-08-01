"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const signupBtn = document.querySelector(".signup-button");

signupBtn.addEventListener("click", (e) => {
  if (
    !firstName.value ||
    !lastName.value ||
    !username.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    console.log("test");
    e.preventDefault();
    return;
  }

  const newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    todos: [],
  };

  const stored = JSON.parse(localStorage.getItem("users"));

  if (stored) {
    stored.push(newUser);
  }
  if (!stored) {
    stored = [newUser];
  }

  localStorage.setItem("users", JSON.stringify(stored));

  firstName.value = "";
  lastName.value = "";
  password.value = "";
  username.value = "";
  confirmPassword.value = "";
});
