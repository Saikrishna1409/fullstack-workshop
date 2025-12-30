const prompts = [
    { key: 'Name', question: 'Enter a name:' },
    { key: 'adjective', question: 'Enter an adjective:' },
    { key: 'noun', question: 'Enter a noun:' },
    { key: 'verb', question: 'Enter a verb:' },
    { key: 'place', question: 'Enter a place:' }
];

const inputs = prompts.map(({ key, question }) => ({
    [key]: prompt(question)
}));

const story = `One day ${inputs[0].Name} found a ${inputs[1].adjective} ${inputs[2].noun} that could ${inputs[3].verb} in the ${inputs[4].place}`;

console.log(story);
