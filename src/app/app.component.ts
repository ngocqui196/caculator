import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caculator';
  items: number;

  addItem(newItem: number) {
    this.items = newItem;
   console.log(this.items, 'this item')
   console.log(newItem, 'newItem')
  }
}
