import { Component } from '@angular/core';

@Component({
  selector: 'app-jokeapi',
  standalone: true,
  imports: [],
  templateUrl: './jokeapi.component.html',
  styleUrl: './jokeapi.component.css'
})
export class JokeapiComponent {



url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
joke:string="Click To Get Joke";
 getJoke (){
    
    fetch(this.url)
    .then(data => data.json())
    .then(item =>{
        this.joke = `${item.joke}`;
        
    });
}


}
