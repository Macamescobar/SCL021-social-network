import paths from "./lib/routes.js";
import feed from './lib/feed.js'

let root = () => {
  let rootLogin = document.getElementById("root");
  rootLogin.appendChild(feed());
};
root();

/*/const init = () => {
  window.location.href = 'http://localhost:3000/#/';
  const root = document.getElementById('root');
  root.appendChild(createLogin());
  window.addEventListener('hashchange', () => {
    // console.log('hash', window.location.hash);
    root.innerHTML = '';
    paths(window.location.hash);
  });
};
window.addEventListener('load', init);*/



// let account = document.getElementById("create-account");
// account.addEventListener("click", (e) => {
//   divElement.innerHTML = signUp;
// });
