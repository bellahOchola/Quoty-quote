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
    new Quotes('Change your thoughts and you change your  word', 'By Norman Vincent', 'vic', new Date(2002,5,12),0,0),
    new Quotes('Act as if what you do makes a difference to others', 'By William James', 'melvin', new Date(2009,3,8),0,0),
    new Quotes('When you cannot find the sunshine Be the sunshine', 'By Mash James', 'carly', new Date(2012,9,16),0,0),
    // new Quotes('Never allow someone to be your priority while you are their slave', 'By Catherine Carter', '', new Date(2015,7.28))
  ];
    // {information:'Enjoy the Little Things',author:'By James Adam'}

}
