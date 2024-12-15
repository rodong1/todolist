const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");
const HIDDEN = "hidden";
const USERNAME = "username";

function sayHello(username) {
  hello.classList.remove(HIDDEN);
  hello.innerText = `Hello ${username}`;
}

function loginEvent(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  sayHello(username);
}

const savedName = localStorage.getItem(USERNAME);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginEvent);
} else {
  sayHello(savedName);
}
