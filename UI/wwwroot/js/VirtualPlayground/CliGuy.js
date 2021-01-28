import {entity} from './entity.js';
import DemoCLI from "./cli.js"


export const CLI_Guy = (() => {

  class CLI_Guy extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
      this._quests = {};
      this._cli = new DemoCLI("#cliContainer");
      
    }
  
    InitComponent() {
     // this._LoadUI();
     
      if (this._cli) {
        this._inputCli = new StInput(this._cli.container)
        const h = (async () => {
          this._cli.printPrompt()
          await this._cli.type('echo "Creating Terminal"')
          this._cli.println("");

          this._cli.println("Hello from Cli Guy , I let you interface with anything ! ")

          await this._cli.type('echo "type h to reset me !"')
          this._cli.println("")
          this._cli.printPrompt()
        })()

      }}
    
 
    Update(timeInSeconds) {
    }
  };
 
  return {
    CLI_Guy: CLI_Guy,
  };

})();