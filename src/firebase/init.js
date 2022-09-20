import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword} 
from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import {firebaseConfig}  from './firebaseConfig.js';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
	initializeApp,
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
};