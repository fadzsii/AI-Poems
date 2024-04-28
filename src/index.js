function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}


function generatePoem(event) {
    event.preventDefault();

let instructionsInput = document.querySelector ("#user-instructions")
let apiKey= "t96f30bf9o344d8a3abbe051f05d41a5" ;
let prompt= 'User instructions: Generate a poem about ${instructionsInput.value}';
let context= "You are a romantic Poem expert and love to write short poem. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem")
console.log('Prompt: ${prompt}');
console.log('Context: ${context}');


axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
