import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
 
//import { HomePage } from './home/home.page';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/places',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule),
    canMatch: [authGuard]
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule),
    canMatch: [authGuard]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}