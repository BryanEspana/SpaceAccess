import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CameraService } from '../../services/camera/camera.service';
import { LightService } from '../../services/light/light.service';
import { RendererService } from '../../services/renderer/renderer.service';
import { ModelLoaderService } from '../../services/ModelLoader/ModelLoader.service';
import { SceenService } from '../../services/sceen/sceen.service';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';


@Component({
  selector: 'app-InitialPage',
  templateUrl: './InitialPage.component.html',
  styleUrls: ['./InitialPage.component.scss']
})
export class InitialPageComponent implements OnInit {
  private composer: EffectComposer;

  @ViewChild('rendererContainer', { static: true })
  rendererContainer?: ElementRef;
  constructor(
    private cameraService: CameraService,
    private sceneService: SceenService,
    private modelLoaderService: ModelLoaderService,
    private lightService: LightService,
    private rendererService: RendererService,


  ) {
    this.composer = new EffectComposer(this.rendererService.renderer);

   }

  ngOnInit() {
    this.initThreeJS();
    let isDragging = false;
    let lastX;

    this.rendererService.renderer.domElement.addEventListener('mousedown', () => {
        // Tu código para manejar el evento mousedown
    });
    this.rendererService.renderer.domElement.addEventListener('mousemove', () => {
        // Tu código para manejar el evento mousemove
    });
    /*
   this.modelLoaderService.loadPlanetOptimizate((planet) => {
      // añade el planeta a tu escena aquí
    });
  */
    const renderPass = new RenderPass(this.sceneService.scene, this.cameraService.camera);
    this.composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    this.composer.addPass(bloomPass);

  }
  private initThreeJS() {
    // Añade luz y modelo al escenario
    this.sceneService.scene?.add(this.lightService.light);

    this.modelLoaderService.loadPlanetOptimizate((planetModel) => {
      this.sceneService.scene.add(planetModel);
      this.cameraService.camera.lookAt(planetModel.position);
    });

    // Añade el canvas de Three.js al contenedor en tu template
    this.rendererContainer?.nativeElement.appendChild(this.rendererService.renderer.domElement);

    // Inicia el renderizado
    this.animate();
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.rendererService.renderer.render(this.sceneService.scene, this.cameraService.camera);
  }

  ngOnDestroy(): void {
    // Aquí limpiarás los recursos de Three.js cuando el componente se destruya
  }

}
