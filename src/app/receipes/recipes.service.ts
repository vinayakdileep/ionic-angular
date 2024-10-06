import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  @Output() recipeList = new EventEmitter<Recipe[]>();

  private recipes:Recipe[] = [
    {
      id: "1",
      name: "Croissant",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFaK5W2TSZsT68gFIQCEwIGLlQdh3Snx6Ye59TqeiAdDzp8VBij-ZIjSV4W0obaJWgkE&usqp=CAU",
      ingredients: [
        "500g flour",
        "300g butter",
        "70g sugar",
        "1 egg",
        "200ml milk",
        "10g yeast",
        "Pinch of salt"
      ]
    },
    {
      id: "2",
      name: "Ratatouille",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53f59ee3-60ce-4d32-8885-c6f05457259c/dgy056b-12a05f56-cbce-4536-aed8-09a1c2217874.jpg/v1/fill/w_400,h_515,q_75,strp/ratatouille_advertisement_food_photography__1__by_anavrin_ai_dgy056b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvZGd5MDU2Yi0xMmEwNWY1Ni1jYmNlLTQ1MzYtYWVkOC0wOWExYzIyMTc4NzQuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvYW5hdnJpbi1haS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.EfpTznBX2l9eMN_gfWbmNXtvn-VofNg8qaUoXd0yGKw",
      ingredients: [
        "2 eggplants",
        "2 zucchinis",
        "1 red bell pepper",
        "1 yellow bell pepper",
        "1 onion",
        "4 tomatoes",
        "3 garlic cloves",
        "Olive oil",
        "Herbes de Provence",
        "Salt and pepper"
      ]
    },
    {
      id: "3",
      name: "Quiche Lorraine",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6asesBbbabLPuanyru2geuLr3EAZVyh_xg&s",
      ingredients: [
        "Shortcrust pastry",
        "200g smoked bacon",
        "200ml heavy cream",
        "3 eggs",
        "100g grated cheese (Gruyère or Emmental)",
        "Nutmeg",
        "Salt and pepper"
      ]
    },
    {
      id: "4",
      name: "Bouillabaisse",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jHsZFuED8Mswed52_3bTvY3syLDiGH0auQC76FcjRic4M_VfmzNc8ewl18l_ObGvz8s&usqp=CAU",
      ingredients: [
        "1kg mixed fish (such as cod, sea bass, and red mullet)",
        "1 fennel bulb",
        "4 garlic cloves",
        "4 tomatoes",
        "1 leek",
        "1 onion",
        "Olive oil",
        "Saffron",
        "Bay leaves",
        "Thyme",
        "Salt and pepper"
      ]
    },
    {
      id: "5",
      name: "Crème Brûlée",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkH08zVRDnAc2n7fuTHi5QTE0yWNAIP2ZXAg&s",
      ingredients: [
        "500ml heavy cream",
        "100g sugar",
        "5 egg yolks",
        "1 vanilla bean",
        "Brown sugar for caramelizing"
      ]
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    //return this.recipes.find(recipe => recipe.id === recipeId);
    const recipe = this.recipes.find(recipe => recipe.id === recipeId);
  
    // Use spread operator to create a shallow copy of the found recipe
    return recipe ? { ...recipe } : undefined;
  }

  deleteRecipe(recipeId?: string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    this.recipeList.emit(this.recipes);

  }
}
