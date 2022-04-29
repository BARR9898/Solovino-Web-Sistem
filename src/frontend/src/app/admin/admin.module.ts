import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SaharedModule } from './shared/sahared.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { MaterialModule } from '../material/material.module';
import { NgModel } from '@angular/forms';
import { CreateAdoptionComponent } from './components/adopciones/create-adoption/create-adoption.component';
import { ViewAdoptionComponent } from './components/adopciones/view-adoption/view-adoption.component';
import { AdoptionsListComponent } from './components/adopciones/adoptions-list/adoptions-list.component';
import { ExsolovinosComponent } from './components/exsolovinos/exsolovinos.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    PostListComponent,
    CreatePostComponent,
    ViewPostComponent,
    CreateAdoptionComponent,
    ViewAdoptionComponent,
    AdoptionsListComponent,
    ExsolovinosComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SaharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MaterialModule,


  ]
})
export class AdminModule { }
