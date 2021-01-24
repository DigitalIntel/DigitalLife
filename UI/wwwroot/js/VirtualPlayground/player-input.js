import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {entity} from "./entity.js";


export const player_input = (() => {

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
      this._params = params;
      this._Init();
    }
  
    _Init() {
      this._keys = {
        forward: false,
        backward: false,
        left: false,
        right: false,
        space: false,
        shift: false,
      };
      this._raycaster = new THREE.Raycaster();
      // for input (using StInput)
      
      //this._input = new StInput(window);
      //document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
      //document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
      //document.addEventListener('mouseup', (e) => this._onMouseUp(e), false);
    }
    _Processinputs(){
      
      
      const input= this._params.localInputs;
      // left mouse button is down
      if (input.down('mouse_left')) {
        console.log("Mouse is down.");
      }

      // left mouse button was released this update call
      if (input.released('mouse_left')) {
        console.log("Mouse was released this update call.");
      }

      // left mouse button was released this update call
      if (input.pressed('mouse_left')) {
        console.log("Mouse was pressed this update call.");
      }

      // keyboard button up arrow was released
      if (input.released('left_arrow')) {
       
        console.log("Left arrow was released this update call.");
      }

      // mouse moved
      if (input.mouseMoving) {
        console.log("Mouse delta:", input.mouseDelta);
      }

      // update input
      input.endFrame();
          
      
      
    }
    
    
    
  
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
          
          console.log("input picked broadcasted");
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