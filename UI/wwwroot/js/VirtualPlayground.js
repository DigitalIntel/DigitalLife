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
import {ui_controller} from '../js/VirtualPlayground/ui-controller.js';
import {health_bar} from '../js/VirtualPlayground/health-bar.js';
import {level_up_component} from '../js/VirtualPlayground/level-up-component.js';
import {quest_component} from '../js/VirtualPlayground/quest-component.js';
import {spatial_grid_controller} from '../js/VirtualPlayground/spatial-grid-controller.js';
import {inventory_controller} from '../js/VirtualPlayground/inventory-controller.js';
import {equip_weapon_component} from '../js/VirtualPlayground/equip-weapon-component.js';
import {attack_controller} from '../js/VirtualPlayground/attacker-controller.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/controls/OrbitControls.js';
import { SimpleOrbitControls } from '../js/VirtualPlayground/orbitctrl.js'

import Glide from '../js/UIman/glide.modular.esm.js'


import DemoCLI from "../js/cli.js"




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
 
        /* global Split */

        // This code is only related to handling the split.
        // Our three.js code has not changed
        Split(['#view', '#controls'], {  // eslint-disable-line new-cap
        sizes: [75, 25],
        minSize: 100,
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
 
    
  

    
    console.log("intialized from Js");
    return _APP;

}


class Foo {
    constructor() {
        this._Initialize();
    }
    _Initialize() {
        this.message="empty";
        
    }
}

class HackNSlashDemo {
    constructor() {
        this._Initialize();
    }
    
    _Initialize() {

        const canvas = document.querySelector('#c');
        const UI = document.querySelector('#c');
        this._threejs  = new THREE.WebGLRenderer({antialias: true ,alpha:true, canvas:canvas});
        this._threejs.antialias=true;

        // for input (using StInput)
        const glideHero = new Glide('.glide', {
            type: 'carousel',
            animationDuration: 2000,
            autoplay: 4500,
            focusAt: '2',
            startAt: 2,
            perView: 1,
        });

        glideHero.mount();
        this._input = new StInput(canvas);
        this._cli= new DemoCLI("#cli")

       // new  Glide('.glide').mount();
      

      

        this._lastTime = (new Date()).getTime();


        // this._threejs.setPixelRatio(window.devicePixelRatio);
       // this._threejs.setSize(window.innerWidth, window.innerHeight);
       // this._threejs.domElement.id = 'threejs';
        
        
        
        this._threejs.outputEncoding = THREE.sRGBEncoding;
        this._threejs.gammaFactor = 2.2;
        this._threejs.shadowMap.enabled = true;
        this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;



        
    
        
    

        const fov = 60;
        const aspect = 1920 / 1080;
        const near = 1.0;
        const far = 10000.0;
        this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      //  this._camera.position.set(25, 10, 25);

        // camera
        //camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        this._camera.position.set(100,100,100);
        this._camera.lookAt(new THREE.Vector3(0,0,0));
        
        

        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color(0x808080);
        this._scene.fog = new THREE.FogExp2(0x808080, 0.002);

        // create some random cubes
        // create cube geometry
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        for (var i = 0; i < 100; ++i) {
            var material = new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } );
            var cube = new THREE.Mesh( geometry, material );
            cube.position.set(Math.random()*100 - 50, Math.random()*10, Math.random()*100 - 50);
            cube.scale.set(1+Math.random()*5, 1+Math.random()*5, 1+Math.random()*5);
            this._scene.add( cube );
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

   //this._OrbitControls = new OrbitControls( this._camera , this._threejs.domElement );
   //this._OrbitControls.enablePan = true;
   //this._OrbitControls.enableZoom = true;
   //this._OrbitControls.target.set( 0, 1, 0 );
   //this._OrbitControls.update();


        // create the orbit controller
         this._SimpleOrbitcontrols = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._camera );




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





        //  this._LoadControllers();
      //  this._LoadPlayer();
       // this._LoadFoliage();
      //  this._registerPlayer("masterid")
        this._LoadClouds();
        this._LoadSky();

        this._previousRAF = null;
        this._RAF();
    }
 


    _LoadControllers() {
        const ui = new entity.Entity();
        ui.AddComponent(new ui_controller.UIController());
        this._entityManager.Add(ui, 'ui');
    }

    _LoadSky() {
        const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFFF, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        this._scene.add(hemiLight);

        const uniforms = {
            "topColor": { value: new THREE.Color(0x0077ff) },
            "bottomColor": { value: new THREE.Color(0xffffff) },
            "offset": { value: 33 },
            "exponent": { value: 0.6 }
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
            callback : this.BroadcastEvent,
            localInputs: this._input
        };
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

       // const girl = new entity.Entity();
       // girl.AddComponent(new gltf_component.AnimatedModelComponent({
       //     scene: this._scene,
       //     resourcePath: './resources/girl/',
       //     resourceName: 'peasant_girl.fbx',
       //     resourceAnimation: 'Standing Idle.fbx',
       //     scale: 0.035,
       //     receiveShadow: true,
       //     castShadow: true,
       // }));
       // girl.AddComponent(new spatial_grid_controller.SpatialGridController({
       //     grid: this._grid,
       // }));
       // girl.AddComponent(new player_input.PickableComponent());
       // girl.AddComponent(new quest_component.QuestComponent());
       // girl.SetPosition(new THREE.Vector3(30, 0, 0));
       // this._entityManager.Add(girl);
*/
        const player = new entity.Entity();
        player.AddComponent(new player_input.BasicCharacterControllerInput(params));
        player.AddComponent(new player_entity.BasicCharacterController(params));
        player.AddComponent(new player_input.PickableComponent());
        
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
    
    _LoadRemotePlayer(id){     
  
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
            (Math.random() * 2 - 1) * 5000,
            0,
            (Math.random() * 2 - 1) * 5000));
        this._entityManager.Add(npc);
        
        
    }

    _OnWindowResize() {
        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();
        this._threejs.setSize(window.innerWidth, window.innerHeight);
    }
    
    _UpdateSun() {

      
        
        const player = this._entityManager.Get('player');
       
        if( player ) {
            const pos = player._position;
            this._sun.position.copy(pos);
            this._sun.position.add(new THREE.Vector3(-100, 100, 100));
            this._sun.target.position.copy(pos);
            this._sun.updateMatrixWorld();
            this._sun.target.updateMatrixWorld();
        }
        
    }

    _resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
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
                const canvas = this._threejs.domElement;
                this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
                this._camera.updateProjectionMatrix();
            }


            ///////////////handle local inputs


            // // left mouse button is down
            // if (this._input.down('mouse_left')) {
            //     console.log("Mouse is down.");
            // }
            //
            // // left mouse button was released this update call
            // if (this._input.released('mouse_left')) {
            //     console.log("Mouse was released this update call.");
            // }
            //
            // // left mouse button was released this update call
            // if (this._input.pressed('mouse_left')) {
            //     console.log("Mouse was pressed this update call.");
            // }
            //
            // keyboard button up arrow was released
            if (this._input.released( 'tab')) {
                const h = (async () => {
                    this._cli.printPrompt()
                    await  this._cli.type('echo "testing this"')
                    this._cli.println("testing this")
                    this._cli.printPrompt()
                })()
                this._cli.printPrompt()
                this._cli.print("print ")
                this._cli.print("on same line ")
                this._cli.enterKey()

                let colorNum = 1
                for(let x = 0; x <= 16; x++) {
                    this._cli.printPrompt()
                    this._cli.println("colors", {className: `base0${x.toString(16)}`})
                    colorNum++
                }

                this._cli.println("println")
                this._cli.println("println")
                this._cli.printPrompt({className: "base08"})

              console.log("Left arrow was released this update call.");
            }
           
            // // mouse moved
            // if (this._input.mouseMoving) {
            //   //  console.log("Mouse delta:", this._input.mouseDelta);
            // }

          
            
            
            
            
            
            this._threejs.render(this._scene, this._camera);
            this._Step(t - this._previousRAF);
            this._previousRAF = t;
            this._input.endFrame();
        });
    }
    _UpdateOrbitControls(timeElapsed) {


       // const timeNow = (new Date()).getTime();
       // const deltaTime = (timeNow - this._lastTime) / 1000.0;
       // this._lastTime = timeNow;
       // 
        // decide what to move and get mouse delta
        var rotateCamera = this._input .mouseDown(this._input.MouseButtons.right);
        var moveCamera = this._input.mouseDown(this._input.MouseButtons.left);
        var mouseDelta = this._input.mouseDelta;

        // zoom value
        var zoom = this._input.mouseWheel;
        if (this._input.down('page_up')) zoom += 10;
        else if (this._input.down('page_down')) zoom -= 10;

       // update controls
        this._SimpleOrbitcontrols.update({deltaTime: timeElapsed/1000 ,
           rotateHorizontally: rotateCamera ? -mouseDelta.x : 0,
           rotateVertically: rotateCamera ? -mouseDelta.y : 0,
           moveOffsetVertically: (moveCamera ? -mouseDelta.y : 0) * 10,
           moveOffsetHorizontally: (moveCamera ? mouseDelta.x : 0) * 10,
           zoom: zoom * 10,
        });



   

       // }
        ///////////////handle local inputs
    
      



        


    }

    _Step(timeElapsed) {
        const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);

       
        
        this._UpdateOrbitControls(timeElapsed);
        this._UpdateSun();
        

        this._entityManager.Update(timeElapsedS);
    }
    
    
    

     _registerPlayer(id){
            
        console.log("registered player id" + id);
        //  this._LoadControllers();
          this._LoadPlayer(id);
         const camera = new entity.Entity();
         camera.AddComponent(
             new third_person_camera.ThirdPersonCamera({
                 camera: this._camera,
                 target: this._entityManager.Get('player')}));
         this._entityManager.Add(camera, 'player-camera');

    }


    _ToggleCamera(){

        console.log("Toggling Camera");
        //  this._LoadControllers();
        this._LoadPlayer(id);

    }
    getEntitymanager(){
        
        return this._entityManager;
        
    }
    helloFromLiveComponent(caller){
        console.log("Hello From Live Component");
        //this._registerPlayer();
        livestateman= caller;
        var obj = {
            ID:  "99",
            RequestType: 969,
            Data: "ooxx"
        };
        livestateman.invokeMethodAsync('hello_LiveStateHandler',new Object());
        
    }

    BroadcastEvent(event){
//        console.log("Broadcasting event");

        caller.invokeMethodAsync('hello_LiveStateHandler',event);

    }
}



