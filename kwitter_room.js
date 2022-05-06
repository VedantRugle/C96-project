
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyC_r9lbpD20J-UqSbPac33dFMuyZSTcgec",
  authDomain: "kwitter-5d98f.firebaseapp.com",
  databaseURL: "https://kwitter-5d98f-default-rtdb.firebaseio.com",
  projectId: "kwitter-5d98f",
  storageBucket: "kwitter-5d98f.appspot.com",
  messagingSenderId: "1062054948745",
  appId: "1:1062054948745:web:11e36aac8edcd632a57b58",
  measurementId: "G-E09SRNBN21"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room name - " +Room_names);   
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerhtml +=row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

             localStorage.setItem("room_name" , room_name);

             window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}


