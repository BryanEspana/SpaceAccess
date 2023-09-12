import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  light?: THREE.DirectionalLight;

  setup(): void {
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(1, 1, 1).normalize();
  }

}