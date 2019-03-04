(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxj3ui9J8yNR8ggBlcFZyb9hojORs8_wY",
    authDomain: "gurl-3a50b.firebaseapp.com",
    databaseURL: "https://gurl-3a50b.firebaseio.com",
    projectId: "gurl-3a50b",
    storageBucket: "gurl-3a50b.appspot.com",
    messagingSenderId: "1077432197158"
  };
  firebase.initializeApp(config);

  
  var userid = document.getElementById('adminLoginUserid')
  var userpass = document.getElementById('adminLoginPass')
  var loginBtn = document.getElementById('adminLoginBtn')

  loginBtn.addEventListener('click', e=>{

    const email= userid.value
    const pass = userpass.value

    const auth = firebase.auth()

    const promise = auth.signInWithEmailAndPassword(email, pass)

    promise.catch(e=>console.log(e.message))

  })

  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      
    }else{
      console.log('not logged in')
    }
  })

}())