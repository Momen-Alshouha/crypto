import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected environment = environment;
}
