"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Interaction {
    constructor(prompt, response) {
        this.prompt = prompt;
        this.response = response;
    }
    showContent(index) {
        if (this.prompt === undefined || this.response === undefined) {
            console.error("No prompt or response record.");
            return;
        }
        if (index !== undefined)
            console.log(`${index} -- The prompt is: ${this.prompt} - response: ${this.response}`);
        console.log(`The prompt is: ${this.prompt} - response: ${this.response}`);
    }
    getType() {
        return Interaction.name;
    }
}
exports.default = Interaction;
//# sourceMappingURL=Interaction.js.map