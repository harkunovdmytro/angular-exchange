import {Component, OnInit} from '@angular/core';
import {CurrencyInterface} from './CurrencyInterface'

const API_LINK = 'https://v6.exchangerate-api.com/v6/974c1615d93784ab43723a61/latest/UAH'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerCurrencies: CurrencyInterface[] = []

  currenciesNames: Array<string> = []

  rates: { [key: string]: any } = {}

  amount1: number = 0
  amount2: number = 0

  currency1: string = 'UAH'
  currency2: string = 'UAH'

  ngOnInit(): void {
    console.log('hi app')
    this.getHeaderCurrency()
    this.getAllCurrencies()
  }

  setCurrency1(newCurrency1: string) {
    this.currency1 = newCurrency1
    this.amount2 = +(+this.amount1 * this.rates[this.currency2] / this.rates[newCurrency1]);
  }

  setCurrency2(newCurrency2: string) {
    this.currency2 = newCurrency2
    this.amount1 = +this.amount2 * this.rates[this.currency1] / this.rates[newCurrency2]
  }

  setAmount1(newAmount1: number) {
    this.amount1 = +newAmount1
    this.amount2 = +(+newAmount1 * this.rates[this.currency2] / this.rates[this.currency1]);
  }

  setAmount2(newAmount2: number) {
    this.amount2 = +newAmount2
    this.amount1 = +(+newAmount2 * this.rates[this.currency1] / this.rates[this.currency2]);
  }

  async getAllCurrencies() {

    await fetch(API_LINK)
      .then(res => res.json())
      .then(result => {
        this.currenciesNames = Object.keys(result.conversion_rates)
        this.rates = result.conversion_rates
      });
  }

  async getHeaderCurrency() {
    await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then(res => res.json())
      .then(result => {
        this.headerCurrencies = result.map((item: CurrencyInterface) => (item))
        console.log(this.headerCurrencies)
        this.headerCurrencies.map((item: CurrencyInterface) => console.log(item.ccy))
      });
  }
}
