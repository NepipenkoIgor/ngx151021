import {
	ChangeDetectorRef,
	Directive,
	Input,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

export interface IRate {
	value: number;
	currency: string;
}

export const enum Mode {
	ON = 'on',
	OFF = 'off',
}

@Directive({
	selector: '[ngxClassworkExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {
	@Input('ngxClassworkExchangeRatesFrom')
	public rates: IRate[] = [];

	@Input('ngxClassworkExchangeRatesAutoplay')
	public playAuto: Mode = Mode.OFF;

	@Input('ngxClassworkExchangeRatesDelay')
	public set interval(ms: number) {
		if (!ms) {
			return;
		}
		this.ms = ms;
		this.resetInterval();
	}

	private context: any;

	private ms: number = 0;

	private index: number = 0;

	private intervalId: number | null = null;

	public constructor(
		private readonly tpl: TemplateRef<any>,
		private readonly vcr: ViewContainerRef,
		private readonly cdr: ChangeDetectorRef,
	) {}

	public ngOnInit() {
		this.context = {
			$implicit: this.rates[0],
			controls: {
				next: () => this.next(),
				prev: () => this.prev(),
			},
		};
		this.vcr.createEmbeddedView(this.tpl, this.context);
		this.resetInterval();
	}

	private next() {
		this.resetInterval();
		this.index++;
		if (this.index >= this.rates.length) {
			this.index = 0;
		}
		this.context.$implicit = this.rates[this.index];
	}

	private prev() {
		this.resetInterval();
		this.index--;
		if (this.index < 0) {
			this.index = this.rates.length - 1;
		}
		this.context.$implicit = this.rates[this.index];
	}

	private initInterval(): void {
		this.intervalId = setInterval(() => {
			this.next();
			this.cdr.detectChanges();
		}, this.ms);
	}

	private clearInterval(): this {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
		return this;
	}

	private resetInterval(): void {
		if (this.playAuto !== Mode.ON) {
			return;
		}
		this.clearInterval().initInterval();
	}
}
