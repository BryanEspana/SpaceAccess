import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera/camera.service';
import { LightService } from '../../services/light/light.service';
import { RendererService } from '../../services/renderer/renderer.service';
import * as THREE from 'three';
import { ModelLoaderService } from '../../services/ModelLoader/ModelLoader.service';

@Component({
  selector: 'app-InitialPage',
  templateUrl: './InitialPage.component.html',
  styleUrls: ['./InitialPage.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(
    private cameraService: CameraService,
    private lightService: LightService,
    private rendererService: RendererService,
    private modelLoaderService: ModelLoaderService

    
  ) { }

  ngOnInit() {
    this.modelLoaderService.loadPlanetOptimizate((planet) => {
      // añade el planeta a tu escena aquí
    });
  }

}
