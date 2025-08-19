console.log ("video 34")
const person = {
    name : "hoidanit" ,
    age : 25
}
console.log ("person before ")
console.log ("person",person["name"])
console.log ("person",person.name)
console.log ("person after")
person.address = "hanoi"
person["language"]="vietnamese"
console.log (person)
delete person.address 
console.log (person)