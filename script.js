const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const passwordLength=12;
const btnEl=document.querySelector(".generate");
const CopyEl=document.querySelector(".fa-copy");
const alterContainerEl=document.querySelector(".alert-container");
const copyIconEl=document.querySelector(".fa-copy");
btnEl.addEventListener("click",()=>{
    generatePassword();
});
CopyEl.addEventListener("click",()=>{
   copyPassword();
});
copyIconEl.addEventListener("click",()=>{
    copyPassword();
    alterContainerEl.innerHTML="Copied to clipboard";
    alterContainerEl.classList.add("active");
    setTimeout(()=>{
        alterContainerEl.classList.remove("active");
    },2000);

})

function generatePassword(){
    let password="";
    for(let i=0;i<passwordLength;i++){
        const randomNumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("input").value=password;
}

    
function copyPassword(){
    const inputEl=document.getElementById("input");
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
}