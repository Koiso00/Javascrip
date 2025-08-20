console.log ("video 44")
const sv1 ={
    username:"hoidanit",
    score:9.3
}
const sv2 ={
    username:"eric",
    score:3
}
const sv3 ={
    username:"bla bla",
    score:5
}
const sinhvien =[sv1,sv2,sv3]

for (let key=0;key<sinhvien.length;key++){
    console.log (key , sinhvien[key])}

// console.log (sinhvien)
// sinhvien.forEach ((value,index)=>{
//     console.log("index = ",index, "name =",value.username)
// })

const person ={
    email: "hoidanit@gmail.com",
    age :25,
    address :"vietnam"
}

//lay gia tri cung voi key cua no 
// for (let key in person){
//     console.log (key,person[key]);
// }

//lay gia tri va khong lay key 
for (let value of Object.values(person)){
    console.log (value)
}

for (let value of Object.entries(person)){
    console.log (value)
}

for  (let [key,value]of Object.entries(person)){
    console.log (key,value)
}
