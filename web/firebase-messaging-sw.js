importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCIxAUet2KTScwlZlQZ95vL94oAk1tNg0o",
  authDomain: "customer-ftp.firebaseapp.com",
  projectId: "customer-ftp",
  storageBucket: "customer-ftp.appspot.com",
  messagingSenderId: "978132866325",
  appId: "1:978132866325:web:b90ee3c2e3f6f2c103451c",
  measurementId: "G-9NLJ81SWR2"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});