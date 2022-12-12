import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { scene } from "./init.js";

var cube = new THREE.Group();

export function createCube() {
  var body = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 10), new THREE.MeshNormalMaterial());
  var point = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 5), new THREE.MeshNormalMaterial());
  point.position.x = -5;

  cube.add(body, point);
  scene.add(cube);
  cube.position.set(120, 10, -80);
}

export { cube };