import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'cars', pathMatch: 'full'
  },
  {
    path: 'cars', 
    loadChildren: () => import('./modules/cars/cars.module').then( m => m.CarsModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./modules/person/person.module').then( m => m.PersonModule)
  },
  { path: 'admin', 
    loadChildren: () => import('./modules/admin/admin/admin.module').then( m => m.AdminModule )
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
