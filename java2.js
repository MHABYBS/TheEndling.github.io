

var firebaseConfig = {
  apiKey: "AIzaSyDNnAEyXVst84kJmGnETvz9lUsWruGZWUc",
  authDomain: "rebirth-14c0a.firebaseapp.com",
  databaseURL: "https://rebirth-14c0a.firebaseio.com",
  projectId: "rebirth-14c0a",
  storageBucket: "",
  messagingSenderId: "514730112744",
  appId: "1:514730112744:web:22ca4e1c42285d5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




$("#pl3").click(function(e){
e.preventDefault()
  var email=$("#pl1").val()
var password=$("#pl2").val()
console.log(email)
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
    console.log("works")
    $(".modal").hide()
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
})
//Sign In User with Email and Password
function showIt() {  
  document.getElementById("ex2").style.visibility = "visible";  
  
}  
;

var vid = document.getElementById("aud");

vid.volume = 0.01;
