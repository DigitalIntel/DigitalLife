import {entity} from './entity.js';
import DemoCLI from "./cli.js"
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {SimpleOrbitControls} from "./orbitctrl.js";

export const ThreeD_Guy = (() => {

  class ThreeD_Guy extends entity.Component {
    constructor(params) {
      super();
      this._input = new StInput(window);
     // this.UIguy = this.GetComponent('Ui_Guy');
      
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




  };
 
  return {
    ThreeD_Guy: ThreeD_Guy,
  };

})();