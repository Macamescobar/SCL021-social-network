import { db, auth } from "./init.js";
import {
  collection,
  addDoc,
  Timestamp,getDocs
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const createPost = async (content) => {
    const docRef = await addDoc(collection(db, "Posts"), {
      text: content,
      date: Timestamp.fromDate(new Date()),
      userName: auth.currentUser.displayName,
      likes: [],
    });
    console.log("Document written with ID: ", docRef.id);
};
const printPost = async (userPost) => {
  const querySnapshot = await getDocs(collection(db, "Post"));
  userPost.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().text}`);
    userPost.innerHTML += `            
    <div class="head">
      <div class="user">
        <div class="profile-photo">
          <img src="/img/profile-13.jpg">
        </div>
        <div class="info">
          <h3> ${doc.data().userName} </h3>
          <small> ${doc.data().date} </small>
        </div>
      </div>
      <span class="edit">
        <i class="fa-solid fa-ellipsis fa-2x"></i>
      </span>
    </div>
    <div class="photo">
      <img src="/img/feed-1.jpg">
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

    <div class="caption">
      <p><b>${doc.data().userName}</b>${doc.data().text}.
    
  `;
  });
};

export { createPost, printPost };
