console.log ("video 55")
const element = document.getElementById("submitBtn")
const input = document.getElementById("name")
const prev =  document.getElementById("latename")
const prevName = localStorage.getItem("hoidanit")
if (prevName){
    prev.innerHTML= `<b>${prevName}</b>`
}
element.addEventListener("click",()=>{
    console.log (input.value)

    localStorage.setItem("hoidanit",input.value)
    
    document.getElementById("message").innerHTML =`<b>${input.value}</b>`
    
})