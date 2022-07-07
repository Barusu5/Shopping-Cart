
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

 import {getFirestore , collection, getDocs, doc, getDoc  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

 const firebaseConfig = {
   apiKey: "AIzaSyCg36Xp6NqdIVkP_nO5gwIfMFnwyRGeADY",
   authDomain: "carrito-38167.firebaseapp.com",
   projectId: "carrito-38167",
   storageBucket: "carrito-38167.appspot.com",
   messagingSenderId: "16876438472",
   appId: "1:16876438472:web:04d9c20f432922ef2936fd"
 };
 
 const app = initializeApp(firebaseConfig);
 
 const db = getFirestore(app);

 export const getProducts = async () => {

  const querySnapshot = await getDocs(collection(db, "products"));

  const products = []

querySnapshot.forEach((doc) => {
  products.push(doc);
});

return products

 }

 export const getProduct = async (id) => {

 const docRef = doc(db, "products", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
 
}