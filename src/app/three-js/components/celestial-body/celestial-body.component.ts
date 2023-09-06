import { Component } from '@angular/core';
import { ModelLoaderService } from '../../services/ModelLoader/ModelLoader.service';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three";

@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.scss']
})
export class CelestialBodyComponent {

  constructor(
    private modelLoaderService: ModelLoaderService
  ) { }

  ngOnInit() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    let planetModelGlobal: any;
    this.modelLoaderService.loadPlanetOptimizate((planetModel) => {
        planetModel.scale.set(0.12, 0.115, 0.12);
        
        // Assuming the planetModel has a mesh with a material that you want to modify
        const loader = new THREE.TextureLoader();
        const emissiveMap = loader.load('Proyect/src/assets/img/ruido1.jpg');
        const bumpMap = loader.load('Proyect/src/assets/img/ruido2.jpg');

        planetModel.traverse((child: any) => {
            if (child.isMesh) {
                child.material.emissiveMap = emissiveMap; // Textura de puntos naranjas brillantes
                child.material.emissive = new THREE.Color("#FFFFFF"); // Color blanco para aumentar la luminosidad
                child.material.emissiveIntensity = 1.0;
                
                child.material.bumpMap = bumpMap; // Textura de relieve para resaltar los puntos brillantes
                child.material.bumpScale = 0.1; // Ajusta la intensidad del relieve según sea necesario
                
                child.material.needsUpdate = true;
            }
        });

        scene.add(planetModel);
        camera.lookAt(planetModel.position);
        planetModelGlobal = planetModel;
    });

    camera.position.z = 5;
    
    const animate = function () {
        requestAnimationFrame(animate);
        planetModelGlobal.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

  }

}
