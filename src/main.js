import createLogin from "./login.js";
import signUp from "./lib/account.js";

const rootLogin = document.querySelector("#root");

let root = () => {
  let rootLogin = document.getElementById("root");
  rootLogin.appendChild(signUp());
};

let account = document.getElementById("create-account");
account.addEventListener("click", (e) => {
  divElement.innerHTML = signUp;
});

let arrow = document.getElementById("arrow");
console.log(arrow);
arrow.addEventListener("click", (e) => {
  divElement.innerHTML = login;
});
