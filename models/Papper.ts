import { PublicationInterface } from "../types/types";
import { Param, Publication } from "./Publication";

class Papper extends Publication implements PublicationInterface{
    constructor({title,publishedDate = new Date()}:Param){
        super({title,publishedDate});
    }
}

export default Papper;