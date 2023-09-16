import { Injectable } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SceenService } from '../sceen/sceen.service';
import { CameraService } from '../camera/camera.service';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ModelLoaderService {

  loader: GLTFLoader = new GLTFLoader();
  private planetModel?: THREE.Group;

  constructor(
    private scene: SceenService,
    private cameraService: CameraService,
  ) { }
  loadPlanetOptimizate(callback: (planet: any) => void): void {


    this.loader.load('/assets/glt_glb/callisto.glb', (gltf) => {
      const planet = gltf.scene;
      callback(planet);

      this.planetModel?.scale.set(0.12, 0.115, 0.12);
      //Cargar texturas y aplicarlas en angular
      const loader = new THREE.TextureLoader();
      const emissiveMap = loader.load('/assets/img/ruido1.jpg');
      //const bumpMap = loader.load('/assets/img/ruido2.jpg');

      this.planetModel?.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
            let meshChild = child as THREE.Mesh;
            let material = meshChild.material as THREE.MeshStandardMaterial;  // Asumimos que estás usando MeshStandardMaterial, ajusta según sea necesario
            material.emissiveMap = emissiveMap;
            material.emissive = new THREE.Color("#FFFFFF");
            material.emissiveIntensity = 1.0;
           // material.bumpMap = bumpMap;
            material.bumpScale = 0.5;
            material.needsUpdate = true;
        }
    });

      this.scene.scene?.add(planet);
      //angular
      //this.cameraService.camera?.lookAt(this.planetModel.position);


    });
  }

}

//cargar texturas y alpicarlas en js
/*
    const loader = new THREE.TextureLoader();
    const emissiveMap = loader.load('Proyect/src/assets/img/ruido1.jpg');
    const bumpMap = loader.load('Proyect/src/assets/img/ruido2.jpg');
      planetModel.traverse((child) => {
        if (child.isMesh) {
            child.material.emissiveMap = emissiveMap; // Textura de puntos naranjas brillantes
            child.material.emissive = new THREE.Color("#FFFFFF"); // Color blanco para aumentar la luminosidad
            child.material.emissiveIntensity = 1.0;

            child.material.bumpMap = bumpMap; // Textura de relieve para resaltar los puntos brillantes
            child.material.bumpScale = 0.1; // Ajusta la intensidad del relieve según sea necesario

            child.material.needsUpdate = true;
        }
    });
*/
