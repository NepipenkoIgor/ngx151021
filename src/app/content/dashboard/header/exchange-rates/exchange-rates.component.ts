import { Component } from '@angular/core';
import { IRate, Mode } from './exchange-rates.directive';

@Component({
	selector: 'ngx-classwork-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.css'],
})
export class ExchangeRatesComponent {
	public rates: IRate[] = [
		{
			value: 1,
			currency: 'USD',
		},
		{
			value: 10,
			currency: 'EUR',
		},
		{
			value: 33,
			currency: 'RUB',
		},
	];

	public mode: Mode = Mode.ON;

	public ms: number = 2000;

	public slider: boolean = false;

	public changeDelay(event: Event) {
		const { value } = event.target as HTMLInputElement;
		const num: number = Number(value);
		if (Number.isNaN(num)) {
			this.ms = 2000;
			return;
		}
		this.ms = num;
	}
}
