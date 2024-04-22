import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBe_WX_IFo9tHYWVoqsLEdAOAA65vFfJh8",
  authDomain: "viewlogin-e995b.firebaseapp.com",
  projectId: "viewlogin-e995b",
  storageBucket: "viewlogin-e995b.appspot.com",
  messagingSenderId: "168497097564",
  appId: "1:168497097564:web:d8f92c7afafbf1f6256f99"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)