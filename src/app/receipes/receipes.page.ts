import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {

  recipes:Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipesService.recipeList.subscribe(
      recipe => this.recipes = recipe);
  }

  

  

}
