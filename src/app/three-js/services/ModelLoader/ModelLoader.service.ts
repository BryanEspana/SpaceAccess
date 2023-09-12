import { Injectable } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SceneService } from '../scene/scene.service';
import { CameraService } from '../camera/camera.service';
import { LightService } from '../light/light.service';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ModelLoaderService {

  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  light: THREE.DirectionalLight;
  
  loader: GLTFLoader = new GLTFLoader();
  private model?: THREE.Group;

  constructor(

  ) { 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.light = new THREE.DirectionalLight(0xffffff, 1);
  }

  initialize(): void {
    this.scene.add(this.light);
    this.camera.position.z = 200;
  }

  loadModel(path: string, callback: (model: any) => void): void {
    this.loader.load(path, (gltf) => {
      const model = gltf.scene;
      callback(model);

      this.model?.scale.set(0.12, 0.115, 0.12);

      model.traverse((child: any) => {
        if (child.isMesh) {
          child.material.needsUpdate = true;
        }
      });

      this.scene.add(model);
      this.camera.lookAt(model.position);
      this.model = model;

    }, undefined, (error) => console.error(error));
  }


}