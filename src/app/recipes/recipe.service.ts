import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Steak and Salad','Tender Steak with Caesar salad','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',[
            new Ingredient('Steak',1),
            new Ingredient('lettuce',1),
            new Ingredient('Ball Pepper',2)
        ]),
        new Recipe('Goat Jollof','Perfumed Goat Jollof and Kelewele','https://i0.wp.com/www.gbcghanaonline.com/wp-content/uploads/2018/11/Jollof.jpg?fit=2044%2C1363&ssl=1',[
            new Ingredient('Rice',1),
            new Ingredient('Tomatoes', 1),
            new Ingredient('Peppers',2),
            new Ingredient('Goat meat',1)
        ]),
        new Recipe('Goat Soup and pounded Yam','Special Nigerian Goat Soup and pounded yam','https://upload.wikimedia.org/wikipedia/commons/6/67/Ghanaian_goat_meat_soup..jpg',[
            new Ingredient('Yam',1),
            new Ingredient('Tomatoes', 1),
            new Ingredient('Peppers',2),
            new Ingredient('Onions',2),
            new Ingredient('Goat meat',1)
        ]),
        new Recipe('Banku and Okra','Special Ghanaian Banku and Okra stew/soup','https://upload.wikimedia.org/wikipedia/commons/2/2e/Banku_with_okro_stew_and_anchovies.jpg',[
            new Ingredient('Corn dough',2),
            new Ingredient('Tomatoes', 1),
            new Ingredient('Peppers',2),
            new Ingredient('Onions',2),
            new Ingredient('Goat meat',1)
        ]),
        new Recipe('Ampesi and Abomu','Special Ghanaian boiled yam, cocoyam and asanka grined kontomre with dried salted fish','https://i.pinimg.com/236x/84/bd/59/84bd5919863f375ef63cb0a09e14719f.jpg',[
            new Ingredient('Onion',1),
            new Ingredient('Paml oil or cooking oil', 1),
            new Ingredient('Fresh tomatoes',2),
            new Ingredient('Peppers',3),
            new Ingredient('Pear',1),
            new Ingredient('Yam',1),
            new Ingredient('Plantain',1),
            new Ingredient('Salted Fish',1)
        ])

    ];

    constructor(private shoppingService: ShoppingService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    getSelectedRecipe(id: number){
        return this.recipes[id];
    }

    getRecipeIndex(selected: Recipe){
        return this.recipes.indexOf(selected);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addShoppingIngredients(ingredients);
    }
}