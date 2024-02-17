import Interaction from "./Interaction.js";

class DalleInteraction extends Interaction{
    image;
    constructor(prompt, response, image){
        super(prompt,response);
        this.image = image;
        
    }

    getType(){
        return DalleInteraction.name;
    }

    isDalle(interaction){
        return interaction.getType() === DalleInteraction.name;
    }

}
export default DalleInteraction;