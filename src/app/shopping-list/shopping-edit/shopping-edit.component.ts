import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredients(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value
      );
    console.log(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value
      );
    this.ingredientAdded.emit(newIngredient);
  }
}
