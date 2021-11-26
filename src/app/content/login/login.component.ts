import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { loginPending } from '../../store/actions/auth.actions';

@Component({
	selector: 'ngx-classwork-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
	public readonly pageTitle$: Observable<string> = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly store: Store<IAppState>,
	) {}

	public ngOnInit() {
		console.log(this.activatedRoute.snapshot.data['title']);
	}

	public login(user: { username: string; password: string }) {
		// send data
		this.store.dispatch(loginPending({ user }));
	}

	public ngOnDestroy() {
		console.log('Destroyed');
	}
}
