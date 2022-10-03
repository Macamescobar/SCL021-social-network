import { db, auth } from "./init.js";
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// const createPost = async(content) => {
//     try {
//         const docRef = await addDoc(collection(db, “Posts”), {
//           post: content
//         });
//         console.log(docRef.id);
//       } catch (e) {
//         console.error(“Error adding document: “, e);
//       }
// }
//  export {createPost}
window.addEventListener("DOMContentLoaded", async () => {
  onGetSnapShot((querySnapshot) => {
    let html = "";
    const containerFeed = document.querySelector(".feeds");
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      const post = doc.data();
      html += `
      <div class='containerPost'>
        <div class="feed">
        <div class="head">
         <div class="user">
         <div class="profile-photo">
           <img src="/img/profile-13.jpg">
         </div>
         <div class="info">
         <h3> ${post.userName} </h3>
         <small> ${post.date} </small>
         </div>
        </div>
       <span class="edit">
        <i class="fa-solid fa-ellipsis fa-2x"></i>
        </span>
      </div>
     <div class="action-buttons">
      <div class="interaction-buttons">
        <span><i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-regular fa-comment"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
      </div>
      <div class="bookmark">
        <span<i class="uil uil-bookmark"></i></span>
      </div>
      </div>
      <p><b> ${post.userName} </b>${post.description}
      </div>
     </div>
      `;
      containerFeed.innerHTML = html;
    });
  });
});
export const savePost = (description) => {
  addDoc(collection(db, "Posts"), {
    description,
    date: Timestamp.fromDate(new Date()),
    userName:
      auth.currentUser.displayName != null
        ? auth.currentUser.displayName
        : auth.currentUser.email,
  });
};
export const onGetSnapShot = (callback) =>
  onSnapshot(collection(db, "Posts"), callback);