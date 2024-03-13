import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
protected environment = environment;
 email : string = 'unreal@outlook.com';
}
