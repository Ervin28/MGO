import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import {getFirestore,collection,getDocs} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCTBjdApQrc1cIZIJ4ALeMrMfLCv6shlXQ",
    authDomain: "mgoo-faa26.firebaseapp.com",
    databaseURL: "https://mgoo-faa26-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mgoo-faa26",
    storageBucket: "mgoo-faa26.appspot.com",
    messagingSenderId: "1058292079708",
    appId: "1:1058292079708:web:03eebeb75407ad3908da99",
    measurementId: "G-PVK93JLRTT"
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db,'users');
getDocs(colRef).then((snapshot)=>{
   let users = [];
   snapshot.docs.forEach((doc) =>{

       users.push(doc.data().name);
       console.log(users);
   })
})





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />


  </React.StrictMode>,

);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
