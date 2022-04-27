import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { HomePublicComponent } from './components/home-public/home-public.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { ExsolovinosComponent } from './components/exsolovinos/exsolovinos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    PublicLayoutComponent,
    HomePublicComponent,
    AdopcionesComponent,
    ExsolovinosComponent,
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class PublicModule { }
