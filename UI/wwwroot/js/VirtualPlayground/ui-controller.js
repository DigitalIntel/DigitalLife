import {entity} from './entity.js';


export const ui_controller = (() => {

  class UIController extends entity.Component {
    constructor(params) {
      super();
      this._params = params;
      this._quests = {};
    }
  
    InitComponent() {
      this._LoadUI() {


        // tween.oncomplete(function(){
        //    
        //     alert("done tweening!")
        // });

        // This code is only related to handling the split.
        // Our three.js code has not changed
        Split(['#view', '#controls'], {  // eslint-disable-line new-cap
          sizes: [60, 40],
          minSize: 50,
          elementStyle: (dimension, size, gutterSize) => {
            return {
              'flex-basis': `calc(${size}% - ${gutterSize}px)`,
            };
          },
          gutterStyle: (dimension, gutterSize) => {
            return {
              'flex-basis': `${gutterSize}px`,
            };
          },
        });


        let ActiveFrames = document.getElementById("ActiveFrames");
        //
        // @* <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?tunisia" alt="img"></li> *@
        // @* <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?earth" alt="img"></li> *@

        // <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?Germany" alt="img"></li>
        let g = document.createElement('li');
        g.setAttribute("class", "slider__frame glide__slide");
        let div = document.createElement('img');


        div.setAttribute("src", "https://source.unsplash.com/1600x900/?dna");
        g.appendChild(div);

        ActiveFrames.appendChild(g);


       g = document.createElement('li');
        g.setAttribute("class", "slider__frame glide__slide");
       div = document.createElement('img');
        div.setAttribute("src", "https://source.unsplash.com/1600x900/?Life");
        g.appendChild(div);

        ActiveFrames.appendChild(g);


         g = document.createElement('li');
        g.setAttribute("class", "slider__frame glide__slide");
        div = document.createElement('img');
        div.setAttribute("src", "https://source.unsplash.com/1600x900/?Space");
        g.appendChild(div);

        ActiveFrames.appendChild(g);

        g = document.createElement('li');
        g.setAttribute("class", "slider__frame glide__slide");
        div = document.createElement('img');
        div.setAttribute("src", "https://source.unsplash.com/1600x900/?Aliens");
        g.appendChild(div);

        ActiveFrames.appendChild(g);

        //  var g = document.createElement('li');
        //  g.setAttribute("class", "slider__frame glide__slide");
        //  var div=document.createElement('div');
        //
        // div.setAttribute("id","cliContainer");
        //  div.setAttribute("class","terminal");
        //
        //  g.appendChild(div);
        //
        //  ActiveFrames.appendChild(g);

        this._UpdateGlider()

        document.getElementById('cliContainer').addEventListener('keydown', event => {

          this.Attention = "Cli";
          this._input._resetAll();
          if (this._cli) {
            if (event.key === "Enter") {
              this._cli.enterKey();
              this._cli.println("");
              return;
            }
            this._cli.type(event.key);
            // this._cli.printPrompt();
            //   alert(event.key);
          }
        })

        document.getElementById('c').addEventListener('click', event => {

          this.Attention = "Canvas";

          this._cli.type("Attention : " + this.Attention)
          this._cli.println("");
          this._cli.printPrompt();
          this._cli.printCursor();
          // this._input._resetAll();
        })

        document.getElementById('controls').addEventListener('mousedown', event => {

          this.Attention = "Controls";
          this._cli.type("Attention : " + this.Attention);
          this._cli.println("");
          this._cli.printPrompt();
          this._cli.printCursor();
          this._input._resetAll();
        })


        var userSelection = document.getElementsByClassName('gutter');
        for (var i = 0; i < userSelection.length; i++) {
          (function (index) {
            userSelection[index].addEventListener("mousedown", function () {

              // this.Attention = "Gutter";
              // this._cli.type("Attention : " + this.Attention)
              // this._cli.println();
              // this._cli.printPrompt();
              // this._cli.printCursor();

              //         this._input._resetAll();
            })
          })(i);
        }
        document.getElementById('cliContainer').addEventListener('mousedown', event => {

          this.Attention = "Cli";
          this._input._resetAll();
        })


        /* global Split */


      }

      this._iconBar = {
        stats: document.getElementById('icon-bar-stats'),
        inventory: document.getElementById('icon-bar-inventory'),
        quests: document.getElementById('icon-bar-quests'),
      };

      this._ui = {
        inventory: document.getElementById('inventory'),
        stats: document.getElementById('stats'),
        quests: document.getElementById('quest-journal'),
      };

      this._iconBar.inventory.onclick = (m) => { this._OnInventoryClicked(m); };
      this._iconBar.stats.onclick = (m) => { this._OnStatsClicked(m); };
      this._iconBar.quests.onclick = (m) => { this._OnQuestsClicked(m); };
      this._HideUI();
    }

    AddQuest(quest) {
      if (quest.id in this._quests) {
        return;
      }

      const e = document.createElement('DIV');
      e.className = 'quest-entry';
      e.id = 'quest-entry-' + quest.id;
      e.innerText = quest.title;
      e.onclick = (evt) => {
        this._OnQuestSelected(e.id);
      };
      document.getElementById('quest-journal').appendChild(e);

      this._quests[quest.id] = quest;
      this._OnQuestSelected(quest.id);
    }

    _OnQuestSelected(id) {
      const quest = this._quests[id];

      const e = document.getElementById('quest-ui');
      e.style.visibility = '';

      const text = document.getElementById('quest-text');
      text.innerText = quest.text;

      const title = document.getElementById('quest-text-title');
      title.innerText = quest.title;
    }

    _HideUI() {
      this._ui.inventory.style.visibility = 'hidden';
      this._ui.stats.style.visibility = 'hidden';
      this._ui.quests.style.visibility = 'hidden';
    }
    
    _OnQuestsClicked(msg) {
      const visibility = this._ui.quests.style.visibility;
      this._HideUI();
      this._ui.quests.style.visibility = (visibility ? '' : 'hidden');
    }

    _OnStatsClicked(msg) {
      const visibility = this._ui.stats.style.visibility;
      this._HideUI();
      this._ui.stats.style.visibility = (visibility ? '' : 'hidden');
    }

    _OnInventoryClicked(msg) {
      const visibility = this._ui.inventory.style.visibility;
      this._HideUI();
      this._ui.inventory.style.visibility = (visibility ? '' : 'hidden');
    }

    Update(timeInSeconds) {
    }
  };

  return {
    UIController: UIController,
  };

})();