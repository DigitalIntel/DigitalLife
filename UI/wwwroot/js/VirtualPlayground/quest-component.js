import {entity} from "./entity.js";


export const quest_component = (() => {

  const _TITLE = 'Welcome Adventurer!';
  const _TEXT = `Welcome to Honeywood adventurer, I see you're the chosen one and also the dragon born and whatever else, you're going to save the world! Also bring the rings back to mordor and defeat the evil dragon, and all the other things. But first, I must test you with some meaningless bullshit tasks that every rpg makes you do to waste time. Go kill like uh 30 ghosts and collect their eyeballs or something. Also go get my drycleaning and pick up my kids from daycare.`;

  class QuestComponent extends entity.Component {
    constructor(params) {
      super();
      this.params=params;
     
     // const e = document.getElementById('quest-ui');
     // e.style.visibility = 'hidden';
    }

    InitComponent() {
      this._RegisterHandler('input.picked', (m) => this._OnPicked(m));
      this._RegisterHandler('inventory.equip', (m) => this._OnEquip(m));
      // this._RegisterHandler('setAttention', (m) => this._OnSetAttention(m));
    }

    _OnPicked(msg) {      
      this.params.cli.printPrompt();this.params.cli.type("Focus: Tutorial manager" )
      
      
      
      
      //this.params.callback("tutorial manager");
      var element = document.getElementById("cliContainer");
      element.scrollTop = element.scrollHeight - element.clientHeight;
      this.params.cli.println("");
      this.params.cli.printPrompt();
      


      // super.Broadcast("setAttention");
    }

    _OnSetAttention(msg) {
      // super.Broadcast("setAttention");

      // this.params.cli.type("I have been clicked !" )
      // this.params.cli.println( "");
      // this.params.cli.type("I am the tutorial manager" )
      // this.params.cli.println("" );
      // this.params.cli.printPrompt();
      // this.params.cli.printCursor();
      //
      
    }
    
    
     // this.params.SetAttention(params);
    
      
      
   //  // alert("Hello! I am an alert box!!");
 
     // this.params.cli.type("I have been clicked !" )
     // this.params.cli.println( "");
     // this.params.cli.type("I am the tutorial manager" )
     // this.params.cli.println("" );
     // this.params.cli.printPrompt();
     // this.params.cli.printCursor();
     // // HARDCODE A QUEST
     // const quest = {
     //   id: 'foo',
     //   title: _TITLE,
     //   text: _TEXT,
     // };
     // this._AddQuestToJournal(quest);
   // }

    //_AddQuestToJournal(quest) {
    // const ui = this.FindEntity('ui').GetComponent('UIController');
    // ui.AddQuest(quest);
   // }
  };

  return {
      QuestComponent: QuestComponent,
  };
})();