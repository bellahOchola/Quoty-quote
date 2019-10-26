import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Change your thoughts and you change your  word', ' Norman Vincent', new Date(2002,5,12)),
    new Quotes('Act as if what you do makes a difference to others', 'William James', new Date(2009,3,8)),
    new Quotes('When you cannot find the sunshine Be the sunshine', 'Mash James', new Date(2012,9,16)),
    // new Quotes('Never allow someone to be your priority while you are their slave', ' Catherine Carter', new Date(2015,7.28))
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.publishDate = new Date (quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
