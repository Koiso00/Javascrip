console.log ("video 62")

console.log ("1.Yeu to quoc, yeu dong bao")
const myPromise = new Promise((resolve,reject)=>{
console.log ("2.Hoc tap tot, lao dong tot")
setTimeout(() => {
    console.log ("4.Giu gin ve sinh that tot")
    console.log ("5.Khiem ton, that tha, dung cam")
    resolve ("hoan thanh")
}, 2000);
})
myPromise.then (msg=>console.log (msg))
console.log ("3.Doan ket tot, ky luat tot")
