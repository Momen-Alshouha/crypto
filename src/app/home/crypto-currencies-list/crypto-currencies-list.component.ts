import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crypto-currencies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-currencies-list.component.html',
  styleUrl: './crypto-currencies-list.component.scss',
})
export class CryptoCurrenciesListComponent implements OnInit {

  currenciesData$!: Observable<any>;

  constructor(private _currencyService: CurrencyService) {}
  
  ngOnInit(): void {
    // this.currenciesData$ = this.getCurrenciesData$();
  }

  getCurrenciesData$(): Observable<any> {
    return this._currencyService.getTrendingCryptocurrencies('usd');
  }
}
