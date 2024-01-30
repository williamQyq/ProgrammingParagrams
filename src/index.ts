import DalleInteraction from "./services/DalleInteraction";
import PromptManager from "./services/PromptManager";

const i1 = new DalleInteraction("tell me a joke use my picture", "blahbalhbalh", new URL("https://s3.amazon.picture"));
const type = i1.getType();
console.log(`Dalle interaction type: ${type}`);
 

//Test PromptManagernpm
const manager = new PromptManager();

manager.recordDallePrompt("tell me a joke use my picture", "blahbalhbalh", new URL("https://s3.amazon.picture"));
manager.recordPrompt("tell me a joke use my picture", "blahbalhbalh");

manager.showAllInteraction();

//Test remove Prompt 
manager.removePrompt(1);
manager.showAllInteraction();