import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService,private route: ActivatedRoute, private router: Router){ }

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(selectedRecipe: Recipe) {   
    this.recipeService.recipeSelected.next(selectedRecipe); 
  }

  onCreateNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
