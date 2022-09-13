import { paths } from "./lib/routes.js";
import { createLogin } from "./lib/login.js";

window.addEventListener("load", () => {
  window.location.href = "http://localhost:3000/#/";
  const root = document.getElementById("root");
  console.log("root", root);
  root.appendChild(createLogin());

  window.addEventListener("hashchange", () => {
    // root.innerHTML = '';
    paths(window.location.hash);
  });
});
