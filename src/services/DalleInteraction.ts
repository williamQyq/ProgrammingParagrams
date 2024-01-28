import { URL} from "url";
import Interaction from "./Interaction";

class DalleInteraction extends Interaction{
    image: URL
    constructor(prompt:string, response:string, image:URL){
        super(prompt,response);
        this.image = image;

    }

    getType(){
        return DalleInteraction.name;
    }

    isDalle(interaction:Interaction){
        return interaction.getType() === DalleInteraction.name;
    }

}
export default DalleInteraction;