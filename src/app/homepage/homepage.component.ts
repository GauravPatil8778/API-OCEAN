import { Component } from '@angular/core';
import { JokeapiComponent } from "../jokeapi/jokeapi.component";
import { QuoteapiComponent } from "../quoteapi/quoteapi.component";
import { RandomuserComponent } from "../randomuser/randomuser.component";
import { GenderapiComponent } from "../genderapi/genderapi.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [RouterLink,JokeapiComponent, QuoteapiComponent, RandomuserComponent, GenderapiComponent]
})
export class HomepageComponent {

}
