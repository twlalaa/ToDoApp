"use strict";

const addBtn = document.getElementById("add");
const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");
const greet = document.querySelector(".greet");
const message = document.querySelector(".message");

let currentUser = undefined;
let users = [];

const updateList = () => {
  taskList.innerHTML = "";
  message.style.display = currentUser.todos.length ? "none" : "block";
  currentUser.todos.forEach((todo) => {
    const li = `
    <li>
    <span>${todo}</span>
    <button class="delete btn">Delete Task</button>
  </li> `;
    taskList.innerHTML += li;

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((delBtn, index) => {
      delBtn.addEventListener("click", () => {
        removeTodo(index);
      });
    });
  });
};

const loadUsers = () => {
  let stored = JSON.parse(localStorage.getItem("users"));
  if (stored) {
    users = stored;
  }
  let storedCookie = decodeURI(document.cookie);
  let userNameOfUser = storedCookie.split("=")[1];
  currentUser = users.find((user) => user.username === userNameOfUser);
  console.log(currentUser);
  updateList();
};

loadUsers();

addBtn.addEventListener("click", () => {
  if (addInput.value.trim()) {
    currentUser.todos.push(addInput.value.trim());
  }
  updateList();
  localStorage.setItem("users", JSON.stringify(users));
  addInput.value = "";
});

const removeTodo = (index) => {
  currentUser.todos.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  updateList();
};

greet.textContent = `Welcome, ${currentUser.firstName} ${currentUser.lastName}`;
