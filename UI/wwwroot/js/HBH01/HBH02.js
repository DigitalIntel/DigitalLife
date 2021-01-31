

 import {entity} from './entity.js';
 import {CLI_Guy} from './CliGuy.js';
 import {Ui_Guy} from './UiGuy.js';
import {ThreeD_Guy} from './3dGuy.js';
//
// import {spatial_hash_grid} from "./spatial-hash-grid";
import {entity_manager} from './entity-manager.js';
// import {CameraGuy} from "./CameraGuy";
import {math} from './math.js';
// import {spatial_grid_controller} from './spatial-grid-controller.js';

export function init(reference){
  let _APP = null;
  _APP = new HBH01();
  return _APP;
}



const _VS = `
varying vec3 vWorldPosition;

void main() {
  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;


const _FS = `
uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float offset;
uniform float exponent;

varying vec3 vWorldPosition;

void main() {
  float h = normalize( vWorldPosition + offset ).y;
  gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
}`;

class HBH01 {

  constructor() {
    this._Initialize();
    
    console.log("I am alive ! ");
    this._entityManager = new entity_manager.EntityManager();
    this.TutorialGuy = new entity.Entity();
   
           this.TutorialGuy.AddComponent(new CLI_Guy.CLI_Guy(),'CliGuy');
           this.TutorialGuy.AddComponent(new Ui_Guy.Ui_Guy(),'Ui_Guy');
    this.TutorialGuy.AddComponent(new ThreeD_Guy.ThreeD_Guy(this._input),'3d_Guy');
      
      // Think of a cell and what it needs to function
      // Need Energy ? - > Get Mitochondria and live together
      // Need Processing power  ? - > Get Nvidia Guy and live together
      
  //  this.TutorialGuy.AddComponent(new TrueAI(),'TrueAI');
    this._entityManager.Add(this.TutorialGuy,'TutorialGuy');
    
    //

    this._previousBeat = null;
     this._Beat();


    // for input (using StInput)
    


  }

  _Beat() {
    requestAnimationFrame((t) => {
      if (this._previousBeat === null) {
        this._previousBeat = t;
      }

      this._Beat();

   
     
     // this._threejs.render(this._scene, this._camera);
      this._Step(t - this._previousBeat);
      this._previousBeat = t;
    });
  }

  _Step(timeElapsed) {
    const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);
    
    // this._UpdateSun();

    this._entityManager.Update(timeElapsed);
  }  
  
  _Initialize() {

  //  this.CLIGuy._Initialize();
    
  }


}

class TrueAI extends entity.Component {
     constructor(params) {
       super();
       this._HeartBeat();

    
       
      
}
    _HeartBeat(){
      //
      // if (this._resizeRendererToDisplaySize(this._threejs)) {
      //   // ui.UpdateGlider();
      //   const canvas = this._threejs.domElement;
      //   this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
      //   this._camera.updateProjectionMatrix();
      //   // this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
      //   // this._BirdViewCAM.updateProjectionMatrix();
      //
      //   // ui.AddQuest(quest);
      //   if (this._ui){
      //
      //     this._ui.glideHero.Remount();
      //   }
      //   this._threejs.render(this._scene, this._camera );
      //   // if (ui) {
      //   //     ui.UIController.Isgliding = true;
      //   // }
      //
      //   // this._ui.UpdateGlider();
      // }


      // console.log("Beat! ");
    };

  Update(timeInSeconds) {
    this._HeartBeat();
  }

}


// export const HBH02 = (() => {
//
//   class PickableComponent extends entity.Component {
//     constructor() {
//       super();
//     }
//
//     InitComponent() {
//     }
//   };
//

//   class BasicCharacterControllerInput extends entity.Component {
//     constructor(params) {
//       super();
//       //
//       // this.CLIGuy= new CLI_Guy.CLI_Guy();
//       // this._ui_controller = new ui_controller.UIController();
//       // this._camera=params.camera;
//       //
//       // this._scene=params.scene;
//       // //this._BirdCam= params.BirdCam;
//       //
//       // this._canvas = document.querySelector('#c');
//       // this._view = document.querySelector('#view');
//       // this._threejs = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas: this._canvas});
//       // this._threejs.antialias = true;
//       //
//       // const fov = 60;
//       // const aspect = 1920 / 1080;
//       // const near = 1.0;
//       // const far = 10000.0;
//       // this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//       // this._camera.position.set(25, 10, 25);
//       // //  this._camera.position.set(100,100,100);
//       // this._camera.lookAt(new THREE.Vector3(0, 0, 0));
//       //
//       //
//       // this._scene = new THREE.Scene();
//       // this._scene.background = new THREE.Color(0x808080);
//       // this._scene.fog = new THREE.FogExp2(0x808080, 0.002);
//       //
//       // // create some random cubes
//       // // create cube geometry
//       // var geometry = new THREE.BoxGeometry(1, 1, 1);
//       // for (var i = 0; i < 100; ++i) {
//       //   var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
//       //   var cube = new THREE.Mesh(geometry, material);
//       //   cube.position.set(Math.random() * 100 - 50, Math.random() * 10, Math.random() * 100 - 50);
//       //   cube.scale.set(1 + Math.random() * 5, 1 + Math.random() * 5, 1 + Math.random() * 5);
//       //   cube.castShadow = false;
//       //   cube.receiveShadow = true;
//       //   this._scene.add(cube);
//       // }
//       //
//       //
//       // let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
//       // light.position.set(-100, 100, 100);
//       // light.target.position.set(0, 0, 0);
//       // light.castShadow = true;
//       // light.shadow.bias = -0.001;
//       // light.shadow.mapSize.width = 4096;
//       // light.shadow.mapSize.height = 4096;
//       // light.shadow.camera.near = 0.1;
//       // light.shadow.camera.far = 500.0;
//       // light.shadow.camera.near = 0.5;
//       // light.shadow.camera.far = 500.0;
//       // light.shadow.camera.left = 50;
//       // light.shadow.camera.right = -50;
//       // light.shadow.camera.top = 50;
//       // light.shadow.camera.bottom = -50;
//       // this._scene.add(light);
//       //
//       // // 
//       // this._sun = light;
//       //
//       // const plane = new THREE.Mesh(
//       //     new THREE.PlaneGeometry(1000, 1000, 100, 100),
//       //     new THREE.MeshStandardMaterial({
//       //       color: 0x808080,
//       //     }));
//       // plane.castShadow = false;
//       // plane.receiveShadow = true;
//       // plane.rotation.x = -Math.PI / 2;
//       // this._scene.add(plane);
//       //
//       // this._entityManager = new entity_manager.EntityManager();
//       // this._grid = new spatial_hash_grid.SpatialHashGrid(
//       //     [[-1000, -1000], [1000, 1000]], [100, 100]);
//       // //  this._cliGuy = new CLI_Guy.UIController();
//       //
//       // this._BirdViewCAM = new THREE.PerspectiveCamera(fov, aspect, near, far);
//       // this._BirdViewCAM.position.set(100, 100, 25);
//       // //  this._camera.position.set(100,100,100);
//       // this._BirdViewCAM.lookAt(new THREE.Vector3(0, 0, 0));
//       //
//       //
//       //
//       // this._params = params;
//       //
//       // this._previousRAF = null;
//       // this._RAF();
//       //
//       // this._Init();
//      
//  
//     }
//     _RAF() {
//       requestAnimationFrame((t) => {
//         if (this._previousRAF === null) {
//           this._previousRAF = t;
//         }
//
//
//         this._RAF();
//         // if (this._resizeRendererToDisplaySize(this._threejs)) {
//         //    // ui.UpdateGlider();
//         //     const canvas = this._threejs.domElement;
//         //     this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
//         //     this._camera.updateProjectionMatrix();
//         //     this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
//         //     this._BirdViewCAM.updateProjectionMatrix();
//         //  
//         //     // ui.AddQuest(quest);
//         //     if (this._ui){
//         //
//         //         this._ui.glideHero.Remount();
//         //     }
//         // 
//         //   // if (ui) {
//         //   //     ui.UIController.Isgliding = true;
//         //   // }
//         //
//         //    // this._ui.UpdateGlider();
//         // }
//
//
//
//
//         //
//         //   if (this._input.released('h')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('let cli= new cli()')
//         //           this._cli.printPrompt("cli : I exist !")
//         //           this._LoadPlayer();
//         //          
//         //           this._cli.println("Welcome to Digital Playground, A visual OS")
//         //           await this._cli.type('Version: 0.8 pre Alpha' + 'Build'+'00068');
//         //           this._cli.println("Press B to load the camera man")
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //       })()
//         //   }
//         //   if (this._input.released('c')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('Loading Camera man"')
//         //                      
//         //           this._LoadGlobalCamera();
//         //           this._cli.println("I am the camera man , I assist you with the views")
//         //           await this._cli.type('..... Loaded!')
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //       })()
//         //      
//         //   }
//         //   if (this._input.released('f')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('fps view"')
//         //
//         //          // this._LoadGlobalCamera();
//         //           this._cli.println("I am the camera man , I follow you")
//         //           await this._cli.type('..... Loaded!')
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //           this._LoadPlayer();
//         //           this._LoadFoliage();
//         //       })()
//         //
//         //   }
//         //
//         //
//         //   if (this._input.released('b')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('bird eye view view"')
//         //
//         //       // this._LoadGlobalCamera();
//         //           this._cli.println("I am the camera man , I follow you")
//         //           await this._cli.type('..... Loaded!')
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //
//         //           this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdViewCAM );
//         //          
//         //          // this._registerPlayer("eros")
//         //        
//         //          
//         //           this._entityManager.Get('player-camera').remove();
//         //           this._scene.activeCamera= this._BirdViewCAM;
//         //         //  this._registerPlayer("eros")
//         //           //  this._LoadFoliage();
//         //       })()
//         //
//         //   }
//         //
//         //
//         //   if (this._input.released('t')) {
//         //
//         //       this._LoadTutorialGuy();
//         //      // this._scene.activeCamera= this._camera;
//         //      
//         //   }
//         //   if (this._input.released('r')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('bird eye view view"')
//         //
//         //           this._LoadGlobalCamera();
//         //           this._cli.println("I am the camera man , I follow you")
//         //           await this._cli.type('..... Loaded!')
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //           // this._LoadPlayer();
//         //           this._LoadRemotePlayer("erosine")
//         //           //  this._LoadFoliage();
//         //       })()
//         //
//         //   }
//         //
//         //
//         //
//         //   if (this._input.released('g')) {
//         //       const h = (async () => {
//         //           this._cli.printPrompt()
//         //           await this._cli.type('Loading Random "')
//         //
//         //           this._registerPlayer("ee");
//         //           this._cli.println("I am the random camera man , I follow you")
//         //           await this._cli.type('..... Loaded!')
//         //           this._cli.println("")
//         //           this._cli.printPrompt()
//         //           var elem = this._cli.container;
//         //           elem.scrollTop = elem.scrollHeight;
//         //           this._LoadPlayer();
//         //           this._LoadFoliage();
//         //       })()
//         //
//         //   }
//
//
//         // this._threejs.render(this._scene, this._BirdViewCAM);
//         this._Step(t - this._previousRAF);
//         this._previousRAF = t;
//
//         //  if (this._input.anyKeyDown){
//
//         //      const h = (async () => {
//         //          this._cli.printPrompt()
//         //        //  await this._cli.type(this._input.anyKeyDown2())
//
//         //      })()
//         //  }
//
//         //this._inputCli.endFrame();
//
//
//       });
//     }
//     _Init() {
//       this.CLIGuy.Update();
//       this._ui_controller.Update();
//       //
//       this._keys = {
//         forward: false,
//         backward: false,
//         left: false,
//         right: false,
//         space: false,
//         shift: false,
//       };
//       this._raycaster = new THREE.Raycaster();
//       this._previousState=0;
//
//
//       this._threejs.outputEncoding = THREE.sRGBEncoding;
//       this._threejs.gammaFactor = 2.2;
//       this._threejs.shadowMap.enabled = true;
//       this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
//
//
//
//
//       // for input (using StInput)
//      
//       this._input = new StInput(window);
//       //document.addEventListener('keydown', (e) => this._onKeyDown(e), false);
//       //document.addEventListener('keyup', (e) => this._onKeyUp(e), false);
//       //document.addEventListener('mouseup', (e) => this._onMouseUp(e), false);
//     }
//     _Step(timeElapsed) {
//       const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);
//       // this.HBH01.BasicCharacterControllerInput().HeartBeat();
//
//       // 
//
//
//       //  this._UpdateOrbitControls(timeElapsed);
//
//    //   this._UpdateSun();
//
//
//       this._entityManager.Update(timeElapsed);
//       // TWEEN.update(timeElapsed);
//     }
//     _Processinputs(){      
//    //  console.log("inputs");
//    //  const input= this._params.localInputs;
//    //  // left mouse button is down
//    //  if (input.down('mouse_left')) {
//    //    console.log("Mouse is down.");
//    //  }
//
//       if (this._params.localInputs.down('z')){ this._keys.forward = true };
//       if (this._params.localInputs.down('q')){  this._keys.left= true};
//       if (this._params.localInputs.down('d')){  this._keys.right = true;};
//       if (this._params.localInputs.down('s')){  this._keys.backward = true;};
//       if (this._params.localInputs.down('shift')){   this._keys.shift = true;};
//       if (this._params.localInputs.down('space')){   this._keys.space = true;};
//
//       if (this._params.localInputs.released('z')){ this._keys.forward = false};
//       if (this._params.localInputs.released('q')){  this._keys.left= false};
//       if (this._params.localInputs.released('d')){  this._keys.right = false;};
//       if (this._params.localInputs.released('s')){  this._keys.backward = false;};
//       if (this._params.localInputs.released('shift')){   this._keys.shift = false;};
//       if (this._params.localInputs.released('space')){   this._keys.space = false;};
//
//      if ( this._params.localInputs.pressed('mouse_left')){
//        this._previousState = 1;
//        return;
//      }
//   
//   if (this._params.localInputs.released('mouse_left') && this._previousState == 1 ) {
//      this._previousState=0;
//
//       
//    
//     // this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
//     // this._camera.updateProjectionMatrix();
//          const canvas = this._params.renderer.domElement;
//          const rect =   this._params.renderer.domElement.getBoundingClientRect();
//           //
//           // const pos = {
//           //     x: ((stinput.mousePosition.x - rect.left) / rect.width) * 2  - 1,
//           //     y: (-(stinput.mousePosition.y - rect.top ) / rect.height) * -2 + 1,
//           //
//           //
//           // };
//               //    mouse.x = (( stinput.mousePosition.x - rect.left) /  canvas.clientWidth  ) * 2 - 1;
//               //    mouse.y = - (( stinput.mousePosition.y - rect.top ) /canvas.clientHeight ) * 2 + 1;
//                   
//                   
//         const pos = {
//           x:  (( this._params.localInputs.mousePosition.x - rect.left) /  canvas.clientWidth  ) * 2 - 1,
//           y:  - (( this._params.localInputs.mousePosition.y - rect.top ) /canvas.clientHeight ) * 2 + 1,
//         };
//   
//
//
//
//
//     //console.log("mouse position X " +this._params.localInputs.mousePosition.x);
//     //  
//     //   console.log("posX" + pos.x);
//     //  
//     //   console.log("Camera position Y  " + this._params.localInputs.mousePosition.x); 
//     //   console.log("posY" + pos.y);
//     //  console.log("posY" + pos.y);
//        
//       
//    
//         this._raycaster.setFromCamera(pos, this._params.camera);
//
//         const pickables = this._parent._parent.Filter((e) => {
//           const p = e.GetComponent('PickableComponent');
//           if (!p) {
//             return false;
//           }
//           return e._mesh;
//         });
//
//         const ray = new THREE.Ray();
//         ray.origin.setFromMatrixPosition(this._params.camera.matrixWorld);
//         ray.direction.set(pos.x, pos.y, 0.5).unproject(
//             this._params.camera).sub(ray.origin).normalize();
//
//         // hack
//         //  document.getElementById('quest-ui').style.visibility = 'hidden';
//
//         for (let p of pickables) {
//           // GOOD ENOUGH
//           const box = new THREE.Box3().setFromObject(p._mesh);
//
//           if (ray.intersectsBox(box)) {
//             p.Broadcast({
//               topic: 'input.picked'
//            
//             });
//             //console.alert("clicked");
//         //    this._input._resetAll();
//             break;
//           }
//         }
//
//
//       }
//
//  
//
//      
//     }
//    
//     _resizeRendererToDisplaySize(renderer) {
//       const canvas = renderer.domElement;
//       const width = canvas.clientWidth;
//       const height = canvas.clientHeight;
//       const needResize = canvas.width !== width || canvas.height !== height;
//       if (needResize) {
//      //   renderer.setSize(width, height, false);
//         //glideHero.mount();
//         this._ui_controller.Remount();
//       }
//       return needResize;
//     }
//     Update(timeInSeconds) {
//
//        if (this._resizeRendererToDisplaySize( this._threejs)) {
//          // ui.UpdateGlider();
//       
//          const canvas =  this._threejs.domElement;
//          this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
//          this._camera.updateProjectionMatrix();
//          this._BirdCam.aspect = canvas.clientWidth / canvas.clientHeight;
//          this._BirdCam.updateProjectionMatrix();
//          this._threejs.setSize(canvas.width, canvas.height, false);
//      //    this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdCam );
//          // ui.AddQuest(quest);
//        //  this._ui_controller.Update();
//          if (this._ui){
//      
//            this._ui.glideHero.Remount();
//          }
//      
//          // if (ui) {
//          //     ui.UIController.Isgliding = true;
//          // }
//      
//          // this._ui.UpdateGlider();
//        }
//
//      // this._threejs.render(this._scene, this._BirdViewCAM);
//      
//    
//       //this._ui_controller._LoadUI();       // 
//       // 
//       // 
//       // if (this._resizeRendererToDisplaySize(  this._params.renderer)) {
//       //   this.CLIGuy.Update();
//       // if (this._resizeRendererToDisplaySize(this._threejs)) {
//       //   // ui.UpdateGlider();
//       //   const canvas = this._threejs.domElement;
//       //   this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       //   this._camera.updateProjectionMatrix();
//       //   this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
//       //   this._BirdViewCAM.updateProjectionMatrix();
//       //
//       //   // ui.AddQuest(quest);
//       //   if (this._ui){
//       //
//       //     this._ui.glideHero.Remount();
//       //   }     
//       // }
//       //
//
//
//
//       // this._ui_controller.UpdateGlider();
//       // }
//        //   // ui.UpdateGlider();
//        //   const canvas =  this._params.renderer;
//        //   this._params.aspect = canvas.clientWidth / canvas.clientHeight;
//        //   this._params.camera.updateProjectionMatrix();
//        //   this._params.camera.aspect = canvas.clientWidth / canvas.clientHeight;
//        //   this._params.camera.updateProjectionMatrix();
//        //
//        //   // ui.AddQuest(quest);
//        //   if (this._ui_controller){
//        //
//        //     //this._ui_controller.UpdateGlider();
//        //     //.glideHero.update();
//        //   }
//        //
//        //   // if (ui) {
//        //   //     ui.UIController.Isgliding = true;
//        //   // }
//        //
//        //   // this._ui.UpdateGlider();
//        // }
//     // this.CLIGuy.Update();
//      
//      
//      // if (!this._stateMachine._currentState) {
//      //   return;
//      // }
// //
//      // this._input._keys.space = false;
//      // this._input._keys.forward = false;
// //
//      // this._UpdateAI(timeInSeconds);
// //
//      // this._stateMachine.Update(timeInSeconds, this._input);
// //
//      // // HARDCODED
//      // if (this._stateMachine._currentState._action) {
//      //   this.Broadcast({
//      //     topic: 'player.action',
//      //     action: this._stateMachine._currentState.Name,
//      //     time: this._stateMachine._currentState._action.time,
//      //   });
//      // }
// //
//      // if (this._mixer) {
//      //   this._mixer.update(timeInSeconds);
//      // }
//     }
//   //   HeartBeat() {
//   //    // this.CLIGuy.Update();
//   //     console.log("hearbeat");
//   //    // super.Update(_);
//   // //    this._ui_controller.Update();
//   //   }
//
//     _onMouseUp(event) {
//      
//      
//      
//       const rect = document.getElementById('c').getBoundingClientRect();
//       const pos = {
//         x: ((event.clientX - rect.left) / rect.width) * 2  - 1,
//         y: ((event.clientY - rect.top ) / rect.height) * -2 + 1,
//       };
//
//       this._raycaster.setFromCamera(pos, this._params.camera);
//
//       const pickables = this._parent._parent.Filter((e) => {
//         const p = e.GetComponent('PickableComponent');
//         if (!p) {
//           return false;
//         }
//         return e._mesh;
//       });
//
//       const ray = new THREE.Ray();
//       ray.origin.setFromMatrixPosition(this._params.camera.matrixWorld);
//       ray.direction.set(pos.x, pos.y, 0.5).unproject(
//           this._params.camera).sub(ray.origin).normalize();
//
//       // hack
//     //  document.getElementById('quest-ui').style.visibility = 'hidden';
//
//       for (let p of pickables) {
//         // GOOD ENOUGH
//         const box = new THREE.Box3().setFromObject(p._mesh);
//
//         if (ray.intersectsBox(box)) {
//           p.Broadcast({
//               topic: 'input.picked'
//           });
//          
//         
//           break;
//         }
//       }
//     }
//
//     _onKeyDown(event) { var notify=true;
//       switch (event.keyCode) {
//         case 87: // w
//           this._keys.forward = true;
//         
//           break;
//         case 65: // a
//           this._keys.left = true;
//           break;
//         case 83: // s
//           this._keys.backward = true;
//           break;
//         case 68: // d
//           this._keys.right = true;
//           break;
//         case 32: // SPACE
//           this._keys.space = true;
//           break;
//         case 16: // SHIFT
//           this._keys.shift = true;
//           break;
//           default:
//             notify=false
//       }
//       if (notify) {
//         var obj = {
//           ID:  "420",
//           RequestType: event.keyCode,
//           Data: "oo"
//         };
//         this._params.callback(obj);        
//       }
//     
//     }
//  
//     _onKeyUp(event) {
//       switch(event.keyCode) {
//         case 87: // w
//           this._keys.forward = false;
//           break;
//         case 65: // a
//           this._keys.left = false;
//           break;
//         case 83: // s
//           this._keys.backward = false;
//           break;
//         case 68: // d
//           this._keys.right = false;
//           break;
//         case 32: // SPACE
//           this._keys.space = false;
//           break;
//         case 16: // SHIFT
//           this._keys.shift = false;
//           break;
//       }
//     }
//   };
//
//   return {
//     BasicCharacterControllerInput: BasicCharacterControllerInput,
//     PickableComponent: PickableComponent,
//   };
//
// })();