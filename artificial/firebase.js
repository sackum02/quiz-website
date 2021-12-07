  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBndfAivUKiJ8pU1FoYvuGNunisj_LsW3U",
    authDomain: "codequizz-a64cf.firebaseapp.com",
    projectId: "codequizz-a64cf",
    storageBucket: "codequizz-a64cf.appspot.com",
    messagingSenderId: "292383600593",
    appId: "1:292383600593:web:c231f0844a134394cc3af0",
    measurementId: "G-BJ3FSZNMWE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);