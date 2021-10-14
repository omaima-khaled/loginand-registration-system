
let welcome=document.querySelector('.home h2')
let userscontainer=[];
if(localStorage.getItem('userscontainer')!= null){
    userscontainer=JSON.parse(localStorage.getItem('userscontainer'));
    
   
}

welcome.innerHTML=`hi,`+""+sessionStorage.getItem('username')