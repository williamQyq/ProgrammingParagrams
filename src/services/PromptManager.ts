import DalleInteraction from "./DalleInteraction";
import Interaction from "./Interaction";

class PromptManager{
    interactions:Interaction[] = [];
    showAllInteraction(){
        if(this.interactions.length === 0){
            console.log("No interactions.")
            return;
        }
        for(const [index, interaction] of this.interactions.entries()){
            interaction.showContent(index);
        }
    }
    recordPrompt(prompt:string, response:string){
        const p = new Interaction(prompt,response);
        this.interactions.push(p);
    }

    recordDallePrompt(prompt:string, response:string, image:URL){
        const dallePrompt = new DalleInteraction(prompt,response,image);
        this.interactions.push(dallePrompt);
    }

    removePrompt(index:number){
        if(index>this.interactions.length-1) {
            console.error(`Unable to remove prompt at index ${index}`);
            return;
        }
        this.interactions.splice(index,1);
        console.log(`Successfully removed interaction at index ${index}.`);
    }
}

export default PromptManager;