firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      alert('d')
      // ...
    } else {
      // User is signed out.
      alert('error2')
      // ...
    }
    // ...
  });

function login(){
    var userid = document.getElementById('adminLoginUserid').value
    var userpass = document.getElementById('adminLoginPass').value
    if(!userid === null && userpass === null)
    firebase.auth().signInWithEmailAndPassword(userid, userpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...

    alert('Error---' + errorMessage)
    })

}