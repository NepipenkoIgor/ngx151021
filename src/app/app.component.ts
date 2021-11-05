import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { UnSubscriber } from './unsubscriber';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
	public pageTitle = { title: 'NGX 151021' };

	public drawer!: MatSidenav;

	public searchText = '';

	public onlyFavorites = false;

	public products$: Observable<IProduct[]> = products$;

	public onSetSideNav(drawer: MatSidenav) {
		this.drawer = drawer;
	}

	public search(title: string) {
		this.pageTitle = { title };
	}

	public checkOnlyFavorites(e: MatCheckboxChange) {
		this.onlyFavorites = e.checked;
	}

	//
	// public filteredProducts(products: IProduct[], searchText: string) {
	// 	console.log('CALC');
	// 	if (!searchText) {
	// 		return products;
	// 	}
	// 	return products.filter((p: IProduct) =>
	// 		`${p.title}${p.price}`.toLowerCase().includes(searchText.toLowerCase()),
	// 	);
	// }
}
