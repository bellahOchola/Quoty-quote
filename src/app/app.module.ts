import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightQuoteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailComponent,
    QuotesFormComponent,
    DateCountPipe,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
