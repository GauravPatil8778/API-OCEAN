import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'API_Applications_Pool';
}
