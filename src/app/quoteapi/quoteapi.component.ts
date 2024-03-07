import { Component } from '@angular/core';

@Component({
  selector: 'app-quoteapi',
  standalone: true,
  imports: [],
  templateUrl: './quoteapi.component.html',
  styleUrl: './quoteapi.component.css'
})
export class QuoteapiComponent {

  title = "Click to get Quote";
  author = "";
  url = "https://api.quotable.io/random";
  getquote(){

  fetch(this.url)
  .then((data) => data.json())
  .then((item) => {
    this.title = item.content;
    this.author = item.author;
  });

  }
}
