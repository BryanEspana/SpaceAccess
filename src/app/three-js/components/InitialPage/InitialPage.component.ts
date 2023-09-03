import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera/camera.service';
import { LightService } from '../../services/light/light.service';
import { RendererService } from '../../services/renderer/renderer.service';
import * as THREE from 'three';

@Component({
  selector: 'app-InitialPage',
  templateUrl: './InitialPage.component.html',
  styleUrls: ['./InitialPage.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(
    private cameraService: CameraService,
    private lightService: LightService,
    private rendererService: RendererService
  ) { }

  ngOnInit() {
  }

}
