import { db, auth } from "./init.js";
import {
  collection,
  addDoc,
  onSnapshot,
  /* getDocs, */
  Timestamp,
  deleteDoc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

console.log({ auth: auth.currentUser });
export const user = auth.currentUser;

window.addEventListener("DOMContentLoaded", async () => {
  onGetSnapShot((querySnapshot) => {
    let html = "";
    const containerFeed = document.querySelector(".feeds");
    querySnapshot.forEach((doc) => {
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
         <small> ${new Date(doc.data().date / 1000)} </small>
         </div>
        </div>
       <span class="edit">
        <i class="fa-solid fa-ellipsis fa-2x"></i>
        </span>
      </div>
      <p>${post.description} <p/>
     <div class="action-buttons">
      <div class="interaction-buttons">
        <span><i class="fa-regular fa-heart"></i></span>
        <span><i class="fa-regular fa-comment"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
      </div>
     </div>
      
      </div>
     </div>
  
      `;
      containerFeed.innerHTML = html;
    });
  });
});

// Enviar a firebase
export const savePost = (description) => {
  addDoc(collection(db, "Posts"), {
    description,
    date: Timestamp.fromDate(new Date()),
    likes: [],
    likesC: 0,
    userName:
      auth.currentUser.displayName != null
        ? auth.currentUser.displayName
        : auth.currentUser.email,
  });
};

export const onGetSnapShot = (callback) =>
  onSnapshot(collection(db, "Posts"), callback);
const q = query(collection(db, "Posts"), orderBy("date", "desc"));

const deletePost = (id) => deleteDoc(doc(db, "Posts", id));
const deletePostFeed = containerFeed.querySelector(".fa-ellipsis");
deletePostFeed.addEventListener("click", ({ target: { dataset } }) => {
  deletePost(dataset.id);
  // console.log(deletePost)
  // console.log(dataset.id)
});

// export const deletePost = (id) => {
//   deleteDoc(doc(db, "Posts", id))
//     .then(() => {
//       alert("Post eliminado");
//     })
//     .catch(() => {
//       alert("Error al eliminar el post");
//     });
// };

// async function likes(id, user) {
//   const postlike = doc(db, 'Post', id);
//   const dataDocs = await getDoc(postlike);
//   const allData = dataDocs.data();
//   if (allData.likes.includes(user)) {
//     await updateDoc(postlike, {
//       likes: arrayRemove(user),
//       likesC: increment(-1),
//     });
//   } else {
//     await updateDoc(postlike, {
//       likes: arrayUnion(user),
//       likesC: increment(1),
//     });
//   }
// }
/* 
////LIKES///////////
document.querySelectorAll('.fa-regular fa-heart').forEach((element) => element.addEventListener('click', (e) => {
  const like = e.target.dataset.idlikes;
  const selectedPost = e.target;
  console.log(like);
  selectedPost.classList.remove("fa-regular fa-heart");
  selectedPost.classList.add("fa-solid fa-heart")
  likes(like, auth.currentUser.uid);
}; */
