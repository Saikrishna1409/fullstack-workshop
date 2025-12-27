function findPrimes(limit){
    
    let arr=[]

 for(let i=1;i<=limit;i++){
    let count=0;
    for(let j=1;j<i;j++){
     if(i%j==0) count++;

    }
    if(count==1) arr.push(i);
 }
 return arr;
}

console.log(findPrimes(30));