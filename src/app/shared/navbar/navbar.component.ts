import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected environment = environment;
}
