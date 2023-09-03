import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { CameraService } from '../camera/camera.service';
@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  renderer?: THREE.WebGLRenderer;

  constructor(
    private cameraService: CameraService
  ) { }

  start(renderer: THREE.WebGLRenderer){
    this.renderer = renderer
    window.addEventListener('resize', this.resize.bind(this))
  }

  stop(){
    window.removeEventListener('resize', this.resize.bind(this))
  }

  resize(){
    //this.cameraService.camera.aspect = window.innerWidth / window.innerHeight
    this.cameraService.camera?.updateProjectionMatrix()
    this.renderer!.setSize(window.innerWidth, window.innerHeight)
  }

  
}


/*

import camera from './camera.js';

class Resize{
    constructor(){
            this.renderer = null
    }
    start(renderer){
        this.renderer = renderer
        window.addEventListener('resize', this.resize.bind(this))
    }
    stop(){
        window.removeEventListener('resize', this.resize.bind(this))
    }
    resize(){
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}

const resize = new Resize();

export default resize
*/