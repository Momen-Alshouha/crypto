import { Component } from '@angular/core';
import { SectionComponent } from '../shared/section/section.component';
import { HomeSection } from '../../home-section';
@Component({
  selector: 'app-home-sections',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './home-sections.component.html',
  styleUrl: './home-sections.component.scss',
})
export class HomeSectionsComponent {
  homeSectionsData: HomeSection[] = [
    {
      text: 'Stay up-to-date with the latest news and trends in the crypto space. Follow our market insights to make informed decisions.',
      imgName: 'trade-with-confidence.svg',
      btnText: 'Explore More',
    },
    {
      text: 'Stay up-to-date with the latest news and trends in the crypto space. Follow our market insights to make informed decisions.',
      imgName: '24-7-customers.svg',
      btnText: 'Learn More',
    },
    {
      text: 'Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments.',
      imgName: 'security.svg',
      btnText: 'Get Started',
    },
  ];
}
