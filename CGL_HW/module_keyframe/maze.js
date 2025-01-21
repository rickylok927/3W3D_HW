import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { scene } from "./init.js";

export function createMaze() {
  var mt = new THREE.MeshNormalMaterial();
  var wall = new THREE.Group();

  var wall1 = new THREE.Mesh(new THREE.BoxGeometry(200, 50, 5), mt);
  wall1.position.z = 102.5;
  var wall2 = wall1.clone();
  wall2.position.z = -102.5;
  var wall3 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 160), mt);
  wall3.position.x = 102.5;
  wall3.position.z = 20;
  var wall4 = wall3.clone();
  wall4.position.x = -102.5;
  wall4.position.z = -20;

  var wall5 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 80), mt);
  wall5.position.set(60, 0, -60);
  var wall6 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 40), mt);
  wall6.position.set(60, 0, 80);
  var wall7 = new THREE.Mesh(new THREE.BoxGeometry(40, 50, 5), mt);
  wall7.position.set(40, 0, 20);
  var wall8 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 160), mt);
  wall8.position.set(20, 0, 20);
  var wall9 = new THREE.Mesh(new THREE.BoxGeometry(80, 50, 5), mt);
  wall9.position.set(-20, 0, -60);
  var wall10 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 40), mt);
  wall10.position.set(-60, 0, -40);
  var wall11 = new THREE.Mesh(new THREE.BoxGeometry(40, 50, 5), mt);
  wall11.position.set(-40, 0, -20);
  var wall12 = new THREE.Mesh(new THREE.BoxGeometry(80, 50, 5), mt);
  wall12.position.set(-60, 0, 20);
  var wall13 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 40), mt);
  wall13.position.set(-20, 0, 80);
  var wall14 = new THREE.Mesh(new THREE.BoxGeometry(40, 50, 5), mt);
  wall14.position.set(-80, 0, 60);

  wall.add(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14);
  scene.add(wall);
  wall.position.y = 25;
}
