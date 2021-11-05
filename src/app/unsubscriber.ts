import { Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UnSubscriber implements OnDestroy {
	// public subs: Subscription[] = [];
	//
	// public ngOnDestroy() {
	// 	this.subs.forEach((s) => {
	// 		s.unsubscribe();
	// 	});
	// }

	public unSubscriber$$ = new Subject();

	public ngOnDestroy() {
		this.unSubscriber$$.next();
		this.unSubscriber$$.complete();
	}
}
