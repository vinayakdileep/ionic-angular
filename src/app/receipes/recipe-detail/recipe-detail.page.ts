import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  
  loadedRecipe: Recipe | undefined;
  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService,
    private router: Router,
    private alertCntrl: AlertController
  ) { }

  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(!params.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }
      const id = params.get('recipeId');
      if(id)
        this.loadedRecipe = this.recipesService.getRecipe(id);
    });
  }

  deletRecepe(){
    this.alertCntrl.create({header: 'Delete', message: 'Are you sure you want to delete this recipe?',
      buttons: [{text: 'Cancel', role: 'cancel'},
        {text: 'Delete', handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe?.id);
          this.router.navigate(['/recipes']);
        }}
      ]
    }).then((alertEl) => alertEl.present());
    
  }

}
