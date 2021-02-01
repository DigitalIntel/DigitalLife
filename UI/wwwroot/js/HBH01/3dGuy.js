import {entity} from './entity.js';
import DemoCLI from "./cli.js"
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {SimpleOrbitControls} from "./orbitctrl.js";
import {math} from './math.js';





import {third_person_camera} from './third-person-camera.js';

import {player_entity} from './player-entity.js'


import {gltf_component} from './gltf-component.js';

import {player_input} from './player-input.js';

import {remotePlayer_input} from './remotePlayer_input.js';

import {npc_entity} from './npc-entity.js';

import {spatial_hash_grid} from './spatial-hash-grid.js';
//import {ui_controller} from './ui-controller.js';
// import {health_bar} from './health-bar.js';
// import {level_up_component} from './level-up-component.js';
//import {quest_component} from './quest-component.js';
// import {inventory_controller} from './inventory-controller.js';
// import {equip_weapon_component} from './equip-weapon-component.js';
//import {attack_controller} from './attacker-controller.js';
//import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/controls/OrbitControls.js';


//import {CLI_Guy} from "./CliGuy.js";
//import TWEEN from "../js/tweenmin.js";
//import {HBH00} from "./HBH01.js";



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


export const ThreeD_Guy = (() => {

  class ThreeD_Guy extends entity.Component {
    constructor(params) {
      super();
      this._input = new StInput(window);
     // this.UIguy = this.GetComponent('Ui_Guy');
      this._entitymanager= params.entitymanager;
     // this.UIguy = this._entityManager.Get('HBH01').GetComponent('UIController');;
      this.glideHero = new Glide('.glide', {
        type: "carousel",
        touchAngle: 45,
        focusAt: 1,
        startAt: 1,
        perView: 1,
        keyboard: false,
        gap: 5,
        autoplay: false,
        peek: {
          before: 100,
          after: 50
        },

      })
      this.glideHero.mount();



      this._quests = {};
      this._cli = new DemoCLI("#cliContainer");
      this._canvas = document.querySelector('#c');
      this._view = document.querySelector('#view');
      this._threejs = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas: this._canvas});

        Split(['#view', '#controls'], {  // eslint-disable-line new-cap
          sizes: [0, 100],
          minSize: 1,
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

      const fov = 60;
      const aspect = 1920 / 1080;
      const near = 1.0;
      const far = 10000.0;
      this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this._camera.position.set(25, 10, 25);

       this._BirdViewCAM = new THREE.PerspectiveCamera(fov, aspect, near, far);
       this._BirdViewCAM.position.set(100, 100, 25);
//       // //  this._camera.position.set(100,100,100);
//     this._BirdViewCAM.lookAt(new THREE.Vector3(0, 0, 0));
      
      this._camera.lookAt(new THREE.Vector3(0, 0, 0));


      this._scene = new THREE.Scene();
      this._scene.background = new THREE.Color(0x808080);
      this._scene.fog = new THREE.FogExp2(0x808080, 0.002);

           // // create some random cubes
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
      this._SimpleOrbitControls = new SimpleOrbitControls.SimpleOrbitControls(this._threejs, this._scene, this._BirdViewCAM );

      this._LoadSky();
      this._LoadClouds();
      this._LoadFoliage();
      this._LoadPlayer();
      

    }
  
    InitComponent() {
   //   this._LoadUI();
     
      if (this._cli) {
       // this._inputCli = new StInput(this._cli.container)
        const h = (async () => {
          this._cli.printPrompt()
          await this._cli.type('I am ThreeD Guy , i create cool animations! , and render epic multiplayer games ! ')
     
        })()

      }}
    
    Breathe(){
      const h = (async () => {
        this._cli.printPrompt()
        await this._cli.type('it Feels wonderful to be alive !')

      })()
      
    }
    _UpdateOrbitControls(timeElapsed) {

     // if (this.Attention === "Canvas") {


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


     // }


    }
    _LoadUI() {


      // tween.oncomplete(function(){
      //    
      //     alert("done tweening!")
      // });

      // This code is only related to handling the split.
      // Our three.js code has not changed
      //  Split(['#view', '#controls'], {  // eslint-disable-line new-cap
      //    sizes: [10, 90],
      //    minSize: 50,
      //    elementStyle: (dimension, size, gutterSize) => {
      //      return {
      //        'flex-basis': `calc(${size}% - ${gutterSize}px)`,
      //      };
      //    },
      //    gutterStyle: (dimension, gutterSize) => {
      //      return {
      //        'flex-basis': `${gutterSize}px`,
      //      };
      //    },
      //  });
      //

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
      this.glideHero.update();
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

     // this.UpdateGlider();

      // document.getElementById('cliContainer').addEventListener('keydown', event => {

      //   this.Attention = "Cli";
      //   this._input._resetAll();
      //   if (this._cli) {
      //     if (event.key === "Enter") {
      //       this._cli.enterKey();
      //       this._cli.println("");
      //       return;
      //     }
      //     this._cli.type(event.key);
      //     // this._cli.printPrompt();
      //     //   alert(event.key);
      //   }
      // })

      // document.getElementById('c').addEventListener('click', event => {

      // this.Attention = "Canvas";

      //   this._cli.type("Attention : " + this.Attention)
      //   this._cli.println("");
      //   this._cli.printPrompt();
      //   this._cli.printCursor();
      //   // this._input._resetAll();
      // })

      // document.getElementById('controls').addEventListener('mousedown', event => {

      //   this.Attention = "Controls";
      //   this._cli.type("Attention : " + this.Attention);
      //   this._cli.println("");
      //   this._cli.printPrompt();
      //   this._cli.printCursor();
      //   this._input._resetAll();
      // })


      // var userSelection = document.getElementsByClassName('gutter');
      // for (var i = 0; i < userSelection.length; i++) {
      //   (function (index) {
      //     userSelection[index].addEventListener("mousedown", function () {

      // // this.Attention = "Gutter";
      // // this._cli.type("Attention : " + this.Attention)
      // // this._cli.println();
      // // this._cli.printPrompt();
      // // this._cli.printCursor();

      //       //         this._input._resetAll();
      //     })
      //   })(i);
      // }
      // document.getElementById('cliContainer').addEventListener('mousedown', event => {

      //   this.Attention = "Cli";
      //   this._input._resetAll();
      // })


      /* global Split */


    }
    Update(timeInSeconds) {
      // const h = (async () => {
      //   this._cli.printPrompt()
      //   await this._cli.type('echo "Creating Terminal"')
      //
      // })()
      this._UpdateOrbitControls(timeInSeconds);
      if (this._resizeRendererToDisplaySize(this._threejs)) {
        // ui.UpdateGlider();
        const canvas = this._threejs.domElement;
        this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this._camera.updateProjectionMatrix();
         this._BirdViewCAM.aspect = canvas.clientWidth / canvas.clientHeight;
         this._BirdViewCAM.updateProjectionMatrix();


      }

      this._threejs.render(this._scene, this._BirdViewCAM );    
      this._input.endFrame();
      
    }
    _resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
          renderer.setSize(width, height, false);
        this.glideHero.update();    
     



      }
      return needResize;
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




  };
 
  return {
    ThreeD_Guy: ThreeD_Guy,
  };

})();