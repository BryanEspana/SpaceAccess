import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  scene?: THREE.Scene;

  setup(): void {
    this.scene = new THREE.Scene();
  }

}