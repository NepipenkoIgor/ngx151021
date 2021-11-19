import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	public pageTitle = { title: 'NGX 151021' };

	public drawer!: MatSidenav;

	public onSetSideNav(drawer: MatSidenav) {
		this.drawer = drawer;
	}
}
