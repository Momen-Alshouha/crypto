import { Component } from '@angular/core';
import { Feature } from '../../interfaces/feature';
import { FeatureBoxComponent } from "../shared/feature-box/feature-box.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-features',
    standalone: true,
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
    imports: [FeatureBoxComponent,CommonModule]
})
export class FeaturesComponent {
  protected featuresList : Feature[] = [
    {
      "icon": "invest_crypto_icon.svg",
      "title": "Invest in crypto",
      "paragraph": "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform."
    },
    {
      "icon": "fast_transaction_icon.svg",
      "title": "Fast Transaction",
      "paragraph": "Invest in cryptocurrency with our secure and easy-to-use online platform. With 24/7 access to full service customer support, you can trade with confidence."
    },
    {
      "icon": "secure_icon.svg",
      "title": "Secure",
      "paragraph": "Gain access to a variety of digital assets with just a few clicks. Our intuitive platform makes it easy to buy, sell, and store your cryptocurrency."
    }
  ];

}
