import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
  apiKey: "AIzaSyBI-4cqwnELcITky-Zg7f2x2OwNwZ1238I",
  authDomain: "hotdog-or-not-8019e.firebaseapp.com",
  databaseURL: "https://hotdog-or-not-8019e.firebaseio.com",
  projectId: "hotdog-or-not-8019e",
  storageBucket: "hotdog-or-not-8019e.appspot.com",
  messagingSenderId: "427079389430"
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
