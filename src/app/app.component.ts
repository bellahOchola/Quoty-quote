import { Component } from '@angular/core';
import {Quotes} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes: Quotes[] = [
    new Quotes('Enjoy the Little Things', 'By James Adam'),
    new Quotes('Enjoy the Little Things', 'By James Adam')
    // {information:'Enjoy the Little Things',author:'By James Adam'}
  ];
}
