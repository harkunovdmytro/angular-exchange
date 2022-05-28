import {Component, Input} from '@angular/core';
import {CurrencyInterface} from './../CurrencyInterface'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  @Input() headerCurrencies?: Array<CurrencyInterface>

  constructor() {
  }

}
