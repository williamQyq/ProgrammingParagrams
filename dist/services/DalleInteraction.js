"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Interaction_1 = __importDefault(require("./Interaction"));
class DalleInteraction extends Interaction_1.default {
    constructor(prompt, response, image) {
        super(prompt, response);
        this.image = image;
    }
    getType() {
        return DalleInteraction.name;
    }
    isDalle(interaction) {
        return interaction.getType() === DalleInteraction.name;
    }
}
exports.default = DalleInteraction;
//# sourceMappingURL=DalleInteraction.js.map