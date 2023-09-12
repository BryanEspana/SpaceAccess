import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModelLoaderService } from '../../services/ModelLoader/ModelLoader.service';
import * as THREE from 'three';

@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.scss']
})
export class CelestialBodyComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;
  renderer = new THREE.WebGLRenderer();

  constructor(private modelLoaderService: ModelLoaderService) { }

  ngOnInit(): void {
    this.modelLoaderService.initialize();
    this.modelLoaderService.loadModel('@/assets/celestialBody.glb', (model) => {
      this.animate();
    });
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderer.render(this.modelLoaderService.scene, this.modelLoaderService.camera);
  }

}