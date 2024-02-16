
class Interaction{
    prompt = "";
    response = "";

    constructor(prompt, response){
        this.prompt = prompt;
        this.response = response;
    }

    showContent(index){
        if(this.prompt ===undefined || this.response === undefined) {
            console.error('No prompt or response record.');
            return;
        }
        if(index !== undefined)
            console.log(`\n${index} -- The prompt is: ${this.prompt}\n-- response: ${this.response}`);
    }
    getType(){
        return Interaction.name;
    }

}
export default Interaction;