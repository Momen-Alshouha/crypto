import { Component, Input } from '@angular/core';
import { Feature } from '../../../../feature';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-feature-box',
  standalone: true,
  imports: [],
  templateUrl: './feature-box.component.html',
  styleUrl: './feature-box.component.scss'
})
export class FeatureBoxComponent {
  @Input() featureData! : Feature;
  @Input() additionalClass? : string;
  protected env = environment;
}
