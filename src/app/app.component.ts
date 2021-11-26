import { Component, OnInit } from '@angular/core';
import { UnSubscriber } from './unsubscriber';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from './store';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber implements OnInit {
	public constructor(private readonly router: Router, private readonly store: Store<IAppState>) {
		super();
	}

	public ngOnInit() {
		this.store
			.select('auth', 'user')
			.pipe(filter(Boolean))
			.subscribe(() => {
				// this.router.navigate(['/dashboard']);
			});
		//this.router.resetConfig()
		this.router.events
			//.pipe(filter((event: Event) => event instanceof NavigationEnd))
			.pipe(
				filter((event: Event) => event instanceof NavigationStart && event.id === 1),
				take(1),
			)
			.subscribe((_event: Event) => {});
	}
}
