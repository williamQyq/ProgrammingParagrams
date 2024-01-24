export interface PublicationInterface{
    title: string;
    publishedDate: Date;
    author?: string[];
    citations?:string[];

    addCitation(citation:string):void
    removeCitation(index:number):void;
    displayDetail():void
}

export interface PublicationManager{
    publications:PublicationInterface[];
    webPages: WebPage[];
    addPublication(publication:PublicationInterface):void;
    addWebPages(page: WebPage):void;
}


export interface WebPage{
    isWebPage():boolean;
    createAPACiting():string;
    createMLACiting():string;
}