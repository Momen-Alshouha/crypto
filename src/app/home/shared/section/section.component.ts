import { Component, Input } from '@angular/core';
import { HomeSection } from '../../../interfaces/home-section';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  protected env = environment;
 @Input() additionalClasses?:string;
 @Input() sectionData!:HomeSection;
}
