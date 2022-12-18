import { MeshText2D, SpriteText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';
import { scene } from './main-3';

function buildScene() {


  let box = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 10), new THREE.MeshNormalMaterial());
  //scene.add (box);

  let text = new MeshText2D("Origin", {
    align: textAlign.center,
    font: '15px Goudy Stout',
    fillStyle: '#000000',
    antialias: true
  });
  text.position.y = 15;
  text.rotation.y = -Math.PI / 2;
  scene.add(text);


  let text2 = new SpriteText2D("(50,-50,-50)", {
    align: textAlign.center,
    font: '20px STLiti',
    fillStyle: '#000000',
    antialias: true
  });
  scene.add(text2);
  text2.position.set(50, -50, -50);

  let text3 = new SpriteText2D("(50,0,50)", {
    align: textAlign.center,
    font: '20px STLiti',
    fillStyle: '#000000',
    antialias: true
  });
  text3.position.set(50, 0, 50);
  scene.add(text3);

  let text4 = new SpriteText2D("(-50,50,50)", {
    align: textAlign.center,
    font: '20px STLiti',
    fillStyle: '#000000',
    antialias: true
  });
  text4.position.set(-50, 50, 50);
  scene.add(text4);

  let text5 = new SpriteText2D("(-50,0,-50)", {
    align: textAlign.center,
    font: '20px STLiti',
    fillStyle: '#000000',
    antialias: true
  });
  text5.position.set(-50, 0, -50);
  scene.add(text5);
}


export { buildScene };
