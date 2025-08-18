// function tinhtb (a,b,c){
//     return (a+b+c)/3 ;
// }
// function xeploai (a,b,c){
//     let s=tinhtb(a,b,c);
//     let loai;
//     if (s>=9){
//         loai='xuat sac';
//     }else if (s>=8 && s<9){
//         loai = 'gioi';
//     }else if (s>=6.5 && s<8){
//         loai = 'kha';
//     }else {
//         loai= 'trung binh';
//     }
//     return loai;
// }
// let a=9,b=8,c=7;

// console.log (`Diem trung binh: ${tinhtb(a,b,c)}`)
// console.log (`Xep loai: ${xeploai(a,b,c)}`)

const  diemtb = (a,b,c) => {
    return (a+b+c)/3;
}
const xeploai = (a,b,c)=>{
    let s=diemtb(a,b,c);
    let loai;
    if (s>9){
        loai='xuat xac';
    }else if (s<9 && s>=8){
        loai ='gioi';
    }else if (s<8 && s>=6.5){
        loai= 'kha';
    }else {
        loai= 'trung binh';
    }
    return loai ;
}
let a=9,b=8,c=7;
console.log (`Diem trung binh: ${diemtb(a,b,c)}`)
console.log (`Xep loai: ${xeploai(a,b,c)}`)