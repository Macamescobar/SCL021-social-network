import { createLogin } from "./login.js";
import { signUp } from "./account.js";
import { error404 } from "./view404.js";
import { profile } from "./profile.js";
import { feed } from "./feed.js";

export const paths = (hash) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  switch (hash) {
    case "#/":
    case "#/login":
      root.appendChild(createLogin());
      break;
    case "#/singUp":
      root.appendChild(signUp());
      break;
    case "#/profile":
      root.appendChild(profile());
      break;
    case "#/feed":
      root.appendChild(feed());
      break;
    default:
      root.appendChild(error404());
  }
};
