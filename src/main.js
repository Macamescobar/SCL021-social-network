//import { myFunction } from './lib/index.js';

import { login } from "./login.js";
import { signUp } from "./lib/account.js";
const divElement = document.getElementById("root");
divElement.innerHTML = login;

let account = document.getElementById("create-account");
account.addEventListener("click", (e) => {
  divElement.innerHTML = signUp;
});

let arrow = document.getElementById("arrow");
arrow.addEventListener("click", (e) => {
  divElement.innerHTML = login;
});
