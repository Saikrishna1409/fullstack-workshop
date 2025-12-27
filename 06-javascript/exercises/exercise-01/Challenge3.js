let score = 0;

let answer1 = prompt('What is 5 + 3?');
if (answer1 == '8') {
    score++;
};
let answer2 = prompt('What is the capital of France?');
if (answer2.toLowerCase() == 'paris') {
    score++;
}
let answer3 = prompt('What color is the sky?');
if (answer3.toLowerCase() == 'blue') {
    score++;
}
console.log(`Your final score is ${score} out of 3`);
alert(`Your final score is ${score} out of 3`);
