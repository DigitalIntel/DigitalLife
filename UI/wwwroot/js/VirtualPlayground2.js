
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118.1/build/three.module.js';
import TWEEN from 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.esm.js';



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



let renderer, scene, camera, stats;
            let pointclouds;
            let raycaster;
            let intersection = null;
            let spheresIndex = 0;
            let clock;
            let toggle = 0;

            let containe = document.getElementById( 'container' );
const stinput= new StInput(window);

const ssss = document.querySelector('#cc');




                               
                                                
            
            const mouse = new THREE.Vector2();
            const spheres = [];

            const threshold = 0.1;
            const pointSize = 0.05;
            const width = 80;
            const length = 160;
            const rotateY = new THREE.Matrix4().makeRotationY( 0.005 );

            init();
            animate();

            function generatePointCloudGeometry( color, width, length ) {

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

            function generatePointcloud( color, width, length ) {

            const geometry = generatePointCloudGeometry( color, width, length );
            const material = new THREE.PointsMaterial( { size: pointSize, vertexColors: true } );

            return new THREE.Points( geometry, material );

        }

            function generateIndexedPointcloud( color, width, length ) {

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

            function generateIndexedWithOffsetPointcloud( color, width, length ) {

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

            function init() {

            const container = document.getElementById( 'container' );
              
            scene = new THREE.Scene();

            clock = new THREE.Clock();

            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.set( 10, 10, 10 );
            camera.lookAt( scene.position );
            camera.updateMatrix();

            //

            const pcBuffer = generatePointcloud( new THREE.Color( 1, 0, 0 ), width, length );
            pcBuffer.scale.set( 5, 10, 10 );
            pcBuffer.position.set( - 5, 0, 0 );
            scene.add( pcBuffer );

            const pcIndexed = generateIndexedPointcloud( new THREE.Color( 0, 1, 0 ), width, length );
            pcIndexed.scale.set( 5, 10, 10 );
            pcIndexed.position.set( 0, 0, 0 );
            scene.add( pcIndexed );

            const pcIndexedOffset = generateIndexedWithOffsetPointcloud( new THREE.Color( 0, 1, 1 ), width, length );
            pcIndexedOffset.scale.set( 5, 10, 10 );
            pcIndexedOffset.position.set( 5, 0, 0 );
            scene.add( pcIndexedOffset );

            pointclouds = [ pcBuffer, pcIndexed, pcIndexedOffset ];

            //

            const sphereGeometry = new THREE.SphereBufferGeometry( 0.1, 32, 32 );
            const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

            for ( let i = 0; i < 40; i ++ ) {

            const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
            scene.add( sphere );
            spheres.push( sphere );

        }

            //

            renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true, canvas: ssss} );
            
            // renderer.setPixelRatio( window.devicePixelRatio );
            // renderer.setSize( window.innerWidth, window.innerHeight );
         //   container.appendChild( renderer.domElement );

            //

            raycaster = new THREE.Raycaster();
            raycaster.params.Points.threshold = threshold;

            //

          // stats = new Stats();
          // container.appendChild( stats.dom );

            //

            window.addEventListener( 'resize', onWindowResize, false );
         //   document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        }

        //     function onDocumentMouseMove( event ) {
        //
        //     event.preventDefault();
        //
        //     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        //     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        //
        // }

            function onWindowResize() {
                
                
         //      const rect =    document.getElementById('container').getBoundingClientRect();
         //  camera.aspect = window.innerWidth / window.innerHeight;
         //  camera.updateProjectionMatrix();


        
         //      
         //      
         //  renderer.setSize( window.innerWidth, window.innerHeight );

        }

            function animate() {
                TWEEN.update(time);
            requestAnimationFrame( animate );
                const canvas = renderer.domElement;
                if (stinput.mouseMoving) {

                 
                   // const rect = renderer.domElement.getBoundingClientRect();
                    const rect =   renderer.domElement.getBoundingClientRect();
                    //
                   // const pos = {
                   //     x: ((stinput.mousePosition.x - rect.left) / rect.width) * 2  - 1,
                   //     y: (-(stinput.mousePosition.y - rect.top ) / rect.height) * -2 + 1,
                   //
                   //
                   // };
                    mouse.x = (( stinput.mousePosition.x - rect.left) /  canvas.clientWidth  ) * 2 - 1;
                    mouse.y = - (( stinput.mousePosition.y - rect.top ) /canvas.clientHeight ) * 2 + 1;

                   // mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                   // mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
                     
                   // mouse.x = pos.x;
                   // mouse.y = pos.y;
                }

   
                
                
            render();
           // stats.update();
                    stinput.endFrame();
        }
function   resizeRendererToDisplaySize(renderer) {
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
            function render() {

            camera.applyMatrix4( rotateY );
            camera.updateMatrixWorld();

                if (resizeRendererToDisplaySize(renderer)) {
                    const canvas = renderer.domElement;
                    camera.aspect = canvas.clientWidth / canvas.clientHeight;
                    camera.updateProjectionMatrix();
                  //  this._UpdateGlider();
                }
            
            
            raycaster.setFromCamera( mouse, camera );

            const intersections = raycaster.intersectObjects( pointclouds );
            intersection = ( intersections.length ) > 0 ? intersections[ 0 ] : null;

            if ( toggle > 0.02 && intersection !== null ) {

            spheres[ spheresIndex ].position.copy( intersection.point );
            spheres[ spheresIndex ].scale.set( 1, 1, 1 );
            spheresIndex = ( spheresIndex + 1 ) % spheres.length;

            toggle = 0;

        }

            for ( let i = 0; i < spheres.length; i ++ ) {

            const sphere = spheres[ i ];
            sphere.scale.multiplyScalar( 0.98 );
            sphere.scale.clampScalar( 0.01, 1 );

        }

            toggle += clock.getDelta();

            renderer.render( scene, camera );

        }

function setupTween()
{
    // 
    var update	= function(){
        cube.position.x = current.x;
    }
    var current	= { x: -userOpts.range };

    // remove previous tweens if needed
    TWEEN.removeAll();

    // convert the string from dat-gui into tween.js functions 
    var easing	= TWEEN.Easing[userOpts.easing.split('.')[0]][userOpts.easing.split('.')[1]];
    // build the tween to go ahead
    var tweenHead	= new TWEEN.Tween(current)
        .to({x: +userOpts.range}, userOpts.duration)
        .delay(userOpts.delay)
        .easing(easing)
        .onUpdate(update);
    // build the tween to go backward
    var tweenBack	= new TWEEN.Tween(current)
        .to({x: -userOpts.range}, userOpts.duration)
        .delay(userOpts.delay)
        .easing(easing)
        .onUpdate(update);

    // after tweenHead do tweenBack
    tweenHead.chain(tweenBack);
    // after tweenBack do tweenHead, so it is cycling
    tweenBack.chain(tweenHead);

    // start the first
    tweenHead.start();
}
