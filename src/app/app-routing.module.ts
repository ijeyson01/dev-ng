import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'country', pathMatch: 'full'
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
   },
   {
    path: 'country',
    loadChildren: () => import('./modules/country/country.module').then( m => m.CountryModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
