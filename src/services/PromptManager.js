import DalleInteraction from "./DalleInteraction.js";
import Interaction from "./Interaction.js";

class PromptManager{
    interactions = [];
    showAllInteraction(){
        if(this.interactions.length === 0){
            console.log('No interactions.')
            return;
        }
        for(const [index, interaction] of this.interactions.entries()){
            interaction.showContent(index);
        }
    }
    recordPrompt(prompt, response){
        const p = new Interaction(prompt,response);
        this.interactions.push(p);
    }

    recordDallePrompt(prompt, response, image){
        const dallePrompt = new DalleInteraction(prompt,response,image);
        this.interactions.push(dallePrompt);
    }

    removePrompt(index){
        if(index>this.interactions.length-1) {
            console.error(`Unable to remove prompt at index ${index}`);
            return;
        }
        this.interactions.splice(index,1);
        console.log(`Successfully removed interaction at index ${index}.`);
    }
}

export default PromptManager;