import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private ambientLight: THREE.AmbientLight;
  private loader: GLTFLoader;
  private texttureLoader: THREE.TextureLoader;
  private composer: EffectComposer;
  private model: any;


  constructor(private ngZone: NgZone, private elementRef: ElementRef) {
    this.loader = new GLTFLoader()
    this.texttureLoader = new THREE.TextureLoader()
    this.ambientLight = new THREE.AmbientLight()
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.composer = new EffectComposer(this.renderer)

  }


  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const emissiveMap = this.texttureLoader.load('../../assets/img/ruido1.jpg');
    const bumpMap = this.texttureLoader.load('../../assets/img/ruido2.jpg');

    this.loader.load('../../assets/glt_glb/callisto.glb', (gltf:GLTF) => {
      this.model = gltf.scene;
      console.log(this.model)
      
      this.model.scale.set(0.12, 0.115, 0.12);
      this.camera.lookAt(this.model.position);

      this.model.traverse((child:any) => {
        if (child.isMesh) {
            child.material.emissiveMap = emissiveMap; // Textura de puntos naranjas brillantes
            child.material.emissive = new THREE.Color("#FFFFFF"); // Color blanco para aumentar la luminosidad
            child.material.emissiveIntensity = 1.0;
            
            child.material.bumpMap = bumpMap; // Textura de relieve para resaltar los puntos brillantes
            child.material.bumpScale = 0.1; // Ajusta la intensidad del relieve según sea necesario
            
            child.material.needsUpdate = true;
        }
      });
      this.scene.add(new THREE.AmbientLight())
      this.scene.add(this.model)
    })
  
    const renderPass = new RenderPass(this.scene, this.camera);

    // Modificamos el UnrealBloomPass
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 1;  // Aumentamos la intensidad del resplandor
    bloomPass.radius = 1;
    
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.renderToScreen = true;
    this.composer.addPass(renderPass);
    this.composer.addPass(bloomPass);
    

    this.scene.add(new THREE.AxesHelper(5));
    this.camera.position.set(0, 0, 200);

    this.composer.render()

    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  private render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.model.rotation.x += 0.01;
    this.model.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera)

    this.composer.render();
  }


  private resize() {
    const width = this.elementRef.nativeElement.clientWidth;
    const height = this.elementRef.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }


}
