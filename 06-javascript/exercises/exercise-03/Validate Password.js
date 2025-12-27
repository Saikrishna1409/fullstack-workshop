function validatePassword(password) {
    let validating={isValid: true,errors:[]}

    if(password.length<8) {
        validating.isValid=false;
        validating.errors.push('Too short')
    }
     let count=0;
    for(let c of password){
        if(c>='A' && c<='Z'){
            count++;
        }
    }
    if(count==0){
         validating.isValid=false;
        validating.errors.push('Missing Uppercase')
    }
    count=0;
    for(let c of password){
        if(c>='a' && c<='z'){
            count++;
        }
    }
    if(count==0){
         validating.isValid=false;
        validating.errors.push('Missing lowercase')
    }

    const specials = "!@#$%^&*";
    count=0;

    for (let char of password) {
        if (specials.includes(char)) {
          count++;
        }
    }
return validating;
}
console.log(validatePassword('Abc123!@'));
console.log(validatePassword('abc'));