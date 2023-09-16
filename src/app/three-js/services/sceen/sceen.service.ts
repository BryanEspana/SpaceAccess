import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SceenService {
scene: THREE.Scene;


constructor() {
  this.scene = new THREE.Scene();

 }

}
