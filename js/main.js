
var newName=document.getElementById('newUserName');
var newEmail=document.getElementById('newUserEmail');
var newPassword=document.getElementById('newUserPassword');
var signUpBtn=document.getElementById('signUp');


 var alertName=document.getElementById('alertName')
 var alertPass=document.getElementById('alertPass')
 var alertEmail=document.getElementById('alertEmail')


 var userscontainer;
 if(localStorage.getItem('userscontainer')!= null){
    userscontainer=JSON.parse(localStorage.getItem('userscontainer'));
     display();
     
 }
 else{
     userscontainer=[];
 }
 

 ///addnew user
function signup(){
    var newUser={
        Name:newName.value,
        Password:newPassword.value,
        Email:newEmail.value
    }
    if(!searchMail()){
        signUpBtn.removeAttribute("disabled");
        userscontainer.push(newUser);
        localStorage.setItem('userscontainer',JSON.stringify(userscontainer))
        clear();
        alert('sucessfully you ahve  an account')
        display();
      
    }
    else{
        alert("try another Email")
        signUpBtn.disabled="true";
    }
   
}
//add onclick sign up
signUpBtn.addEventListener('click',function(){
    signup()
})
//clarform
function clear(){
    newName.value=''
    newPassword.value=''
    newEmail.value=''
    newName.classList.remove('is-valid')
    newName.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    newPassword.classList.remove('is-valid')
    newPassword.classList.remove("is-invalid");
    alertPass.classList.add("d-none");
    newEmail.classList.remove('is-valid')
    newEmail.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
    
}
//dispalyusers
function display(){
    var cartona=``;
    for (var i=0; i<userscontainer.length;i++){
        cartona+=`  <tr>
        <td>${i}</td>
        <td>${userscontainer[i].Name}</td>
        <td>${userscontainer[i].Password}</td>
        <td>${userscontainer[i].Email}</td>
       
       </tr>`;
    }
    document.getElementById('tablebody').innerHTML=cartona;
}
//search mail
function searchMail(){
    for(var i=0; i<userscontainer.length;i++){
        if(userscontainer[i].Email.toLowerCase()== newEmail.value.toLowerCase())
       {
        return true;
       }
      
    }
    
}
//check name and pass

function check(){
    
    for(var i=0; i<userscontainer.length;i++){
        if(userscontainer[i].Email.toLowerCase()== userEmail.value.toLowerCase() && userscontainer[i].Password== userPassword.value){
           console.log('match')
        }
        
    }
}















// //validatename
newName.addEventListener('blur',function(){
    var regex=/^[A-Z][a-z]{2,6}$/
    if(regex.test(newName.value)==true)
    { 
         signUpBtn.removeAttribute("disabled");
        newName.classList.add("is-valid");
        newName.classList.remove("is-invalid");
         alertName.classList.add("d-none");
       return true;
    }
    else{
        signUpBtn.disabled="true";
        newName.classList.add("is-invalid");
        newName.classList.remove("is-valid");
        alertName.classList.remove("d-none");
        alertName.innerHTML="name must start with capital character and 2-6 characters"
        return false;
    }
})
// //////////// validate mail
newEmail.addEventListener('blur',function(){
    var regex=/^\w+@[a-zA-Z]+.com$/
    if(regex.test(newEmail.value)==true)
    { 
         signUpBtn.removeAttribute("disabled");
         newEmail.classList.add("is-valid");
         newEmail.classList.remove("is-invalid");
       
       return true;
    }
    else{
        signUpBtn.disabled="true";
        newEmail.classList.add("is-invalid");
        newEmail.classList.remove("is-valid");
       
        return false;
    }
})
//validate password
newPassword.addEventListener('blur',function(){
    var regex=/^.{8}$/
    if(regex.test(newPassword.value)==true)
    { 
         signUpBtn.removeAttribute("disabled");
         newPassword.classList.add("is-valid");
         newPassword.classList.remove("is-invalid");
         alertPass.classList.add("d-none");
       return true;
    }
    else{
        signUpBtn.disabled="true";
        newPassword.classList.add("is-invalid");
        newPassword.classList.remove("is-valid");
        alertPass.classList.remove("d-none");
        alertPass.innerHTML="password must contain at least 8 character"
        return false;
    }
})
