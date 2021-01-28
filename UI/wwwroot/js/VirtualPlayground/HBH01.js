// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
//
// import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
//
// import {finite_state_machine} from './finite-state-machine.js';
// import {entity} from './entity.js';
// import {player_entity} from './player-entity.js'
// import {player_state} from './player-state.js';
// //import {CLI_Guy} from "./CameraGuy.js";
// import {ui_controller} from './ui-controller.js';
// //import {CLI_Guy} from './CliGuy.js';
// //import DemoCLI from "./cli";
//
//
// export const HBH00 = (() => {
//  
//   class AIInput {
//     constructor() {
//       this._Init();    
//     }
//
//     _Init() {
//       this._keys = {
//         forward: false,
//         backward: false,
//         left: false,
//         right: false,
//         space: false,
//         shift: false,
//       };
//     }
//   };
//
//   class NPCFSM extends finite_state_machine.FiniteStateMachine {
//     constructor(proxy) {
//       super();
//       this._proxy = proxy;
//       this._Init();
//     }
//
//     _Init() {
//       this._AddState('idle', player_state.IdleState);
//       this._AddState('walk', player_state.WalkState);
//       this._AddState('death', player_state.DeathState);
//       this._AddState('attack', player_state.AttackState);
//     }
//   };
// //   class CLI_Guy extends entity.Component {
// //     constructor(params) {
// //       super();
// //       this._params = params;
// //       this._quests = {};
// //       this._cli = new DemoCLI("#cliContainer");
// //
// //     }
// //
// //     InitComponent() {
// //       // this._LoadUI();
// //
// //       if (this._cli) {
// //         this._inputCli = new StInput(this._cli.container)
// //         const h = (async () => {
// //           this._cli.printPrompt()
// //           await this._cli.type('echo "Creating Terminal"')
// //
// //         })()
// //
// //       }}
// //
// //
// //     Update(timeInSeconds) {
// //     }
// //   };
// //   class UIController extends entity.Component {
// //     constructor(params) {
// //       super();
// //       this._params = params;
// //       this._quests = {};
// //       this.Isgliding = true;
// //       this.glideHero = new Glide('.glide', {        type: "carousel",
// //         touchAngle: 45,
// //         focusAt: 1,
// //         startAt: 1,
// //         perView: 1,
// //         keyboard: false,
// //         gap: 5,
// //         autoplay: false,
// //         peek: {
// //           before: 100,
// //           after: 50
// //         },
// //
// //       })
// //     }
// //
// //     InitComponent() {
// //       this._LoadUI();
// //
// //       //this._iconBar = {
// //       //  stats: document.getElementById('icon-bar-stats'),
// //       //  inventory: document.getElementById('icon-bar-inventory'),
// //       //  quests: document.getElementById('icon-bar-quests'),
// //       //};
// // //
// //       //this._ui = {
// //       //  inventory: document.getElementById('inventory'),
// //       //  stats: document.getElementById('stats'),
// //       //  quests: document.getElementById('quest-journal'),
// //       //};
// //
// //       // this._iconBar.inventory.onclick = (m) => { this._OnInventoryClicked(m); };
// //       // this._iconBar.stats.onclick = (m) => { this._OnStatsClicked(m); };
// //       // this._iconBar.quests.onclick = (m) => { this._OnQuestsClicked(m); };
// //       // this._HideUI();
// //     }
// //     _LoadUI() {
// //
// //
// //       // tween.oncomplete(function(){
// //       //    
// //       //     alert("done tweening!")
// //       // });
// //
// //       // This code is only related to handling the split.
// //       // Our three.js code has not changed
// //       Split(['#view', '#controls'], {  // eslint-disable-line new-cap
// //         sizes: [10, 90],
// //         minSize: 50,
// //         elementStyle: (dimension, size, gutterSize) => {
// //           return {
// //             'flex-basis': `calc(${size}% - ${gutterSize}px)`,
// //           };
// //         },
// //         gutterStyle: (dimension, gutterSize) => {
// //           return {
// //             'flex-basis': `${gutterSize}px`,
// //           };
// //         },
// //       });
// //
// //
// //       let ActiveFrames = document.getElementById("ActiveFrames");
// //       //
// //       // @* <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?tunisia" alt="img"></li> *@
// //       // @* <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?earth" alt="img"></li> *@
// //
// //       // <li class="slider__frame glide__slide"><img src="https://source.unsplash.com/1600x900/?Germany" alt="img"></li>
// //       let g = document.createElement('li');
// //       g.setAttribute("class", "slider__frame glide__slide");
// //       let div = document.createElement('img');
// //
// //
// //       div.setAttribute("src", "https://source.unsplash.com/1600x900/?dna");
// //       g.appendChild(div);
// //
// //       ActiveFrames.appendChild(g);
// //
// //
// //       g = document.createElement('li');
// //       g.setAttribute("class", "slider__frame glide__slide");
// //       div = document.createElement('img');
// //       div.setAttribute("src", "https://source.unsplash.com/1600x900/?Life");
// //       g.appendChild(div);
// //
// //       ActiveFrames.appendChild(g);
// //
// //
// //       g = document.createElement('li');
// //       g.setAttribute("class", "slider__frame glide__slide");
// //       div = document.createElement('img');
// //       div.setAttribute("src", "https://source.unsplash.com/1600x900/?Space");
// //       g.appendChild(div);
// //
// //       ActiveFrames.appendChild(g);
// //
// //       g = document.createElement('li');
// //       g.setAttribute("class", "slider__frame glide__slide");
// //       div = document.createElement('img');
// //       div.setAttribute("src", "https://source.unsplash.com/1600x900/?Aliens");
// //       g.appendChild(div);
// //
// //       ActiveFrames.appendChild(g);
// //
// //       //  var g = document.createElement('li');
// //       //  g.setAttribute("class", "slider__frame glide__slide");
// //       //  var div=document.createElement('div');
// //       //
// //       // div.setAttribute("id","cliContainer");
// //       //  div.setAttribute("class","terminal");
// //       //
// //       //  g.appendChild(div);
// //       //
// //       //  ActiveFrames.appendChild(g);
// //
// //       this.UpdateGlider();
// //
// //       // document.getElementById('cliContainer').addEventListener('keydown', event => {
// //
// //       //   this.Attention = "Cli";
// //       //   this._input._resetAll();
// //       //   if (this._cli) {
// //       //     if (event.key === "Enter") {
// //       //       this._cli.enterKey();
// //       //       this._cli.println("");
// //       //       return;
// //       //     }
// //       //     this._cli.type(event.key);
// //       //     // this._cli.printPrompt();
// //       //     //   alert(event.key);
// //       //   }
// //       // })
// //
// //       // document.getElementById('c').addEventListener('click', event => {
// //
// //       // this.Attention = "Canvas";
// //
// //       //   this._cli.type("Attention : " + this.Attention)
// //       //   this._cli.println("");
// //       //   this._cli.printPrompt();
// //       //   this._cli.printCursor();
// //       //   // this._input._resetAll();
// //       // })
// //
// //       // document.getElementById('controls').addEventListener('mousedown', event => {
// //
// //       //   this.Attention = "Controls";
// //       //   this._cli.type("Attention : " + this.Attention);
// //       //   this._cli.println("");
// //       //   this._cli.printPrompt();
// //       //   this._cli.printCursor();
// //       //   this._input._resetAll();
// //       // })
// //
// //
// //       // var userSelection = document.getElementsByClassName('gutter');
// //       // for (var i = 0; i < userSelection.length; i++) {
// //       //   (function (index) {
// //       //     userSelection[index].addEventListener("mousedown", function () {
// //
// //       // // this.Attention = "Gutter";
// //       // // this._cli.type("Attention : " + this.Attention)
// //       // // this._cli.println();
// //       // // this._cli.printPrompt();
// //       // // this._cli.printCursor();
// //
// //       //       //         this._input._resetAll();
// //       //     })
// //       //   })(i);
// //       // }
// //       // document.getElementById('cliContainer').addEventListener('mousedown', event => {
// //
// //       //   this.Attention = "Cli";
// //       //   this._input._resetAll();
// //       // })
// //
// //
// //       /* global Split */
// //
// //
// //     }
// //     AddQuest(quest) {
// //       if (quest.id in this._quests) {
// //         return;
// //       }
// //
// //       const e = document.createElement('DIV');
// //       e.className = 'quest-entry';
// //       e.id = 'quest-entry-' + quest.id;
// //       e.innerText = quest.title;
// //       e.onclick = (evt) => {
// //         this._OnQuestSelected(e.id);
// //       };
// //       document.getElementById('quest-journal').appendChild(e);
// //
// //       this._quests[quest.id] = quest;
// //       this._OnQuestSelected(quest.id);
// //     }
// //
// //     _OnQuestSelected(id) {
// //       const quest = this._quests[id];
// //
// //       const e = document.getElementById('quest-ui');
// //       e.style.visibility = '';
// //
// //       const text = document.getElementById('quest-text');
// //       text.innerText = quest.text;
// //
// //       const title = document.getElementById('quest-text-title');
// //       title.innerText = quest.title;
// //     }
// //
// //     _HideUI() {
// //       this._ui.inventory.style.visibility = 'hidden';
// //       this._ui.stats.style.visibility = 'hidden';
// //       this._ui.quests.style.visibility = 'hidden';
// //     }
// //
// //
// //     _OnQuestsClicked(msg) {
// //       const visibility = this._ui.quests.style.visibility;
// //       this._HideUI();
// //       this._ui.quests.style.visibility = (visibility ? '' : 'hidden');
// //     }
// //
// //     _OnStatsClicked(msg) {
// //       const visibility = this._ui.stats.style.visibility;
// //       this._HideUI();
// //       this._ui.stats.style.visibility = (visibility ? '' : 'hidden');
// //     }
// //
// //     _OnInventoryClicked(msg) {
// //       const visibility = this._ui.inventory.style.visibility;
// //       this._HideUI();
// //       this._ui.inventory.style.visibility = (visibility ? '' : 'hidden');
// //     }
// //
// //
// //     UpdateGlider() {
// //
// //
// //       // add content 
// //       // if (this.glideHero) {
// //       //
// //       //   this.glideHero.destroy();
// //       // }
// //       // // this.glideHero = new Glide('.glide', {            type: 'carousel',
// //       // //     animationDuration: 700,
// //       // //     // autoplay: 10000,
// //       // //     autoplay: false,
// //       // //     startAt:0,
// //       // //     perView: 2,
// //       // // });
// //       //
// //       // this.glideHero = new Glide('.glide', {
// //       //   type: "carousel",
// //       //   touchAngle: 45,
// //       //   focusAt: 1,
// //       //   startAt: 1,
// //       //   perView: 1,
// //       //   keyboard: false,
// //       //   gap: 5,
// //       //   autoplay: false,
// //       //   peek: {
// //       //     before: 100,
// //       //     after: 50
// //       //   },
// //       //
// //       // })
// //
// //
// //       // this.glideHero.on(['mount.after', 'run'], function () {
// //       //   
// //       //         alert("gello" +  this.glideHero.index );
// //       //     })
// //       this.glideHero.mount();
// //       //this.glideHero.go('<');
// //
// //
// //     }
// //
// //
// //     Update(timeInSeconds) {
// //       //   if (this.Isgliding){
// //       //  this.UpdateGlider();
// //       //  // this.glideHero.mount();
// //       // }
// //     }
// //   };
//
//
//   class HBH01 extends entity.Component {
//     constructor(params) {
//       super();
//       this._Init(params);
//   //  this.CLI_Guy = new CLI_Guy.CLI_Guy();
//    
//      //this.AddComponent(new CLI_Guy.CLI_Guy());
//     }
//
//     _Init(params) {
//       this.SayHI();
//       this._params = params;
//       this.UI_Guy = new ui_controller.UIController();
//       this.UI_Guy._LoadUI();
//      // this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
//      // this._acceleration = new THREE.Vector3(1, 0.25, 40.0);
//      // this._velocity = new THREE.Vector3(0, 0, 0);
//      // this._position = new THREE.Vector3();
//     //  this._ui = new HBH01.HBH01();
//     //      //     new player_entity.BasicCharacterControllerProxy(this._animations));
//     //      this.GetComponent('UIController');
//      //// this._cli = this.GetComponent('cli');
//      // this._animations = {};
//      // this._input = new AIInput();
//      // // FIXME
//      // this._stateMachine = new NPCFSM(
//      //     new player_entity.BasicCharacterControllerProxy(this._animations));
// //
//   // //   this._LoadModels();
//     }
//
//     InitComponent() {
//       this._RegisterHandler('health.death', (m) => { this._OnDeath(m); });
//       this._RegisterHandler('update.position', (m) => { this._OnPosition(m); });
//     }
//
//     _OnDeath(msg) {
//       this._stateMachine.SetState('death');
//     }
//
//     _OnPosition(m) {
//       if (this._target) {
//         this._target.position.copy(m.value);
//         this._target.position.y = 0.35;
//       }
//     }
//
//     _LoadModels() {
//       const loader = new FBXLoader();
//       loader.setPath('./resources/monsters/FBX/');
//       loader.load(this._params.resourceName, (glb) => {
//         this._target = glb;
//         this._params.scene.add(this._target);
//
//         this._target.scale.setScalar(0.025);
//         this._target.position.copy(this._parent._position);
//         this._target.position.y += 0.35;
//         const texLoader = new THREE.TextureLoader();
//         const texture = texLoader.load(
//             './resources/monsters/Textures/' + this._params.resourceTexture);
//         texture.encoding = THREE.sRGBEncoding;
//         texture.flipY = true;
//
//         this._target.traverse(c => {
//           c.castShadow = true;
//           c.receiveShadow = true;
//           if (c.material) {
//             c.material.map = texture;
//             c.material.side = THREE.DoubleSide;
//           }
//         });
//
//         this._mixer = new THREE.AnimationMixer(this._target);
//
//         const fbx = glb;
//         const _FindAnim = (animName) => {
//           for (let i = 0; i < fbx.animations.length; i++) {
//             if (fbx.animations[i].name.includes(animName)) {
//               const clip = fbx.animations[i];
//               const action = this._mixer.clipAction(clip);
//               return {
//                 clip: clip,
//                 action: action
//               }
//             }
//           }
//           return null;
//         };
//
//         this._animations['idle'] = _FindAnim('Idle');
//         this._animations['walk'] = _FindAnim('Walk');
//         this._animations['death'] = _FindAnim('Death');
//         this._animations['attack'] = _FindAnim('Bite_Front');
//
//         this._stateMachine.SetState('idle');
//       });
//     }
//
//     get Position() {
//       return this._position;
//     }
//
//     get Rotation() {
//       if (!this._target) {
//         return new THREE.Quaternion();
//       }
//       return this._target.quaternion;
//     }
//
//     _FindIntersections(pos) {
//       const _IsAlive = (c) => {
//         const h = c.entity.GetComponent('HealthComponent');
//         if (!h) {
//           return true;
//         }
//         return h._health > 0;
//       };
//
//       const grid = this.GetComponent('SpatialGridController');
//       const nearby = grid.FindNearbyEntities(2).filter(e => _IsAlive(e));
//       const collisions = [];
//
//       for (let i = 0; i < nearby.length; ++i) {
//         const e = nearby[i].entity;
//         const d = ((pos.x - e._position.x) ** 2 + (pos.z - e._position.z) ** 2) ** 0.5;
//
//         // HARDCODED
//         if (d <= 4) {
//           collisions.push(nearby[i].entity);
//         }
//       }
//       return collisions;
//     }
//
//     _FindPlayer(pos) {
//       const _IsAlivePlayer = (c) => {
//         const h = c.entity.GetComponent('HealthComponent');
//         if (!h) {
//           return false;
//         }
//         if (c.entity.Name != 'player') {
//           return false;
//         }
//         return h._health > 0;
//       };
//
//       const grid = this.GetComponent('SpatialGridController');
//       const nearby = grid.FindNearbyEntities(100).filter(c => _IsAlivePlayer(c));
//
//       if (nearby.length == 0) {
//         return new THREE.Vector3(0, 0, 0);
//       }
//
//       const dir = this._parent._position.clone();
//       dir.sub(nearby[0].entity._position);
//       dir.y = 0.0;
//       dir.normalize();
//
//       return dir;
//     }
//
//     _UpdateAI(timeInSeconds) {
//       const currentState = this._stateMachine._currentState;
//       if (currentState.Name != 'walk' &&
//           currentState.Name != 'run' &&
//           currentState.Name != 'idle') {
//         return;
//       }
//
//       if (currentState.Name == 'death') {
//         return;
//       }
//
//       if (currentState.Name == 'idle' ||
//           currentState.Name == 'walk') {
//         this._OnAIWalk(timeInSeconds);
//       }
//     }
//
//     _OnAIWalk(timeInSeconds) {
//       const dirToPlayer = this._FindPlayer();
//
//       const velocity = this._velocity;
//       const frameDecceleration = new THREE.Vector3(
//           velocity.x * this._decceleration.x,
//           velocity.y * this._decceleration.y,
//           velocity.z * this._decceleration.z
//       );
//       frameDecceleration.multiplyScalar(timeInSeconds);
//       frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
//           Math.abs(frameDecceleration.z), Math.abs(velocity.z));
//  
//       velocity.add(frameDecceleration);
//
//       const controlObject = this._target;
//       const _Q = new THREE.Quaternion();
//       const _A = new THREE.Vector3();
//       const _R = controlObject.quaternion.clone();
//  
//       this._input._keys.forward = false;
//
//       const acc = this._acceleration;
//       if (dirToPlayer.length() == 0) {
//         return;
//       }
//
//       this._input._keys.forward = true;
//       velocity.z += acc.z * timeInSeconds;
//
//       const m = new THREE.Matrix4();
//       m.lookAt(
//           new THREE.Vector3(0, 0, 0),
//           dirToPlayer,
//           new THREE.Vector3(0, 1, 0));
//       _R.setFromRotationMatrix(m);
//  
//       controlObject.quaternion.copy(_R);
//  
//       const oldPosition = new THREE.Vector3();
//       oldPosition.copy(controlObject.position);
//  
//       const forward = new THREE.Vector3(0, 0, 1);
//       forward.applyQuaternion(controlObject.quaternion);
//       forward.normalize();
//  
//       const sideways = new THREE.Vector3(1, 0, 0);
//       sideways.applyQuaternion(controlObject.quaternion);
//       sideways.normalize();
//  
//       sideways.multiplyScalar(velocity.x * timeInSeconds);
//       forward.multiplyScalar(velocity.z * timeInSeconds);
//  
//       const pos = controlObject.position.clone();
//       pos.add(forward);
//       pos.add(sideways);
//
//       const collisions = this._FindIntersections(pos);
//       if (collisions.length > 0) {
//         this._input._keys.space = true;
//         this._input._keys.forward = false;
//         return;
//       }
//
//       controlObject.position.copy(pos);
//       this._position.copy(pos);
//  
//       this._parent.SetPosition(this._position);
//       this._parent.SetQuaternion(this._target.quaternion);
//     }
//
//     Update(timeInSeconds) {
//       if (!this._stateMachine._currentState) {
//         return;
//       }
//
//       this._input._keys.space = false;
//       this._input._keys.forward = false;
//
//       this._UpdateAI(timeInSeconds);
//
//       this._stateMachine.Update(timeInSeconds, this._input);
//
//       // HARDCODED
//       if (this._stateMachine._currentState._action) {
//         this.Broadcast({
//           topic: 'player.action',
//           action: this._stateMachine._currentState.Name,
//           time: this._stateMachine._currentState._action.time,
//         });
//       }
//      
//       if (this._mixer) {
//         this._mixer.update(timeInSeconds);
//       }
//     }
//
//
//     SayHI(
//     ){  console.log("hello from HBH");}
//   };
//
//   return {
//     HBH00: HBH00,
//   };
//
// })();