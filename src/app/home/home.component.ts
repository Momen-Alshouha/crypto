import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";
import { HomeSectionsComponent } from './home-sections/home-sections.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeroComponent, FeaturesComponent,HomeSectionsComponent]
})
export class HomeComponent {

}
