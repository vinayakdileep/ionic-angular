import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipesPage } from './receipes.page';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch:'full'},
  {
    path: 'recipes',
    children: [
      {
        path: '',
        component: ReceipesPage
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
      }
    ]
  },
  // {
  //   path: '',
  //   component: ReceipesPage
  // },
  // {
  //   path: 'recipe-detail',
  //   loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipesPageRoutingModule {}
