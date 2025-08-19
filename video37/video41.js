console.log ("video 41")
const ages = [42,25,6,1,10,6]
const agesx2= ages.map ((value,index)=>{
    return value*2;
}
)
const agesGreatThan18= ages.filter ((value,index)=>{
    return value>18;
}
)
const agesGreatThan181 = ages.filter((value,index)=>value>18)
console.log ("orginal", ages)
console.log ("agesx2",agesx2)
console.log (agesGreatThan181)