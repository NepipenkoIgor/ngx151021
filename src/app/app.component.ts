import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public pageTitle = { title: 'NGX 151021' };

	public drawer!: MatSidenav;

	//	public constructor() {
	// private appRef: ApplicationRef
	// setTimeout(() => {
	// 	this.appRef.tick();
	// }, 5000);
	//} //  private cdr: ChangeDetectorRef

	public onSetSideNav(drawer: MatSidenav) {
		// Promise.resolve().then(() => {
		// 	this.drawer = drawer;
		// });
		this.drawer = drawer;
		// this.cdr.detectChanges();
	}

	public search(title: string) {
		this.pageTitle = { title };
	}
}
