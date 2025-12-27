
function printPyramid(n){
for(let i=1;i<=n;i++){
  let ch=""
  for(let j=1;j<=n-i;j++) ch+=" "
  for(let j=1;j<=i;j++) ch+=(j);
  for(let j=i-1;j>0;j--) ch+=j
  console.log(ch);
}
}

printPyramid(5);