const firebaseConfig = {
    apiKey: "AIzaSyCYNxgZGgrBNfXAXdsFFx_o9CSgNj71Zxs",
    authDomain: "it-startup-blog.firebaseapp.com",
    projectId: "it-startup-blog",
    storageBucket: "it-startup-blog.appspot.com",
    messagingSenderId: "824703505084",
    appId: "1:824703505084:web:e2eba50a1999832bfa36b9"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();

  const logoutUser = () => {
    auth.signOut();
    location.reload();
  }