import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { createMaze } from './maze.js';
import { createCube } from './cube.js';
import { cube } from './cube.js';
import { keyframe,setKey } from './keyframe.js';
import { clock,angle } from './keyframe.js';


var camera, scene, renderer;

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(100, 300, 0);
  let controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);

  var axes = new THREE.AxesHelper(20);
  scene.add(axes);

  createMaze();
  createCube();
  
  setKey();
}

function animate() {
  
  keyframe (clock.getElapsedTime());
  cube.rotation.y = angle;
  
  requestAnimationFrame(animate);
  render();

}

function render() {

  renderer.render(scene, camera);

}

export {
  scene
};

