import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService{
    ingredientChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Cheese',3)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    removeIngredient(id: number){}

    addShoppingIngredients(ingredients: Ingredient[]){
        //Solution 1
        /*for (let ingred of ingredients){
            this.ingredients.push(ingred);
        }*/
        
        //Solution 2 - using a spread operator
        this.ingredients.push(...ingredients);

        this.ingredientChanged.next(this.ingredients.slice());
    }
}