let num=370;
let n1=String(num).slice(0,1);
let n2=String(num).slice(1,2);
let n3=String(num).slice(2,3);
function armNum(){
    var result=(n1*n1*n1)+(n2*n2*n2)+(n3*n3*n3)
    return result;
}
if(num==armNum()){
    console.log(`${num} is Armstrong number`);
}else{
    console.log("It is not armstrong number");
}

