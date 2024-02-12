import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: ingredient[] = [
    new ingredient('Apples', 5),
    new ingredient('Tomatoes', 10),
  ];
  onIngredientAdded(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
    console.log(ingredients);
  }
}
