import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA4UAF66w4R-u8IuZl5zz4Gk_ggzu4J10Y",
    authDomain: "order-system-789c0.firebaseapp.com",
    projectId: "order-system-789c0",
    storageBucket: "order-system-789c0.appspot.com",
    messagingSenderId: "301603135451",
    appId: "1:301603135451:web:2a9f783d1c2d6036b611fe"
  };

  export default class Firebase {
      constructor(){
          app.initializeApp(firebaseConfig);
      }
  }