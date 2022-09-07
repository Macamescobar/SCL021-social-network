import createLogin from "./login.js";
import signUp from "./lib/account.js";

/* import { signUp } from "./lib/account.js"; */
let root = () => {
  let rootLogin = document.getElementById("root");
  rootLogin.appendChild(signUp());
};

root();