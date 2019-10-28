import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import{ Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote:Quotes;
  upvote(quote){
    quote.likes= quote.likes + 1;
  }
  downvote(quote){
    quote.dislikes = quote.dislikes+1;
  }

  // quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  constructor() { }

  ngOnInit() {
  }

}
