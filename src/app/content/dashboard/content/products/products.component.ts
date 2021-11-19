import { Component, Optional } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
	public searchText = '';

	public onlyFavorites = false;

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public constructor(@Optional() private readonly productsService: ProductsService) {}

	public checkOnlyFavorites(e: MatCheckboxChange) {
		this.onlyFavorites = e.checked;
	}
}
