console.log ("video 40")
const scores = [10,8,3,7,5]

// scores.forEach((value,index)=>{
//     console.log ("index",index,"value", value)
// })

const scorex2=scores.map((value,index)=>{
    console.log ("index",index,"value",value)
    return value * 2 ;
})
const scorexx2=scores.map ((value,index)=> value*2)
// console.log ("scoresx2 = ",scorex2)
console.log ("scorexx2",scorexx2)