import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe((params: Params) => {
          //this.recipeService.getSelectedRecipe(+params['id']);

          this.id = +params['id'];
          this.recipe = this.recipeService.getSelectedRecipe(this.id);
        });
  }  

  OnAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //Both are correct
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); //complex navigation
  }
}