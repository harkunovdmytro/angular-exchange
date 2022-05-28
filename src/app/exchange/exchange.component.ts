import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  @Input() currenciesNames?: Array<string>

  @Input() amount1?: number
  @Input() amount2?: number

  @Input() currency1?: string
  @Input() currency2?: string

  @Output() emitSetCurrency1 = new EventEmitter<string>();
  @Output() emitSetCurrency2 = new EventEmitter<string>();

  @Output() emitSetAmount1 = new EventEmitter<number>();
  @Output() emitSetAmount2 = new EventEmitter<number>();

  setCurrency1 = (e: any) => this.emitSetCurrency1.emit(e.target.value);
  setCurrency2 = (e: any) => this.emitSetCurrency2.emit(e.target.value);

  setAmount1 = (e: any) => this.emitSetAmount1.emit(e.target.value);
  setAmount2 = (e: any) => this.emitSetAmount2.emit(e.target.value);

}
