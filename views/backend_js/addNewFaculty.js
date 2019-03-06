function gotoPage(){
    window.open('./addFaculty', '_self')
}

function addFaculty(){
    var database= firebase.database()
    var newAdminRef = database.ref('/faculty')

    var title = document.getElementById('title').value.trim()
    var fname = document.getElementById('fname').value
    var mname = document.getElementById('mname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var phnumber = document.getElementById('phnumber').value
    var gender = document.getElementById('gender').value
    var highestQualifucation = document.getElementById('hq').value
    var highestQualifucationArea = document.getElementById('hqa').value
    var industryExprience = document.getElementById('iwe').value
    var teachingExprience = document.getElementById('te').value
    var about = document.getElementById('about').value
    var department = document.getElementById('department').value
    var designation = document.getElementById('designation').value
    var block = document.getElementById('block').value
    var cabinNumber= document.getElementById('cabin').value

    var fulname = title+" "+fname+" "+mname+" "+lname

    var currentdate = new Date(); 
    
    var date=  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();  
    
    var time =currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();

              var id = generateUUID()
 //             console.log(id)
    
              if(fname ==="" || lname ==="" || phnumber === "" || gender === "" || department ==="" || block ==="" || cabinNumber ===""){
                alert('Fill all the importent fileds!!!!')
            }else{
            return newAdminRef.push({
                id : id,
                title : title,
                firstName : fname,
                middelName : mname,
                lastName : lname,
                fulname : fulname,
                email : email,
                phnumber: phnumber,
                gender : gender,
                highestQualifucation : highestQualifucation,
                highestQualifucationArea : highestQualifucationArea,
                industryExprience : industryExprience,
                teachingExprience : teachingExprience,
                about : about,
                department: department,
                designation : designation,
                block: block,
                cabinNumber : cabinNumber,
                date : date,
                time : time
            })
                .then(function(){
                    window.location.reload()
                    alert('New Faculty Added !!!')
                })
                .catch(function(err){
                    console.log('Error : '+err)
                })
        }


        function generateUUID() { // Public Domain/MIT
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }

    console.log(title)
    console.log(fname)
    console.log(mname)
    console.log(lname)
    console.log(email)
    console.log(phnumber)
    console.log(gender)
    console.log(highestQualifucation)
    console.log(highestQualifucationArea)
    console.log(industryExprience)
    console.log(teachingExprience)
    console.log(about)
    console.log(department)
    console.log(designation)
    console.log(block)
    console.log(cabinNumber)

    
}

