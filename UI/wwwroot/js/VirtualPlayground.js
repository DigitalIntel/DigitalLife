import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118.1/build/three.module.js';

import {third_person_camera} from '../js/VirtualPlayground/third-person-camera.js';
import {entity_manager} from '../js/VirtualPlayground/entity-manager.js';
import {player_entity} from '../js/VirtualPlayground/player-entity.js'
import {remotePlayer_entity} from '../js/VirtualPlayground/remotePlayer-entity.js'
import {entity} from '../js/VirtualPlayground/entity.js';
import {gltf_component} from '../js/VirtualPlayground/gltf-component.js';
import {health_component} from '../js/VirtualPlayground/health-component.js';
import {player_input} from '../js/VirtualPlayground/player-input.js';

import {remotePlayer_input} from '../js/VirtualPlayground/remotePlayer_input.js';

import {npc_entity} from '../js/VirtualPlayground/npc-entity.js';
import {math} from '../js/VirtualPlayground/math.js';
import {spatial_hash_grid} from '../js/VirtualPlayground/spatial-hash-grid.js';
//import {ui_controller} from '../js/VirtualPlayground/ui-controller.js';
import {health_bar} from '../js/VirtualPlayground/health-bar.js';
import {level_up_component} from '../js/VirtualPlayground/level-up-component.js';
import {quest_component} from '../js/VirtualPlayground/quest-component.js';
import {spatial_grid_controller} from '../js/VirtualPlayground/spatial-grid-controller.js';
import {inventory_controller} from '../js/VirtualPlayground/inventory-controller.js';
import {equip_weapon_component} from '../js/VirtualPlayground/equip-weapon-component.js';
import {attack_controller} from '../js/VirtualPlayground/attacker-controller.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/controls/OrbitControls.js';
import { SimpleOrbitControls } from '../js/VirtualPlayground/orbitctrl.js'

//import {CLI_Guy} from "../js/VirtualPlayground/CliGuy.js";
import TWEEN from "../js/tweenmin.js";
//import {HBH00} from "../js/VirtualPlayground/HBH01.js";
//
//

import { HBH02} from '../js/VirtualPlayground/HBH02.js';


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


let caller;
let livestateman;
export function init(reference){
    let _APP = null;
    

    _APP = new HackNSlashDemo();
    caller=reference;
    caller.invokeMethodAsync('initializedfromJs');
 
    
    
  

    
    console.log("intialized from Js");
    return _APP;

}


class LiveStateHandler {
    constructor() {
        this._Initialize();
    }
    _Initialize() {
        this.message = "empty";
        this._HelloFromLiveState(params);

    }

    _HelloFromLiveState(params){
        
        //let a=params""
        
        
        }

    
}





class HackNSlashDemo {

    constructor() {
        this._Initialize();
    }

    _Initialize() {
        this._GlobalCamera=false;
        this._ui=null;
        this._cli=null;
        this.HBH01=null;
   
        this._canvas = document.querySelector('#c');
        this._view = document.querySelector('#view');
        this._threejs = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas: this._canvas});
        this._threejs.antialias = true;
     //   
        //this._LoadUI();
        this.Attention = "Canvas"


        this._lastTime = (new Date()).getTime();


        this._threejs.outputEncoding = THREE.sRGBEncoding;
        this._threejs.gammaFactor = 2.2;
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;


        const fov = 60;
        const aspect = 1920 / 1080;
        const near = 1.0;
        const far = 10000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._camera.position.set(25, 10, 25);
        //  this._camera.position.set(100,100,100);
        this._camera.lookAt(new THREE.Vector3(0, 0, 0));


        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color(0x808080);
        this._scene.fog = new THREE.FogExp2(0x808080, 0.002);

        // create some random cubes
        // create cube geometry
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        for (var i = 0; i < 100; ++i) {
            var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
            var cube = new THREE.Mesh(geometry, material);
            cube.position.set(Math.random() * 100 - 50, Math.random() * 10, Math.random() * 100 - 50);
            cube.scale.set(1 + Math.random() * 5, 1 + Math.random() * 5, 1 + Math.random() * 5);
            cube.castShadow = false;
            cube.receiveShadow = true;
            this._scene.add(cube);
        }


        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(-100, 100, 100);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 4096;
        light.shadow.mapSize.height = 4096;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 50;
        light.shadow.camera.right = -50;
        light.shadow.camera.top = 50;
        light.shadow.camera.bottom = -50;
        this._scene.add(light);

        // 
        this._sun = light;

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(1000, 1000, 100, 100),
            new THREE.MeshStandardMaterial({
                color: 0x808080,
            }));
        plane.castShadow = false;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        this._scene.add(plane);

        this._entityManager = new entity_manager.EntityManager();
        this._grid = new spatial_hash_grid.SpatialHashGrid(
            [[-1000, -1000], [1000, 1000]], [100, 100]);
      //  this._cliGuy = new CLI_Guy.UIController();
  
        this._BirdViewCAM = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this._BirdViewCAM.position.set(100, 100, 25);
        //  this._camera.position.set(100,100,100);
        this._BirdViewCAM.lookAt(new THREE.Vector3(0, 0, 0));
        this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdViewCAM );
        
       // this._LoadTutorialGuy();

         this._LoadControllers();
         
       //this._LoadPlayer();
     //   this._registerPlayer("eron");
        // this._LoadFoliage();
        //  this._registerPlayer("masterid")
      // this._LoadClouds();
      // this._LoadSky();
//
        this._previousRAF = null;
        this._RAF();
    }

    _LoadControllers() {
        const params = {
            camera: this._camera,
            scene: this._scene,
            callback: this.BroadcastEvent,
            localInputs: this._input,
            renderer: this._threejs,
            cli: this._cli,
            csharp: this.caller,
            SetAttention : this.SetAttention
        };
        this.HBH01 = new entity.Entity();

       this.HBH01.AddComponent(new HBH02.BasicCharacterControllerInput(params));
      //  this.HBH01.AddComponent(new HBH02.BasicCharacterControllerInput(params));
       
        this._entityManager.Add( this.HBH01,'HBH01');
        //this._ui =this._entityManager.Get ('HBH01').
       // this.HBH01.AddComponent(new player_entity.BasicCharacterController(params));
       // this.HBH01.AddComponent(new player_input.PickableComponent(params));
//
        
        
       // this.HBH01.AddComponent(this.HBH01,HBH00);
     //  this.HBH01.AddComponent('UIController');
       // 
        
        
    


        ;
      // const HBH01 = new entity.Entity();
      // HBH01.AddComponent(new HBH00().HBH01());
       // HBH01.AddComponent(new gltf_component.AnimatedModelComponent({
       //     scene: this._scene,
       //     resourcePath: './resources/girl/',
       //     resourceName: 'peasant_girl.fbx',
       //     resourceAnimation: 'Standing Idle.fbx',
       //     scale: 0.035,
       //     receiveShadow: true,
       //     castShadow: true,
       // }));
       // HBH01.AddComponent(new spatial_grid_controller.SpatialGridController({
       //     grid: this._grid,
       // }));
       // HBH01.AddComponent(new player_input.PickableComponent(params));
       // HBH01.AddComponent(new quest_component.QuestComponent(params));
     //  HBH01.SetPosition(new THREE.Vector3(30, 0, 0));
     //  this._entityManager.Add(HBH01);
       
        //this.HBH01.SayHI();
       // this._cli = new entity.Entity();
       // this._cli
      //  this.HBH01.AddComponent();
        //this.HBH01.SetPosition(new THREE.Vector3(60, 0, 0));
       // this.HBH01.SetPosition(pos);
       // this._entityManager.Add(this.HBH01);
        
        
        //this.HBH01.AddComponent(this.HBH01 ,'HBH01');
     //   this.HBH01.AddComponent()
     // this._entityManager.Add(  this.HBH01,'HBH01');
       // this._ui=this._entityManager.Get('HBH01').GetComponent('UIController');
       // this._cli=this._entityManager.Get('HBH01').GetComponent('CLI_Guy')
      // // const cli = this._entityManager.Add(ui, 'ui');
      //
      //  this._ui=this._entityManager.Get('ui').GetComponent('UIController');;
//
      //  const cli= new entity.Entity();
      //  cli.AddComponent(new CLI_Guy.CLI_Guy());
      //  this._entityManager.Add( cli,'cli');
      //
      // // this._cli = this._entityManager.Get('ui').GetComponent('UIController');
      //  this._cli=this._entityManager.Get('cli').GetComponent('CLI_Guy');
//
//
      //  const att= new entity.Entity();
      //  att.AddComponent(new CLI_Guy.CLI_Guy());
      //  this._entityManager.Add( att,'CONTEXT_Guy');
      //  this._context= this._entityManager.Get('CONTEXT_Guy').GetComponent('Context_Guy');
      //  
        // this._cli = this._entityManager.Get('ui').GetComponent('UIController');
      //  this._cli=this._entityManager.Get('cli').GetComponent('CLI_Guy');
        
    }

    _LoadSky() {
        const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFFF, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        this._scene.add(hemiLight);

        const uniforms = {
            "topColor": {value: new THREE.Color(0x0077ff)},
            "bottomColor": {value: new THREE.Color(0xffffff)},
            "offset": {value: 33},
            "exponent": {value: 0.6}
        };
        uniforms["topColor"].value.copy(hemiLight.color);

        this._scene.fog.color.copy(uniforms["bottomColor"].value);

        const skyGeo = new THREE.SphereBufferGeometry(1000, 32, 15);
        const skyMat = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: _VS,
            fragmentShader: _FS,
            side: THREE.BackSide
        });

        const sky = new THREE.Mesh(skyGeo, skyMat);
        this._scene.add(sky);
    }

    _LoadClouds() {
        for (let i = 0; i < 20; ++i) {
            const index = math.rand_int(1, 3);
            const pos = new THREE.Vector3(
                (Math.random() * 2.0 - 1.0) * 500,
                100,
                (Math.random() * 2.0 - 1.0) * 500);

            const e = new entity.Entity();
            e.AddComponent(new gltf_component.StaticModelComponent({
                scene: this._scene,
                resourcePath: './resources/nature2/GLTF/',
                resourceName: 'Cloud' + index + '.glb',
                position: pos,
                scale: Math.random() * 5 + 10,
                emissive: new THREE.Color(0x808080),
            }));
            e.SetPosition(pos);
            this._entityManager.Add(e);
            e.SetActive(false);
        }
    }

    _LoadFoliage() {
        for (let i = 0; i < 100; ++i) {
            const names = [
                'CommonTree_Dead', 'CommonTree',
                'BirchTree', 'BirchTree_Dead',
                'Willow', 'Willow_Dead',
                'PineTree',
            ];
            const name = names[math.rand_int(0, names.length - 1)];
            const index = math.rand_int(1, 5);

            const pos = new THREE.Vector3(
                (Math.random() * 2.0 - 1.0) * 500,
                0,
                (Math.random() * 2.0 - 1.0) * 500);

            const e = new entity.Entity();
            e.AddComponent(new gltf_component.StaticModelComponent({
                scene: this._scene,
                resourcePath: './resources/nature/FBX/',
                resourceName: name + '_' + index + '.fbx',
                scale: 0.25,
                emissive: new THREE.Color(0x000000),
                specular: new THREE.Color(0x000000),
                receiveShadow: true,
                castShadow: true,
            }));
            e.AddComponent(
                new spatial_grid_controller.SpatialGridController({grid: this._grid}));
            e.SetPosition(pos);
            this._entityManager.Add(e);
            e.SetActive(false);
        }
    }

    _LoadPlayer() {
        const params = {
            camera: this._camera,
            scene: this._scene,
            callback: this.BroadcastEvent({cli: this._cli,id:"_loadplayer"}),
            localInputs: this._input,
            renderer: this._threejs,
            cli: this._cli,
            SetAttention : this.SetAttention
        };
        const girl = new entity.Entity();
        girl.AddComponent(new gltf_component.AnimatedModelComponent({
            scene: this._scene,
            resourcePath: './resources/girl/',
            resourceName: 'peasant_girl.fbx',
            resourceAnimation: 'Standing Idle.fbx',
            scale: 0.035,
            receiveShadow: true,
            castShadow: true,
        }));
        girl.AddComponent(new spatial_grid_controller.SpatialGridController({
            grid: this._grid,
        }));
        girl.AddComponent(new player_input.PickableComponent(params));
        girl.AddComponent(new quest_component.QuestComponent(params));
        girl.SetPosition(new THREE.Vector3(30, 0, 0));
        this._entityManager.Add(girl);
        
        
        /*
                const levelUpSpawner = new entity.Entity();
                levelUpSpawner.AddComponent(new level_up_component.LevelUpComponentSpawner({
                    camera: this._camera,
                    scene: this._scene,
                }));
                this._entityManager.Add(levelUpSpawner, 'level-up-spawner');
        
                const axe = new entity.Entity();
                axe.AddComponent(new inventory_controller.InventoryItem({
                    type: 'weapon',
                    damage: 3,
                    renderParams: {
                        name: 'Axe',
                        scale: 0.25,
                        icon: 'war-axe-64.png',
                    },
                }));
                this._entityManager.Add(axe);
        
                const sword = new entity.Entity();
                sword.AddComponent(new inventory_controller.InventoryItem({
                    type: 'weapon',
                    damage: 3,
                    renderParams: {
                        name: 'Sword',
                        scale: 0.25,
                        icon: 'pointy-sword-64.png',
                    },
                }));
                this._entityManager.Add(sword);
        */
 
        
        const player = new entity.Entity();
        player.AddComponent(new player_input.BasicCharacterControllerInput(params));
        player.AddComponent(new player_entity.BasicCharacterController(params));
        player.AddComponent(new player_input.PickableComponent(params));

        /* player.AddComponent(
        //     new equip_weapon_component.EquipWeapon({anchor: 'RightHandIndex1'}));
      //   player.AddComponent(new inventory_controller.InventoryController(params));
         player.AddComponent(new health_component.HealthComponent({
             updateUI: true,
             health: 100,
             maxHealth: 100,
             strength: 50,
             wisdomness: 5,
             benchpress: 20,
             curl: 100,
             experience: 0,
             level: 1,
         }));
         
         */
        player.AddComponent(
            new spatial_grid_controller.SpatialGridController({grid: this._grid}));
        player.AddComponent(new attack_controller.AttackController({timing: 0.7}));
        this._entityManager.Add(player, 'player');
        const camera = new entity.Entity();

        camera.AddComponent(
            new third_person_camera.ThirdPersonCamera({
                camera: this._camera,
                target: this._entityManager.Get('player')
            }));

        this._entityManager.Add(camera, 'player-camera');
        
        
        
        
        

        //  player.Broadcast({
        //      topic: 'inventory.add',
        //      value: axe.Name,
        //      added: false,
        //  });
//
        //   player.Broadcast({
        //       topic: 'inventory.add',
        //       value: sword.Name,
        //       added: false,
        //   });
//
        //   player.Broadcast({
        //       topic: 'inventory.equip',
        //       value: sword.Name,
        //       added: false,
        //   });
//


        /* for (let i = 0; i < 50; ++i) {
             const monsters = [
                 {
                     resourceName: 'Ghost.fbx',
                     resourceTexture: 'Ghost_Texture.png',
                 },
                 {
                     resourceName: 'Alien.fbx',
                     resourceTexture: 'Alien_Texture.png',
                 },
                 {
                     resourceName: 'Skull.fbx',
                     resourceTexture: 'Skull_Texture.png',
                 },
                 {
                     resourceName: 'GreenDemon.fbx',
                     resourceTexture: 'GreenDemon_Texture.png',
                 },
                 {
                     resourceName: 'Cyclops.fbx',
                     resourceTexture: 'Cyclops_Texture.png',
                 },
                 {
                     resourceName: 'Cactus.fbx',
                     resourceTexture: 'Cactus_Texture.png',
                 },
             ];
             const m = monsters[math.rand_int(0, monsters.length - 1)];
 
             const npc = new entity.Entity();
             npc.AddComponent(new npc_entity.NPCController({
                 camera: this._camera,
                 scene: this._scene,
                 resourceName: m.resourceName,
                 resourceTexture: m.resourceTexture,
             }));
          /*   npc.AddComponent(
                 new health_component.HealthComponent({
                     health: 50,
                     maxHealth: 50,
                     strength: 2,
                     wisdomness: 2,
                     benchpress: 3,
                     curl: 1,
                     experience: 0,
                     level: 1,
                     camera: this._camera,
                     scene: this._scene,
                 }));
                 
           
             npc.AddComponent(
                 new spatial_grid_controller.SpatialGridController({grid: this._grid}));
          //  npc.AddComponent(new health_bar.HealthBar({
          //      parent: this._scene,
          //      camera: this._camera,
          //  }));
             npc.AddComponent(new attack_controller.AttackController({timing: 0.35}));
             npc.SetPosition(new THREE.Vector3(
                 (Math.random() * 2 - 1) * 500,
                 0,
                 (Math.random() * 2 - 1) * 500));
             this._entityManager.Add(npc);
         }*/
    }

    _LoadRemotePlayer(id) {

        const npc = new entity.Entity();
        npc.AddComponent(new remotePlayer_entity.NPCController({
            camera: this._camera,
            scene: this._scene,

        }));
        npc.AddComponent(new remotePlayer_input.BasicCharacterControllerInput());


        npc.AddComponent(
            new spatial_grid_controller.SpatialGridController({grid: this._grid}));

        npc.AddComponent(new attack_controller.AttackController({timing: 0.35}));
        npc.SetPosition(new THREE.Vector3(
            (Math.random() * 2 - 1) * 7000,
            0,
            (Math.random() * 2 - 1) * 6900));
        this._entityManager.Add(npc);


    }




    _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
    }

    _UpdateSun() {


     

        const player = this._entityManager.Get('player');

        if (player) {
            const pos = player._position;
            this._sun.position.copy(pos);
            this._sun.position.add(new THREE.Vector3(-100, 100, 100));
            this._sun.target.position.copy(pos);
            this._sun.updateMatrixWorld();
            this._sun.target.updateMatrixWorld();
        }
        //const ui = this._entityManager.Get('ui').GetComponent('');


        //if (ui) {
        //    ui.UIController.Isgliding = false;
        //}
        
   

    }

    _SetAttention(element) {
        this.Attention = element;
    }

    _resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
            //glideHero.mount();
        }
        return needResize;
    }


    _RAF() {
        requestAnimationFrame((t) => {
            if (this._previousRAF === null) {
                this._previousRAF = t;
            }
        
            
            this._RAF();
             if (this._resizeRendererToDisplaySize(this._threejs)) {
                // ui.UpdateGlider();
                 const canvas = this._threejs.domElement;
                 this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
                 this._camera.updateProjectionMatrix();
                 this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
                 this._BirdViewCAM.updateProjectionMatrix();
                 
                 // ui.AddQuest(quest);
                 if (this._ui){

                     this._ui.glideHero.update();
                 }
                
               // if (ui) {
               //     ui.UIController.Isgliding = true;
               // }
               
                // this._ui.UpdateGlider();
             }
          //
          //   if (this._input.released('h')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('let cli= new cli()')
          //           this._cli.printPrompt("cli : I exist !")
          //           this._LoadPlayer();
          //          
          //           this._cli.println("Welcome to Digital Playground, A visual OS")
          //           await this._cli.type('Version: 0.8 pre Alpha' + 'Build'+'00068');
          //           this._cli.println("Press B to load the camera man")
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //       })()
          //   }
          //   if (this._input.released('c')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('Loading Camera man"')
          //                      
          //           this._LoadGlobalCamera();
          //           this._cli.println("I am the camera man , I assist you with the views")
          //           await this._cli.type('..... Loaded!')
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //       })()
          //      
          //   }
          //   if (this._input.released('f')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('fps view"')
          //
          //          // this._LoadGlobalCamera();
          //           this._cli.println("I am the camera man , I follow you")
          //           await this._cli.type('..... Loaded!')
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //           this._LoadPlayer();
          //           this._LoadFoliage();
          //       })()
          //
          //   }
          //
          //
          //   if (this._input.released('b')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('bird eye view view"')
          //
          //       // this._LoadGlobalCamera();
          //           this._cli.println("I am the camera man , I follow you")
          //           await this._cli.type('..... Loaded!')
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //
          //           this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdViewCAM );
          //          
          //          // this._registerPlayer("eros")
          //        
          //          
          //           this._entityManager.Get('player-camera').remove();
          //           this._scene.activeCamera= this._BirdViewCAM;
          //         //  this._registerPlayer("eros")
          //           //  this._LoadFoliage();
          //       })()
          //
          //   }
          //
          //
          //   if (this._input.released('t')) {
          //
          //       this._LoadTutorialGuy();
          //      // this._scene.activeCamera= this._camera;
          //      
          //   }
          //   if (this._input.released('r')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('bird eye view view"')
          //
          //           this._LoadGlobalCamera();
          //           this._cli.println("I am the camera man , I follow you")
          //           await this._cli.type('..... Loaded!')
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //           // this._LoadPlayer();
          //           this._LoadRemotePlayer("erosine")
          //           //  this._LoadFoliage();
          //       })()
          //
          //   }
          //
          //
          //
          //   if (this._input.released('g')) {
          //       const h = (async () => {
          //           this._cli.printPrompt()
          //           await this._cli.type('Loading Random "')
          //
          //           this._registerPlayer("ee");
          //           this._cli.println("I am the random camera man , I follow you")
          //           await this._cli.type('..... Loaded!')
          //           this._cli.println("")
          //           this._cli.printPrompt()
          //           var elem = this._cli.container;
          //           elem.scrollTop = elem.scrollHeight;
          //           this._LoadPlayer();
          //           this._LoadFoliage();
          //       })()
          //
          //   }


            this._threejs.render(this._scene, this._BirdViewCAM);
            this._Step(t - this._previousRAF);
            this._previousRAF = t;

            //  if (this._input.anyKeyDown){

            //      const h = (async () => {
            //          this._cli.printPrompt()
            //        //  await this._cli.type(this._input.anyKeyDown2())

            //      })()
            //  }
          
            //this._inputCli.endFrame();


        });
    }

    _UpdateOrbitControls(timeElapsed) {

        if (this.Attention === "Canvas") {


            // decide what to move and get mouse delta
            var rotateCamera = this._input.mouseDown(this._input.MouseButtons.right);
            var moveCamera = this._input.mouseDown(this._input.MouseButtons.left);
            var mouseDelta = this._input.mouseDelta;

            // zoom value
            var zoom = this._input.mouseWheel;
            if (this._input.down('page_up')) zoom += 10;
            else if (this._input.down('page_down')) zoom -= 10;

            // update controls
            this._SimpleOrbitControls.update({
                deltaTime: timeElapsed / 1000,
                rotateHorizontally: rotateCamera ? -mouseDelta.x : 0,
                rotateVertically: rotateCamera ? -mouseDelta.y : 0,
                moveOffsetVertically: (moveCamera ? -mouseDelta.y : 0) * 10,
                moveOffsetHorizontally: (moveCamera ? mouseDelta.x : 0) * 10,
                zoom: zoom * 10,
            });


        }


    }

    _Step(timeElapsed) {
        const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);
       // this.HBH01.BasicCharacterControllerInput().HeartBeat();

        // 
        
    
      //  this._UpdateOrbitControls(timeElapsed);
     
        this._UpdateSun();


        this._entityManager.Update(timeElapsed);
       // TWEEN.update(timeElapsed);
    }
    

    _registerPlayer(id) {

        console.log("registered player id" + id);
        //  this._LoadControllers();
        this._LoadPlayer(id);
        const camera = new entity.Entity();
        camera.AddComponent(
            new third_person_camera.ThirdPersonCamera({
                camera: this._camera,
                target: this._entityManager.Get('player')
            }));

        this._entityManager.Add(camera, 'player-camera');

    }
  

    _ToggleCamera() {

        console.log("Toggling Camera");
        //  this._LoadControllers();
        this._LoadPlayer(id);

    }

    getEntitymanager() {

        return this._entityManager;

    }

    helloFromLiveComponent(caller) {
       //console.log("Hello From Live Component");
       ////this._registerPlayer();
       livestateman = caller;
       //var obj = {
       //    ID: "99",
       //    RequestType: 969,
       //    Data: "ooxx"
       //};
        //livestateman.invokeMethodAsync('helloBack_LiveStateHandler', {this._ui,this.UI });

    }

    BroadcastEvent(params) {
//        console.log("Broadcasting event");

        
       params.cli.println("")
        params.cli.type("executing C# function")
        params.cli.type(params.id)
        params.cli.printCursor()
        params.cli.println("")
        params.cli.printCursor()
       // this._LoadGlobalCamera();
       // this._caller.invokeMethodAsync('hello_LiveStateHandler');

    }

    SetAttention(params){

        let position = { x : 60, y: 40 };
        let target = { x : 10, y: 90 };
        let tween = new TWEEN.Tween(position).to(target, 2000);
        tween.onUpdate(function(){
            Split.sizes=[ position.x, position.y]
            this._camera.position = position.x;
        });
        
        
       this.Attention=string;
     //   params._
        params._cli.type("Attention : " + this.Attention)
        params._cli.println("");
        params._cli.printPrompt();
        params._cli.printCursor();
        
    }
    LoadMouseTester() {
        let renderer, scene, camera, stats;
        let pointclouds;
        let raycaster;
        let intersection = null;
        let spheresIndex = 0;
        let clock;
        let toggle = 0;


        const pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), width, length);
        pcBuffer.scale.set(5, 10, 10);
        pcBuffer.position.set(-5, 0, 0);
        this._scene.add(pcBuffer);

        const pcIndexed = generateIndexedPointcloud(new THREE.Color(0, 1, 0), width, length);
        pcIndexed.scale.set(5, 10, 10);
        pcIndexed.position.set(0, 0, 0);
        this._scene.add(pcIndexed);

        const pcIndexedOffset = generateIndexedWithOffsetPointcloud(new THREE.Color(0, 1, 1), width, length);
        pcIndexedOffset.scale.set(5, 10, 10);
        pcIndexedOffset.position.set(5, 0, 0);
        this._scene.add(pcIndexedOffset);

        pointclouds = [pcBuffer, pcIndexed, pcIndexedOffset];

        //

        const sphereGeometry = new THREE.SphereBufferGeometry(0.1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});

        for (let i = 0; i < 40; i++) {

            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            this._scene.add(sphere);
            spheres.push(sphere);

            const spheres = [];

            const threshold = 0.1;
            const pointSize = 0.05;
            const width = 80;
            const length = 160;
            const rotateY = new THREE.Matrix4().makeRotationY(0.005);

        }


    }
    generatePointCloudGeometry( color, width, length ) {

        const geometry = new THREE.BufferGeometry();
        const numPoints = width * length;

        const positions = new Float32Array( numPoints * 3 );
        const colors = new Float32Array( numPoints * 3 );

        let k = 0;

        for ( let i = 0; i < width; i ++ ) {

            for ( let j = 0; j < length; j ++ ) {

                const u = i / width;
                const v = j / length;
                const x = u - 0.5;
                const y = ( Math.cos( u * Math.PI * 4 ) + Math.sin( v * Math.PI * 8 ) ) / 20;
                const z = v - 0.5;

                positions[ 3 * k ] = x;
                positions[ 3 * k + 1 ] = y;
                positions[ 3 * k + 2 ] = z;

                const intensity = ( y + 0.1 ) * 5;
                colors[ 3 * k ] = color.r * intensity;
                colors[ 3 * k + 1 ] = color.g * intensity;
                colors[ 3 * k + 2 ] = color.b * intensity;

                k ++;

            }

        }

        geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
        geometry.computeBoundingBox();

        return geometry;

    }
    generatePointcloud( color, width, length ) {

        const geometry = generatePointCloudGeometry( color, width, length );
        const material = new THREE.PointsMaterial( { size: pointSize, vertexColors: true } );

        return new THREE.Points( geometry, material );

    }

    generateIndexedPointcloud( color, width, length ) {

        const geometry = generatePointCloudGeometry( color, width, length );
        const numPoints = width * length;
        const indices = new Uint16Array( numPoints );

        let k = 0;

        for ( let i = 0; i < width; i ++ ) {

            for ( let j = 0; j < length; j ++ ) {

                indices[ k ] = k;
                k ++;

            }

        }

        geometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );

        const material = new THREE.PointsMaterial( { size: pointSize, vertexColors: true } );

        return new THREE.Points( geometry, material );

    }
    generateIndexedWithOffsetPointcloud( color, width, length ) {

        const geometry = generatePointCloudGeometry( color, width, length );
        const numPoints = width * length;
        const indices = new Uint16Array( numPoints );

        let k = 0;

        for ( let i = 0; i < width; i ++ ) {

            for ( let j = 0; j < length; j ++ ) {

                indices[ k ] = k;
                k ++;

            }

        }

        geometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
        geometry.addGroup( 0, indices.length );

        const material = new THREE.PointsMaterial( { size: pointSize, vertexColors: true } );

        return new THREE.Points( geometry, material );

    }

    _LoadTutorialGuy() {
        const params = {
            camera: this._camera,
            scene: this._scene,
            callback: this.BroadcastEvent,
            localInputs: this._input,
            renderer: this._threejs,
            cli: this._cli,
            csharp: this.caller,
            SetAttention : this.SetAttention
        };
        
        const npc = new entity.Entity();
        npc.AddComponent(new remotePlayer_entity.NPCController(params));
        npc.AddComponent(new remotePlayer_input.BasicCharacterControllerInput());

        npc.AddComponent(new remotePlayer_input.PickableComponent( params));
        npc.AddComponent(new quest_component.QuestComponent( params));

        npc.AddComponent(
            new spatial_grid_controller.SpatialGridController({grid: this._grid}));

        //npc.AddComponent(new attack_controller.AttackController({timing: 0.35}));
        npc.SetPosition(new THREE.Vector3(
            (Math.random() * 2 - 1) * 9000,
            0,
            (Math.random() * 2 - 1) * 2000));
        this._entityManager.Add(npc);
        this._LoadGlobalCamera();
        const girl = new entity.Entity();
        girl.AddComponent(new gltf_component.AnimatedModelComponent({
            scene: this._scene,
            resourcePath: './resources/girl/',
            resourceName: 'peasant_girl.fbx',
            resourceAnimation: 'Standing Idle.fbx',
            scale: 0.035,
            receiveShadow: true,
            castShadow: true,
        }));
        girl.AddComponent(new spatial_grid_controller.SpatialGridController({
            grid: this._grid,
        }));
        girl.AddComponent(new player_input.PickableComponent(params));
        girl.AddComponent(new quest_component.QuestComponent(params));
        girl.SetPosition(new THREE.Vector3(30, 0, 0));
        this._entityManager.Add(girl);

    }
    _LoadGlobalCamera(){


     //  if (this._GlobalCamera==true)
     //  {

     ////      this._GlobalCamera=false;
     //      var cam= this._entityManager.Get('player-camera');
     //      cam.Toggle();
     //  }
       
    

        
        
    }
}

     



