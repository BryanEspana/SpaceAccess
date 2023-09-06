import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialBodyComponent } from './celestial-body.component';

describe('CelestialBodyComponent', () => {
  let component: CelestialBodyComponent;
  let fixture: ComponentFixture<CelestialBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelestialBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelestialBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
