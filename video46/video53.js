console.log ("video 53")
const element=document.getElementById("myBtn")
const backElement = document.getElementById("backBtn")
const textElement = document.getElementById("myText")
console.log (element,backElement,textElement)
element.addEventListener("click",()=>{
    console.log ("click me")
    textElement.style.color = "red"
    textElement.style.backgroundColor="blue"
   textElement.classList.add ("hoidanit")
})
backElement.addEventListener("click",()=>{
    textElement.style.color="black"
    textElement.style.backgroundColor="unset"
    textElement.classList.remove ("hoidanit")
})