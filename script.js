// Define an array of food items along with corresponding hints
const foodsAndHints = [
    { name: "pizza", hint: "It's a popular Italian dish with melted cheese and tomato sauce on a round dough." },
    { name: "burger", hint: "It's a sandwich consisting of one or more cooked patties of ground meat." },
    { name: "sushi", hint: "It's a Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice served with a garnish of raw fish, vegetables, or egg." },
    { name: "taco", hint: "It's a traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients." },
    { name: "pasta", hint: "It's a staple food of Italian cuisine, typically made from durum wheat flour mixed with water or eggs, and formed into various shapes." },
    { name: "ice cream", hint: "It's a sweetened frozen food typically eaten as a snack or dessert." },
    { name: "cake", hint: "It's a sweet baked food made from a combination of flour, sugar, eggs, and other ingredients." },
    { name: "sandwich", hint: "It's a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread." },
    { name: "salad", hint: "It's a dish consisting of a mixture of small pieces of food, usually vegetables." },
    { name: "steak", hint: "It's a meat generally sliced across the muscle fibers, potentially including a bone." }
];

// Function to choose a random food item and its corresponding hint
function chooseFood() {
    const randomIndex = Math.floor(Math.random() * foodsAndHints.length);
    return foodsAndHints[randomIndex];
}

// Function to play the game
function foodGuessingGame() {
    const { name, hint } = chooseFood(); // Get a random food item and its hint
    let guessed = false; // Flag to track if the food has been guessed
    let attempts = 3; // Number of attempts allowed
    const hintElement = document.getElementById('hint');
    const attemptsLeftElement = document.getElementById('attemptsLeft');
    const guessInputElement = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitBtn');
    const messageElement = document.getElementById('message');

    hintElement.textContent = `Here's a hint: ${hint}`;
    attemptsLeftElement.textContent = `Attempts left: ${attempts}`;

    submitButton.addEventListener('click', function() {
        const guess = guessInputElement.value.toLowerCase();
        
        // Check if the guess is correct
        if (guess === name) {
            guessed = true;
            messageElement.style.display = 'block';
            messageElement.textContent = `Congratulations! You guessed it right. The food is ${name}.`;
            guessInputElement.disabled = true;
            submitButton.disabled = true;
            playAgain(); // Call playAgain function
        } else {
            attempts--;
            if (attempts > 0) {
                messageElement.style.display = 'block';
                messageElement.textContent = `Wrong guess! Try again.`;
            } else {
                messageElement.style.display = 'block';
                messageElement.textContent = `Sorry, you're out of attempts. The correct answer was ${name}.`;
                playAgain(); // Call playAgain function
            }
        }

        // Update attempts left
        attemptsLeftElement.textContent = `Attempts left: ${attempts}`;
        // Clear input field
        guessInputElement.value = '';
    });

    // Function to play again
    function playAgain() {
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again';
        playAgainButton.addEventListener('click', function() {
            messageElement.style.display = 'none';
            messageElement.textContent = '';
            guessInputElement.disabled = false;
            submitButton.disabled = false;
            foodGuessingGame(); // Restart the game
            this.remove(); // Remove the play again button after clicking
        });
        messageElement.appendChild(playAgainButton); // Append the play again button
    }
}

// Start the game
foodGuessingGame();
