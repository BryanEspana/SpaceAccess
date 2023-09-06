import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelestialBodyComponent } from './three-js/components/celestial-body/celestial-body.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
