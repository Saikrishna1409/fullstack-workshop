const questions = [
    { question: 'What is 5 + 3?', expected: '8' },
    { question: 'What is the capital of France?', expected: 'paris' },
    { question: 'What color is the sky?', expected: 'blue' }
];

const checkAnswer = (answer, expected) => 
    answer.toLowerCase().trim() === expected.toLowerCase().trim();

let score = questions
    .map(q => prompt(q.question))
    .filter((answer, i) => checkAnswer(answer, questions[i].expected))
    .length;

console.log(`Your final score is ${score} out of 3`);
alert(`Your final score is ${score} out of 3`);
