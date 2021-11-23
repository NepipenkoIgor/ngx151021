import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';

@Component({
	selector: 'ngx-classwork-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
	public readonly pageTitle$: Observable<string> = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(private readonly activatedRoute: ActivatedRoute) {}

	public ngOnInit() {
		console.log(this.activatedRoute.snapshot.data['title']);
	}

	public login(_data: { username: string; password: string }) {
		// send data
	}

	public ngOnDestroy() {
		console.log('Destroyed');
	}
}
