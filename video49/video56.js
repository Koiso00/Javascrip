console.log ("lab 04")
const username= "hoidanit@gmail.com"
const pass = "123456"
const emailElement = document.getElementById("email")
const passElement  = document.getElementById("pass")
const Element = document.getElementById("btn")
Element.addEventListener("click",()=>{
if (emailElement.value==username && passElement.value==pass){
    alert("Dang nhap thanh cong")
    window.location.href ="success.html"
}else{
    alert("Dang nhao that bai")
    emailElement.style.borderColor="red"
    passElement.style.borderColor="red"
}})