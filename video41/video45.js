console.log("lap 03")
const sp1 = {
    name: "T-shirt",
    price: 200,
    inStock: true
}
const sp2 = {
    name: "jeans",
    price: 100,
    inStock: true
}
const sp3 = {
    name: "vests",
    price: 500,
    inStock: true
}
const sp4 = {
    name: "pants",
    price: 400,
    inStock: true
}
const sp5 = {
    name: "shorts",
    price: 250,
    inStock: false 
}

const clothes = [sp1, sp2, sp3, sp4, sp5]
console.log ("original :" , clothes)
console.log ("cau1") 
console.log(clothes[0].name)
//cau2
console.log ("cau2") 
const clothes2 = [sp1, {
    name :sp2.name,
    price: 150,
    inStock:true
}, sp3, sp4, sp5]
console.log(clothes2)
//cau3
console.log ("cau 3")
clothes.push({
    name : "last product",
    price : 300,
    inStock :false
})
console.log (clothes)
//cau4
console.log ("cau4") 
clothes.pop();
console.log(clothes)
// cau5    
console.log ("cau5") 
clothes.forEach((value, index) => {
    console.log(index, value.name)
})
console.log ("cau6")
const arrayprice = clothes.map((value, index) => {
    return value.price;
})
console.log (arrayprice)
console.log ("cua7")
const newclothes = clothes.filter((value, index) =>  value.inStock == true
)
console.log(newclothes)
console.log ("cau8")
for (let key in sp1) {
    console.log(key, sp1[key])
}