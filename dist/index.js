"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DalleInteraction_1 = __importDefault(require("./services/DalleInteraction"));
const PromptManager_1 = __importDefault(require("./services/PromptManager"));
const i1 = new DalleInteraction_1.default("tell me a joke use my picture", "blahbalhbalh", new URL("https://s3.amazon.picture"));
const type = i1.getType();
console.log(`Dalle interaction type: ${type}`);
//Test PromptManagernpm
const manager = new PromptManager_1.default();
manager.recordDallePrompt("tell me a joke use my picture", "blahbalhbalh", new URL("https://s3.amazon.picture"));
manager.recordPrompt("tell me a joke use my picture", "blahbalhbalh");
manager.showAllInteraction();
//Test remove Prompt 
manager.removePrompt(1);
//# sourceMappingURL=index.js.map