import { db, auth } from "./init.js";
import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


const createPost = async(content) => {
    try {
        const docRef = await addDoc(collection(db, "Posts"), {
          post: content
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}

export {createPost}
