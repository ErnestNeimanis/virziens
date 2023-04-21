import {initializeApp} from 'firebase/app'
import { getFirestore,collection } from "@firebase/firestore";
import {ref, onMounted, onUnmounted} from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyAlDDr95y85Ml95mgJdvZQJxSXAF9qK9jc",
  authDomain: "virziens-7b00d.firebaseapp.com",
  projectId: "virziens-7b00d",
  storageBucket: "virziens-7b00d.appspot.com",
  messagingSenderId: "437584606725",
  appId: "1:437584606725:web:59f25c15467cc8d7b34e6c",
  measurementId: "G-61M2JST8QV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const usersCollection = collection(db,'users');





// export const createUser = user => {

//     return usersCollection.add(user);
// }

// export const getUser = async id => {
//     const user = await usersCollection.add(user)
//     return user.exists ? user.data() : null
// }
// export const updateUser = user => {
//     return usersCollection.doc(id).update(user);
// }
// export const deleteUser = user => {
//      return usersCollection.doc(id).delete();
// }
// export const useLoadUsers = () => {
//     const users = ref([]);
//     usersCollection.onSnapshot(snapshot => {
//         users.value = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
//     })
//     onUnmounted(close)
//     return users
// }

