"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DalleInteraction_1 = __importDefault(require("./DalleInteraction"));
const Interaction_1 = __importDefault(require("./Interaction"));
class PromptManager {
    constructor() {
        this.interactions = [];
    }
    showAllInteraction() {
        if (this.interactions.length === 0) {
            console.log("No interactions.");
            return;
        }
        for (const [index, interaction] of this.interactions.entries()) {
            interaction.showContent(index);
        }
    }
    recordPrompt(prompt, response) {
        const p = new Interaction_1.default(prompt, response);
        this.interactions.push(p);
    }
    recordDallePrompt(prompt, response, image) {
        const dallePrompt = new DalleInteraction_1.default(prompt, response, image);
        this.interactions.push(dallePrompt);
    }
    removePrompt(index) {
        if (index > this.interactions.length - 1) {
            console.error(`Unable to remove prompt at index ${index}`);
            return;
        }
        this.interactions.splice(index, 1);
        console.log(`Successfully removed interaction at index ${index}.`);
    }
}
exports.default = PromptManager;
//# sourceMappingURL=PromptManager.js.map