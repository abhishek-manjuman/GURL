function gotoPageAddNewProgram(){
    window.open('./addProgram', '_blank')
}
//{}


function addProgram(){
    var database= firebase.database()
    var newProgramRef = database.ref('/programs')

    var program_name = document.getElementById("program_name").value.trim()
    var program_code = document.getElementById("program_code").value.trim()
    var description = document.getElementById("about").value.trim()

    var currentdate = new Date(); 
    
    var date=  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();  
    
    var time =currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();

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
    var id = generateUUID();

    if(program_name ==="" || program_code === "" || description ===""){
        alert("Fill all Importent fields!")
    }else{
        return newProgramRef.push({
            id : id,
            program_name : program_name,
            program_code : program_code,
            program_description : description,
            time : time,
            date : date
        })
        .then(function(){
            window.location.reload()
            alert('New Program Added !!!')
        })
        .catch(function(err){
            console.log('Error : '+err)
        })
    }

}