console.log ("video 66")

//promise 
fetch ("http://localhost:8000/users")
  .then(res => res.json())
  .then(value => console.log("fetch with promise ",value))

//async await 
const fetchdata = async() => {
    const res = await fetch ("http://localhost:8000/users")
    const data = await res.json()
    console.log (data)
}
fetchdata ()