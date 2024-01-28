
class Interaction{
    prompt?:string;
    response?:string;

    constructor(prompt:string, response:string){
        this.prompt = prompt;
        this.response = response;
    }

    showContent(index:number | undefined){
        if(this.prompt ===undefined || this.response === undefined) {
            console.error("No prompt or response record.");
            return;
        }
        if(index !== undefined)
            console.log(`${index} -- The prompt is: ${this.prompt} - response: ${this.response}`);

        console.log(`The prompt is: ${this.prompt} - response: ${this.response}`);
        
    }
    getType(){
        return Interaction.name;
    }

}
export default Interaction;