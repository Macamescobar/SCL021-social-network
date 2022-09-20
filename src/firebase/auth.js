import {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
} from "./init.js";

//Función de promesa para CREAR usuario con email y contraseña
export const signCreate = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

//Funcion y promesa para ingresar a la cuenta
export const signInFunction = (email,password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      location.hash = "/feed";
    })
    .catch((error) => {
      console.log(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
