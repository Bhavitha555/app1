let us = document.getElementById('user').value;
let ps = document.getElementById('pass').value;
 let b=document.getElementById('but');
    
function sub(event){
    event.preventdefault();
    
    localStorage.setItem('user',us);
    localStorage.setItem('pass',ps);
    document.body.style.backgroundColor="green";
}  
b.addEventListener('submit',sub);