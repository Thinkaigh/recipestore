import { Component, OnInit, OnDestroy} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientSub: Subscription;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientSub = this.shoppingService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(){
    this.ingredientSub.unsubscribe();
  }
}
