import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  camera: THREE.PerspectiveCamera;

  constructor() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  }

  init(): void {
    this.camera.position.z = 5;
  }

  lookAt(position: THREE.Vector3): void {
    this.camera.lookAt(position);
  }

  dispose(): void {
    // Any cleanup related to the camera can go here if necessary.
  }
}
