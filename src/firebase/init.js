import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	FacebookAuthProvider
}
	from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { firebaseConfig } from './firebaseConfig.js';


// import {
// getFirestore,
// collection,
// addDoc
// } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const providerFacebook = new FacebookAuthProvider(app);

// const db = getFirestore(app);


export {
	initializeApp,
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	provider,
	signInWithRedirect,
	getRedirectResult,
	FacebookAuthProvider,
	providerFacebook

	// db,
	// collection,
	// addDoc
};