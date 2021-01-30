import {entity} from './entity.js';
import DemoCLI from "./cli.js"


export const CameraGuy = (() => {

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
     
        })()

      }}
    
 
    Update(timeInSeconds) {
    }
  };
 
  return {
    CameraGuy: CameraGuy,
  };

})();