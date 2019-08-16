import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyDfWbvx_Wicr5_VZwsJZIEMh3YcIccErRM",
  authDomain: "v-fire-ed651.firebaseapp.com",
  databaseURL: "https://v-fire-ed651.firebaseio.com",
  projectId: "v-fire-ed651",
  storageBucket: "",
  messagingSenderId: "505473686346",
  appId: "1:505473686346:web:54f1039b53d0768c"
});

export const db = app.firestore();
export const todosCollection = db.collection('todos');
