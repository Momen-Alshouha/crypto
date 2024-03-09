import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent]
})
export class HomeComponent {

}
