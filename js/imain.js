var userEmail=document.getElementById('userEmail');
var userPassword=document.getElementById('userPassword');
var loginBtn=document.getElementById('log'); 
var userer=document.getElementById('usererror')
var mainn=document.getElementById('mainlink')
var userscontainer;
if(localStorage.getItem('userscontainer')!= null){
    userscontainer=JSON.parse(localStorage.getItem('userscontainer'));
    
   
}
else{
  console.log('hi');
}
function check(){
     for(var i=0; i<userscontainer.length;i++){
         
     if(userscontainer[i].Email.toLowerCase()== userEmail.value.toLowerCase() && userscontainer[i].Password== userPassword.value)
     {
           
        sessionStorage.setItem('username',`${userscontainer[i].Name}`)
          return true

           
            }
           
            
        }

    
}

    loginBtn.addEventListener('click',function(e){
        if(check()==true){

        
             window.open("home.html")
        }
        else{
            alert('invalid user name or password')
       
        }
    })
  