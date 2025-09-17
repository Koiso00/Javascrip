console.log ("video 63")

//fetch => raw data (Response) => object 
const temp = fetch("http://localhost:8000/users")
temp
    .then(res => res.json ()) // json dung de chuyen kieu du lieu response sang dang object 
    .then(data => console.log(data))