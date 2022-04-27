import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './admin/components/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {
    path:'public',
    component: PublicLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./public/public.module').then(m => PublicModule)
      }
    ]

  },
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./admin/admin.module').then(m => AdminModule)
      }
    ]

  },
  {
    path:'',
    component: PublicLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./public/public.module').then(m => PublicModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
