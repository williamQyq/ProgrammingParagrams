import PromptManager from "./services/PromptManager.js";
import readline from "readline";

// Initialize the PromptManager
const manager = new PromptManager();

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display options to the user
function displayOptions() {
  console.log("\nOptions:");
  console.log("1. Add Dalle Prompt");
  console.log("2. Add Standard Prompt");
  console.log("3. Show All Interactions");
  console.log("4. Remove Prompt");
  console.log("Type 'help' to show options");
  console.log("Type 'exit' to quit\n");
}

function askForChoice() {
  displayOptions();
  rl.question("Enter your choice: ", (choice) => {
    handleChoice(choice);
  });
}

function handleChoice(choice) {
  if (choice.toLowerCase() === 'exit') {
    rl.close();
    console.log("Goodbye!");
    return;
  }

  switch (choice) {
    case '1':
      // For Dalle Prompt addition
      rl.question("Enter your Dalle prompt text: ", (promptText) => {
        rl.question("Enter metadata: ", (metadata) => {
          rl.question("Enter image URL: ", (imageUrl) => {
            manager.recordDallePrompt(promptText, metadata, imageUrl);
            askForChoice(); // Ask for the next choice after handling the current one
          });
        });
      });
      break;
    case '2':
      // For Standard Prompt addition
      rl.question("Enter your standard prompt text: ", (standardPrompt) => {
        rl.question("Enter response: ", (standardMetadata) => {
          manager.recordPrompt(standardPrompt, standardMetadata);
          askForChoice(); // Ask for the next choice after handling the current one
        });
      });
      break;
    case '3':
      // Show all interactions
      manager.showAllInteraction();
      askForChoice(); // Ask for the next choice after handling the current one
      break;
    case '4':
      // For removing a prompt
      rl.question("Enter the ID of the prompt to remove: ", (id) => {
        const idToRemove = parseInt(id, 10);
        manager.removePrompt(idToRemove);
        askForChoice(); // Ask for the next choice after handling the current one
      });
      break;
    case 'help':
      displayOptions();
      askForChoice(); // Ask for the next choice after handling the current one
      break;
    default:
      console.log("Invalid option, please try again.");
      askForChoice(); // Ask for the next choice after handling the current one
  }
}

// Start the interaction
askForChoice();
