import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients('Eggs',3),
    new Ingredients('Apple',5),
    new Ingredients('Cucumber',77)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
