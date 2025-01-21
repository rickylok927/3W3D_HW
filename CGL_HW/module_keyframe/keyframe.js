import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { scene } from "./init.js";
import { cube } from "./cube.js";

var T = 15;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var keys;
var angle = 0;

function setKey(){
  var pos1 = new THREE.Vector3(120, 10, -80);
  var rot1 = 0;
  var pos2 = new THREE.Vector3(84,10,-80);
  var rot2 = 0;
  var pos3 = new THREE.Vector3(80,10,-76);
  var rot3 = Math.PI / 2;
  var pos4 = new THREE.Vector3(80,10,-4);
  var rot4 = Math.PI / 2;
  var pos5 = new THREE.Vector3(76,10,0);
  var rot5 = 0;
  var pos6 = new THREE.Vector3(46,10,0);
  var rot6 = 0;
  var pos7 = new THREE.Vector3(44,10,-2);
  var rot7 = -Math.PI / 2;
  var pos8 = new THREE.Vector3(44,10,-78);
  var rot8 = -Math.PI / 2;
  var pos9 = new THREE.Vector3(42,10,-80);
  var rot9 = 0;
  var pos10 = new THREE.Vector3(-76,10,-80);
  var rot10 = 0;
  var pos11 = new THREE.Vector3(-80,10,-76);
  var rot11 = Math.PI / 2;
  var pos12 = new THREE.Vector3(-80,10,-4);
  var rot12 = Math.PI / 2;
  var pos13 = new THREE.Vector3(-76,10,0);
  var rot13 = Math.PI;
  var pos14 = new THREE.Vector3(-4,10,0);
  var rot14 = Math.PI;
  var pos15 = new THREE.Vector3(0,10,4);
  var rot15 = Math.PI / 2;
  var pos16 = new THREE.Vector3(0,10,36);
  var rot16 = Math.PI / 2;
  var pos17 = new THREE.Vector3(-4,10,40);
  var rot17 = 0;
  var pos18 = new THREE.Vector3(-36,10,40);
  var rot18 = 0;
  var pos19 = new THREE.Vector3(-40,10,44);
  var rot19 = Math.PI / 2;
  var pos20 = new THREE.Vector3(-40,10,76);
  var rot20 = Math.PI / 2;
  var pos21 = new THREE.Vector3(-44,10,80);
  var rot21 = 0;
  var pos22 = new THREE.Vector3(-120,10,80);
  var rot22 = 0;
  var pos23 = new THREE.Vector3(-120,80,80);
  var rot23 = 0;
  var pos24 = new THREE.Vector3(120,80,-80);
  var rot24 = 0;
  
  
  keys = [
    [0, pos1, rot1],
	[0.04, pos2, rot2],
	[0.06, pos3, rot3],
	[0.13, pos4, rot4],
	[0.15, pos5, rot5],
	[0.19, pos6, rot6],
	[0.21, pos7, rot7],
	[0.29, pos8, rot8],
	[0.31, pos9, rot9],
	[0.43, pos10, rot10],
	[0.45, pos11, rot11],
	[0.53, pos12, rot12],
	[0.55, pos13, rot13],
	[0.62, pos14, rot14],
	[0.64, pos15, rot15],
	[0.68, pos16, rot16],
	[0.7, pos17, rot17],
	[0.74, pos18, rot18],
	[0.76, pos19, rot19],
	[0.8, pos20, rot20],
	[0.82, pos21, rot21],
	[0.92, pos22, rot22],
	[0.94, pos23, rot23],
	[0.98, pos24, rot24],
    [1, pos1, rot1]
  ];
}

function keyframe(t){
	
  var s = ((t - ts) % T) / T;

  for (var i = 1; i < keys.length; i++) {
    if (keys[i][0] > s) break;
  }
  
  var ii = i - 1;
  var a = (s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);
  angle = keys[ii][2] * (1 - a) + keys[ii + 1][2] * a;
  
  cube.position.lerpVectors(keys[ii][1], keys[ii+1][1], a);

}

export { clock,angle };
export { keyframe,setKey};