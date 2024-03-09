import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent, FeaturesComponent]
})
export class HomeComponent {

}
