import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from '../public/components/sobre-nosotros/sobre-nosotros.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdoptionsListComponent } from './components/adopciones/adoptions-list/adoptions-list.component';
import { CreateAdoptionComponent } from './components/adopciones/create-adoption/create-adoption.component';
import { ViewAdoptionComponent } from './components/adopciones/view-adoption/view-adoption.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ExsolovinosComponent } from './components/exsolovinos/exsolovinos.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UsersComponent } from './components/users/users.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  {
    path:'list-posts',
    component: PostListComponent
  },
  {
    path:'create-post',
    component: CreatePostComponent
  },
  {
    path:'nosotros',
    component:AboutUsComponent
  },
  {
    path:'view-post/:id',
    component: ViewPostComponent
  },
  {
    path:'list-adoptions',
    component: AdoptionsListComponent
  },
  {
    path:'create-adoption',
    component: CreateAdoptionComponent
  },
  {
    path:'exsolovinos' ,
    component: ExsolovinosComponent
  },
  {
    path:'view-adoption/:id' ,
    component: ViewAdoptionComponent
  },
  {
    path:'users' ,
    component: UsersComponent
  },
  {
    path: '',
    component: PostListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
