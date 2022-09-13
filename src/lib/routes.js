import { createLogin } from "../lib/login";
import { signUp } from "../lib/account";
import { error404 } from "../lib/view404";
import { profile } from "../lib/profile";
import { feed } from "../lib/feed";


export const paths = {
    "/": createLogin(),
    "/signUp": signUp(),
    "/feed": feed(),
    "/profile": profile(),
    "/error": error404(),
};



// export const paths = (hash) => {
//   const root = document.getElementById("root");
//   root.innerHTML = "";
//   switch (hash) {
//     case "#/":
//     case "#login":
//       root.appendChild(createLogin());
//       break;
//     case "#/singUp":
//       root.appendChild(signUp());
//       break;
//     case "#/profile":
//       root.appendChild(profile());
//       break;
//     case "#/feed":
//       root.appendChild(feed());
//       break;
//     default:
//       root.appendChild(error404());
//   }
// };
