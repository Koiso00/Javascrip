console.log ("video 39")
const name =["hung","dung","nam","cuong","kiet"]
name.forEach((value,index)=> {
    console.log ("index",index,"value",value)
});
console.log ("===========")
name.forEach(function (value,index){
    console.log ("index",index,"value",value)
})
console.log ("===========")

for (let i=0;i<name.length;i++){
    console.log (`index ${i} value ${name[i]}`)
}