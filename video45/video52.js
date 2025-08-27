console.log ("video 52")
const element = document.getElementById("click")
const mytext = document.getElementById("myText")
const backbt = document.getElementById ("back")
element.addEventListener("click",()=>{
    console.log ("you clicked on my click")
    mytext.innerText = "Just the content with Ben"
})
backbt.addEventListener ("click",function(){
    mytext.innerText= "video 52"
})