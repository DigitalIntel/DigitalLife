import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {entity} from "./entity.js";
import {CLI_Guy} from './CliGuy.js';
import {ui_controller} from './ui-controller.js';

export const HBH02 = (() => {

  class PickableComponent extends entity.Component {
    constructor() {
      super();
    }

    InitComponent() {
    }
  };

  class BasicCharacterControllerInput extends entity.Component {
    constructor(params) {
      super();
      this.CLIGuy= new CLI_Guy.CLI_Guy();
      this._ui_controller = new ui_controller.UIController();
      this._camera=params.camera;
   
      this._scene=params.scene;
      this._BirdCam= params.BirdCam;

      this._canvas = document.querySelector('#c');
      this._view = document.querySelector('#view');
      this._threejs = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas: this._canvas});
      this._threejs.antialias = true;
      
      this._params = params;
      
      
      
      this._Init();
      
  
    }
  
    _Init() {
      this.CLIGuy.Update();
      this._ui_controller.Update();
      //
      this._keys = {
        forward: false,
        backward: false,
        left: false,
        right: false,
        space: false,
        shift: false,
      };
      this._raycaster = new THREE.Raycaster();
      this._previousState=0;


      this._threejs.outputEncoding = THREE.sRGBEncoding;
      this._threejs.gammaFactor = 2.2;
      this._threejs.shadowMap.enabled = true;
      this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;




      // for input (using StInput)
      
      //this._input = new StInput(window);
      //document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
      //document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
      //document.addEventListener('mouseup', (e) => this._onMouseUp(e), false);
    }
    _Processinputs(){      
   //  console.log("inputs");
   //  const input= this._params.localInputs;
   //  // left mouse button is down
   //  if (input.down('mouse_left')) {
   //    console.log("Mouse is down.");
   //  }

      if (this._params.localInputs.down('z')){ this._keys.forward = true };
      if (this._params.localInputs.down('q')){  this._keys.left= true};
      if (this._params.localInputs.down('d')){  this._keys.right = true;};
      if (this._params.localInputs.down('s')){  this._keys.backward = true;};
      if (this._params.localInputs.down('shift')){   this._keys.shift = true;};
      if (this._params.localInputs.down('space')){   this._keys.space = true;};

      if (this._params.localInputs.released('z')){ this._keys.forward = false};
      if (this._params.localInputs.released('q')){  this._keys.left= false};
      if (this._params.localInputs.released('d')){  this._keys.right = false;};
      if (this._params.localInputs.released('s')){  this._keys.backward = false;};
      if (this._params.localInputs.released('shift')){   this._keys.shift = false;};
      if (this._params.localInputs.released('space')){   this._keys.space = false;};

     if ( this._params.localInputs.pressed('mouse_left')){
       this._previousState = 1;
       return;
     }
   
  if (this._params.localInputs.released('mouse_left') && this._previousState == 1 ) {
     this._previousState=0;

       
    
    // this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
    // this._camera.updateProjectionMatrix();
         const canvas = this._params.renderer.domElement;
         const rect =   this._params.renderer.domElement.getBoundingClientRect();
          //
          // const pos = {
          //     x: ((stinput.mousePosition.x - rect.left) / rect.width) * 2  - 1,
          //     y: (-(stinput.mousePosition.y - rect.top ) / rect.height) * -2 + 1,
          //
          //
          // };
              //    mouse.x = (( stinput.mousePosition.x - rect.left) /  canvas.clientWidth  ) * 2 - 1;
              //    mouse.y = - (( stinput.mousePosition.y - rect.top ) /canvas.clientHeight ) * 2 + 1;
                   
                   
        const pos = {
          x:  (( this._params.localInputs.mousePosition.x - rect.left) /  canvas.clientWidth  ) * 2 - 1,
          y:  - (( this._params.localInputs.mousePosition.y - rect.top ) /canvas.clientHeight ) * 2 + 1,
        };
   




    //console.log("mouse position X " +this._params.localInputs.mousePosition.x);
    //  
    //   console.log("posX" + pos.x);
    //  
    //   console.log("Camera position Y  " + this._params.localInputs.mousePosition.x); 
    //   console.log("posY" + pos.y);
    //  console.log("posY" + pos.y);
        
       
    
        this._raycaster.setFromCamera(pos, this._params.camera);

        const pickables = this._parent._parent.Filter((e) => {
          const p = e.GetComponent('PickableComponent');
          if (!p) {
            return false;
          }
          return e._mesh;
        });

        const ray = new THREE.Ray();
        ray.origin.setFromMatrixPosition(this._params.camera.matrixWorld);
        ray.direction.set(pos.x, pos.y, 0.5).unproject(
            this._params.camera).sub(ray.origin).normalize();

        // hack
        //  document.getElementById('quest-ui').style.visibility = 'hidden';

        for (let p of pickables) {
          // GOOD ENOUGH
          const box = new THREE.Box3().setFromObject(p._mesh);

          if (ray.intersectsBox(box)) {
            p.Broadcast({
              topic: 'input.picked'
            
            });
            //console.alert("clicked");
        //    this._input._resetAll();
            break;
          }
        }


      }

  

      
    }
    
    _resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
     //   renderer.setSize(width, height, false);
        //glideHero.mount();
      }
      return needResize;
    }
    Update(timeInSeconds) {

       if (this._resizeRendererToDisplaySize( this._threejs)) {
         // ui.UpdateGlider();
      
         const canvas =  this._threejs.domElement;
         this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
         this._camera.updateProjectionMatrix();
         this._BirdCam.aspect = canvas.clientWidth / canvas.clientHeight;
         this._BirdCam.updateProjectionMatrix();
         this._threejs.setSize(canvas.width, canvas.height, false);
         this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdCam );
         // ui.AddQuest(quest);
         if (this._ui){
      
           this._ui.glideHero.Remount();
         }
      
         // if (ui) {
         //     ui.UIController.Isgliding = true;
         // }
      
         // this._ui.UpdateGlider();
       }

      this._threejs.render(this._scene, this._BirdViewCAM);
      
    
      //this._ui_controller._LoadUI();       // 
      // 
      // 
      // if (this._resizeRendererToDisplaySize(  this._params.renderer)) {
      //   this.CLIGuy.Update();
      // if (this._resizeRendererToDisplaySize(this._threejs)) {
      //   // ui.UpdateGlider();
      //   const canvas = this._threejs.domElement;
      //   this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
      //   this._camera.updateProjectionMatrix();
      //   this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
      //   this._BirdViewCAM.updateProjectionMatrix();
      //
      //   // ui.AddQuest(quest);
      //   if (this._ui){
      //
      //     this._ui.glideHero.Remount();
      //   }     
      // }
      //



      // this._ui_controller.UpdateGlider();
      // }
       //   // ui.UpdateGlider();
       //   const canvas =  this._params.renderer;
       //   this._params.aspect = canvas.clientWidth / canvas.clientHeight;
       //   this._params.camera.updateProjectionMatrix();
       //   this._params.camera.aspect = canvas.clientWidth / canvas.clientHeight;
       //   this._params.camera.updateProjectionMatrix();
       //
       //   // ui.AddQuest(quest);
       //   if (this._ui_controller){
       //
       //     //this._ui_controller.UpdateGlider();
       //     //.glideHero.update();
       //   }
       //
       //   // if (ui) {
       //   //     ui.UIController.Isgliding = true;
       //   // }
       //
       //   // this._ui.UpdateGlider();
       // }
    // this.CLIGuy.Update();
      
      
     // if (!this._stateMachine._currentState) {
     //   return;
     // }
//
     // this._input._keys.space = false;
     // this._input._keys.forward = false;
//
     // this._UpdateAI(timeInSeconds);
//
     // this._stateMachine.Update(timeInSeconds, this._input);
//
     // // HARDCODED
     // if (this._stateMachine._currentState._action) {
     //   this.Broadcast({
     //     topic: 'player.action',
     //     action: this._stateMachine._currentState.Name,
     //     time: this._stateMachine._currentState._action.time,
     //   });
     // }
//
     // if (this._mixer) {
     //   this._mixer.update(timeInSeconds);
     // }
    }
  //   HeartBeat() {
  //    // this.CLIGuy.Update();
  //     console.log("hearbeat");
  //    // super.Update(_);
  // //    this._ui_controller.Update();
  //   }

    _onMouseUp(event) {
      
      
      
      const rect = document.getElementById('c').getBoundingClientRect();
      const pos = {
        x: ((event.clientX - rect.left) / rect.width) * 2  - 1,
        y: ((event.clientY - rect.top ) / rect.height) * -2 + 1,
      };

      this._raycaster.setFromCamera(pos, this._params.camera);

      const pickables = this._parent._parent.Filter((e) => {
        const p = e.GetComponent('PickableComponent');
        if (!p) {
          return false;
        }
        return e._mesh;
      });

      const ray = new THREE.Ray();
      ray.origin.setFromMatrixPosition(this._params.camera.matrixWorld);
      ray.direction.set(pos.x, pos.y, 0.5).unproject(
          this._params.camera).sub(ray.origin).normalize();

      // hack
    //  document.getElementById('quest-ui').style.visibility = 'hidden';

      for (let p of pickables) {
        // GOOD ENOUGH
        const box = new THREE.Box3().setFromObject(p._mesh);

        if (ray.intersectsBox(box)) {
          p.Broadcast({
              topic: 'input.picked'
          });
          
         
          break;
        }
      }
    }

    _onKeyDown(event) { var notify=true;
      switch (event.keyCode) {
        case 87: // w
          this._keys.forward = true;
         
          break;
        case 65: // a
          this._keys.left = true;
          break;
        case 83: // s
          this._keys.backward = true;
          break;
        case 68: // d
          this._keys.right = true;
          break;
        case 32: // SPACE
          this._keys.space = true;
          break;
        case 16: // SHIFT
          this._keys.shift = true;
          break;
          default:
            notify=false
      }
      if (notify) {
        var obj = {
          ID:  "420",
          RequestType: event.keyCode,
          Data: "oo"
        };
        this._params.callback(obj);        
      }
     
    }
  
    _onKeyUp(event) {
      switch(event.keyCode) {
        case 87: // w
          this._keys.forward = false;
          break;
        case 65: // a
          this._keys.left = false;
          break;
        case 83: // s
          this._keys.backward = false;
          break;
        case 68: // d
          this._keys.right = false;
          break;
        case 32: // SPACE
          this._keys.space = false;
          break;
        case 16: // SHIFT
          this._keys.shift = false;
          break;
      }
    }
  };

  return {
    BasicCharacterControllerInput: BasicCharacterControllerInput,
    PickableComponent: PickableComponent,
  };

})();