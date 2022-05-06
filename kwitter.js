function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html"; 
}
const firebaseConfig = {
    apiKey: "AIzaSyC_r9lbpD20J-UqSbPac33dFMuyZSTcgec",
    authDomain: "kwitter-5d98f.firebaseapp.com",
    projectId: "kwitter-5d98f",
    storageBucket: "kwitter-5d98f.appspot.com",
    messagingSenderId: "1062054948745",
    appId: "1:1062054948745:web:11e36aac8edcd632a57b58",
    measurementId: "G-E09SRNBN21"
  };
 firebase.initializeApp(firebaseConfig);
