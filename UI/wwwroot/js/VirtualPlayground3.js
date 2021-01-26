
import TWEEN from "../js/tweenmin.js";

//
// Split(['#view', '#controls'], {  // eslint-disable-line new-cap
//     sizes: [60, 40],
//     minSize: 50,
//     elementStyle: (dimension, size, gutterSize) => {
//         return {
//             'flex-basis': `calc(${size}% - ${gutterSize}px)`,
//         };
//     },
//     gutterStyle: (dimension, gutterSize) => {
//         return {
//             'flex-basis': `${gutterSize}px`,
//         };
//     },
// });

var stage = new createjs.Stage("canvas");
createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.on("tick", tick);

// Graphic Sample
var s = new createjs.Shape();
s.graphics.f("green").dr(0,0,100,100);
stage.addChild(s);

var tween = new TWEEN.Tween(s);
var firstTween = tween;
for ( var i = 0; i <= 10; i++) {
    var p = new createjs.Point(Math.random()*300, Math.random()*300);
    tween = stepByStep(tween, p); // Arguments changed!
}
firstTween.start();

function stepByStep(tween, position)
{
    console.log(tween)
    var tween2 = new TWEEN.Tween(s);
    tween2.to({
        x: position.x,
        y: position.y,
        z: 5
    }, 1000);
    tween.chain(tween2);
    return tween2;
}


// Handy Tick
function tick(event) {
    TWEEN.update();
    stage.update(event);
}
