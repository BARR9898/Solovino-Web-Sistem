import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsListComponent } from './components/adopciones/adoptions-list/adoptions-list.component';
import { CreateAdoptionComponent } from './components/adopciones/create-adoption/create-adoption.component';
import { ViewAdoptionComponent } from './components/adopciones/view-adoption/view-adoption.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ExsolovinosComponent } from './components/exsolovinos/exsolovinos.component';
import { PostListComponent } from './components/post-list/post-list.component';
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
    path: '',
    component: PostListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
