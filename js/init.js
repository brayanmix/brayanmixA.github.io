/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore
  var firebaseConfig = {
    apiKey: "AIzaSyCPSDM5eYDNZJgXOESLhT4xWHCJJTdFuXU",
    authDomain: "autentificamix.firebaseapp.com",
    projectId: "autentificamix",
    storageBucket: "autentificamix.appspot.com",
    messagingSenderId: "164779494768",
    appId: "1:164779494768:web:a20abf55dc21c08e7b53b5",
    measurementId: "G-E9BVY37MZS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
