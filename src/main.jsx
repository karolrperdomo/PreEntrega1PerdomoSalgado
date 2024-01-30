import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAc7WUUpbwCC5r0yDDOOf6maNjCC_X-G8U",
  authDomain: "final-comision-49905.firebaseapp.com",
  projectId: "final-comision-49905",
  storageBucket: "final-comision-49905.appspot.com",
  messagingSenderId: "199707259849",
  appId: "1:199707259849:web:d7991341f42deb3edf2e18",
  measurementId: "G-KCLERNV2VV"
};

// Initialize Firebase
initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
