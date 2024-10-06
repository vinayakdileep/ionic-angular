import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipesPageRoutingModule } from './receipes-routing.module';

import { ReceipesPage } from './receipes.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipesPageRoutingModule
  ],
  declarations: [ReceipesPage, RecipeItemComponent]
})
export class ReceipesPageModule {}
