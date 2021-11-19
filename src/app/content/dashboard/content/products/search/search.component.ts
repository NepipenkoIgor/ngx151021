import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnSubscriber } from '../../../../../unsubscriber';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { ProductsService } from '../products.service';

@Component({
	selector: 'ngx-classwork-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
	providers: [ProductsService],
})
export class SearchComponent extends UnSubscriber implements OnInit {
	@Input()
	public searchTerm: string = '';

	@Output()
	public searchTermChange = new EventEmitter<string>();

	private searchSequence$$: Subject<Event> = new Subject();

	public ngOnInit() {
		this.searchSequence$$
			.pipe(
				debounceTime(300),
				map((event: Event) => {
					const { value } = event.target as HTMLInputElement;
					return value;
				}),
				takeUntil(this.unSubscriber$$),
			)
			.subscribe((value) => {
				this.searchTermChange.emit(value);
			});
	}

	public onSearch(event: Event): void {
		this.searchSequence$$.next(event);
	}
}
