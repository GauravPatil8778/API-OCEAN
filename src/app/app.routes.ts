import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JokeapiComponent } from './jokeapi/jokeapi.component';
import { QuoteapiComponent } from './quoteapi/quoteapi.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { GenderapiComponent } from './genderapi/genderapi.component';

export const routes: Routes = [

    {path:'',component:HomepageComponent},
    {path:'jokeapi',component:JokeapiComponent},
    {path:'quoteapi',component:QuoteapiComponent},
    {path:'randomuser',component:RandomuserComponent},
    {path:'genderapi',component:GenderapiComponent},




];
