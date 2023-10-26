// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBCOPHEjh7ZL8h7_V2UpnhNCzuDFHjOoOs",
    authDomain: "letschat-b38e5.firebaseapp.com",
    databaseURL: "https://letschat-b38e5-default-rtdb.firebaseio.com",
    projectId: "letschat-b38e5",
    storageBucket: "letschat-b38e5.appspot.com",
    messagingSenderId: "342145962115",
    appId: "1:342145962115:web:d7dc4515a2196e3cad8bb6"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



