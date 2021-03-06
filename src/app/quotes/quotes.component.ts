import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Two things are infinite: the universe and human stupidity and I am not sure about the universe.', ' Norman Vincent', 'vic', new Date(2019,10,12),0,0),
    new Quotes('Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.', 'William James', 'melvin', new Date(2019,9,8),0,0),
    new Quotes('You know you are in love when you cannot fall asleep because reality is finally better than your dreams.', 'Mash James', 'carly', new Date(2019,9,16),0,0)
    
    // new Quotes('Never allow someone to be your priority while you are their slave', ' Catherine Carter', new Date(2015,7.28))
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date (quote.publishDate)
    this.quotes.push(quote)
  }

  upvote(quote){
    quote.likes= quote.likes + 1;
  }
  downvote(quote){
    quote.dislikes = quote.dislikes+1;
  }

  @Output() isComplete = new EventEmitter<boolean>();

  // quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  deleteQuote(done, index){
    if (done) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  firstNum :number
  lastNum :number
  count: number

  loopVote(){
    this.firstNum = 0
    this.lastNum = 0

    for(this.count=0 ; this.count < this.quotes.length; this.count++) {
      this.lastNum = this.quotes[this.count].likes;
      if(this.lastNum > this.firstNum){this.firstNum = this.lastNum}
    }
    return  this.firstNum
  }

  constructor() { }

  ngOnInit() {
  }

}
