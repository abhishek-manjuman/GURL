
function adminlogin(){
  var database= firebase.database()
  var adminLoginRef = database.ref('/adminlogin')

  var useremail = document.getElementById('adminLoginUserid').value
  var userpass = document.getElementById('adminLoginPass').value


  if(useremail==="" || userpass===""){
    alert('Enter enail and password both!')
  }else{
  adminLoginRef.on('value', getData, getErr)
  
  function getData(data){
    var users = data.val()
    var keys = Object.keys(users)
    console.log(keys)
    var p= 0
    for( var i=0; i<keys.length; i++){
      var k = keys[i]
      var email = users[k].adminemail
      var pass = users[k].adminpass
      if(email == useremail && pass == userpass){
        useremail.value = ""
        userpass.value = ""
        p++
        window.open('./admindashboard', '_self')
        break
      }
      
    }
        if(p<=0){
          alert('Enter correct email and password')
        }
  }
  
  function getErr(err){
    console.log('Error! : '+ err)
  }
}
}


/*
(function(){
  
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
      window.open('./admindashboard')
    }else{
      console.log('not logged in')
    }
  })

}())*/