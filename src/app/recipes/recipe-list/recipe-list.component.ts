import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test',
      'https://www.allrecipes.com/thmb/KmVpU_AIw9ry-orvi4Ewz8DuAYM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25678-beef-stew-vi-humblepieliving-001-4x3-96b76b098c8642aea824065bce96df7e.jpg'
    ),
  ];
}
