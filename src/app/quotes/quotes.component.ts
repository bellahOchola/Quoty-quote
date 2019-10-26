import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Change your thoughts and you change your  word', 'By Norman Vincent'),
    new Quotes('Act as if what you do makes a difference to others', 'By William James'),
    new Quotes('When you cannot find the sunshine Be the sunshine', 'By Mash James'),
    new Quotes('Never allow someone to be your priority while you are their slave', 'By Catherine Carter')
  ];
  constructor() { }

  ngOnInit() {
  }

}
