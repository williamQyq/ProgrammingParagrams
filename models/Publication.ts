import {v4 as uuidv4 } from 'uuid';

import { PublicationInterface } from "../types/types";

export interface Param{
    title:string;
    publishedDate:Date;
    [key:string]:any;
}

export class Publication implements PublicationInterface {
    protected _id:string;
    title: string;
    publishedDate: Date;
    author?: string[];
    citations?: string[];

    constructor({title, publishedDate=new Date()}:Param ){
        this._id = uuidv4();
        this.title = title;
        this.publishedDate = publishedDate;
    }
    addCitation(citation:string): void {
        this.citations?.push(citation);
    }
    addAuthor(author:string):void{
        this.author?.push(author);
    }
    removeCitation(index:number): void {
        //show citation if unable to remove
        if(this.citations === undefined || index>this.citations.length-1){
            console.error(`Failed to remove the citation at index ${index}.`)
            //print each citation in the format of `index -- citation`
            this.showCitations();
        }

        //remove citation
        this.citations?.splice(index,1);
        console.log(`Successfully removed citation at index ${index}`);
        this.showCitations();

    }
    displayDetail(): void {
        console.log(`Publication ID: ${this._id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Published Date: ${this.publishedDate.toDateString()}`);
        
        if (this.author && this.author.length > 0) {
            console.log(`Author(s): ${this.author.join(', ')}`);
        }

        if (this.citations && this.citations.length > 0) {
            console.log(`Citations: ${this.citations.join(', ')}`);
        }
    }
    /**
     * Print all citations
     * @returns 
     */
    showCitations():void{
        if(this.citations === undefined || this.citations?.length == 0)return;
        for(const [index,citation] of this.citations.entries()){
            console.log(`${index} -- ${citation}`);
        }
    }
}