console.log ("video 64")
const a = 10 , b=0 ;

const doSomething = ()=>{
    if (b==0){
    throw new Error("thuc hien chia ra khong ")
}
      return a/b;
}

try {
    doSomething();
} catch (error) {
    alert("co loi xay ra ",error)
} finally {
    console.log ("run final")
}