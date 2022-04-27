import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { ExsolovinosComponent } from './components/exsolovinos/exsolovinos.component';
import { HomePublicComponent } from './components/home-public/home-public.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:'inicio',
    component:HomePublicComponent

  },
  {
    path:'adopciones',
    component:AdopcionesComponent

  },
  {
    path:'exsolovinos',
    component:ExsolovinosComponent

  },
  {
    path:'sobre-nosotros',
    component:SobreNosotrosComponent

  },
  {
    path:'',
    component:HomePublicComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
