let num=12;

let n1=String(num).slice(0,1);
let n2=String(num).slice(1,2);
let n3=String(num).slice(2,3);

function fact(n){
    let fNum=1
    for(let i=1;i<=n;i++){
        fNum*=i;
    }
    return fNum;
}
var result=fact(n1)+ fact(n2)+fact(n3);
if(num==result){
    console.log(`${num} is a special number`);
}else{
    console.log(`${num} is not a special number`);
}
