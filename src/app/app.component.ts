import { Component, Optional } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UnSubscriber } from './unsubscriber';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IProduct, ProductsService } from './products.service';

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

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public constructor(
		// @Optional() @Self() @Inject(ProductsService) private readonly productsService: ProductsService, //private readonly injector: Injector,
		@Optional() private readonly productsService: ProductsService, //private readonly injector: Injector,
	) {
		super();
		// this.productsService = this.injector.get(ProductsService);
		//this.products$ = this.productsService.getProducts();
	}

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
