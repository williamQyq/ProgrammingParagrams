import { PublicationInterface } from "../types/types";
import { Param,Publication } from "./Publication";

class Book extends Publication implements PublicationInterface {
    constructor({title,publishedDate = new Date()}:Param){
        super({title,publishedDate});
    }
}

export default Book;