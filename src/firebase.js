import { initializeApp } from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtUUGYrvTNCp8nE9B2Y0Nf1O1HGrT4f0Q",
  authDomain: "react-redux-239ef.firebaseapp.com",
  projectId: "react-redux-239ef",
  storageBucket: "react-redux-239ef.appspot.com",
  messagingSenderId: "721845183005",
  appId: "1:721845183005:web:9658a3e5b5e852fadb9cf4",
  databaseURL:"https://react-redux-239ef-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export default app