console.log("video 32")

const sum = (a, b, c) => {
  if (typeof a !== "number"){
    console.log ("run before")
    return ;
  }
  console.log ("run after")
  return a + b + c;
}
console.log(sum('no', 3, 5))