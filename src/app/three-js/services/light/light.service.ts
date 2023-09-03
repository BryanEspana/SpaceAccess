import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class LightService {
light?: THREE.AmbientLight;
directionalLight?: THREE.DirectionalLight;
constructor() { 
   // Luz ambiental blanca pero con menor intensidad (0.2 en este caso)
  this.light = new THREE.AmbientLight(0xffffff, 3);
  // Rojo puro para la luz direccional
  this.directionalLight = new THREE.DirectionalLight(0xFF0000);
  this.directionalLight.position.set(-10, 10, 10);
  this.light.add(this.directionalLight);
   
}

}


