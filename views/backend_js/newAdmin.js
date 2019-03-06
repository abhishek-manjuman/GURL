function addAdmin(){
    var database= firebase.database()
    var newAdminRef = database.ref('/adminlogin')

    var name = document.getElementById('adminName')
    var email = document.getElementById('adminEmail')
    var phnumber = document.getElementById('adminPhnumber')
    var pass = document.getElementById('adminPass')


    var adminname = name.value
    var adminemail = email.value
    var adminphnumber = phnumber.value
    var adminpass = pass.value
    
    
    adminname.value = ''
    adminemail.value = ''
    adminphnumber.value = ''
    adminpass.value = ''
    
    
    var currentdate = new Date(); 
    
    var date=  currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear();  
    
    var time =       currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    //console.log(datetime)
    
    if(adminname ==="" || adminemail ==="" || adminphnumber === "" || adminpass === ""){
        alert('Fill all the fileds!!!!')
    }else{

    return newAdminRef.push({
        adminname : adminname,
        adminemail : adminemail,
        adminphnumber: adminphnumber,
        adminpass : adminpass,
        date : date,
        time : time
    })
        .then(function(){
            window.location.reload()
            alert('new Admin Added')
        })
        .catch(function(err){
            console.log('Error : '+err)
        })
}
}